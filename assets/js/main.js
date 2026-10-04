document.documentElement.classList.add("js");

// Tradução de rótulos gerados em JS (fallback: português)
const t = (pt) => (window.i18n ? window.i18n.t(pt) : pt);

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const navbar = document.querySelector(".navbar");

// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

const setMenuOpen = (open) => {
  if (!navToggle || !navLinks) return;
  navLinks.classList.toggle("open", open);
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", t(open ? "Fechar menu" : "Abrir menu"));
};

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => setMenuOpen(!navLinks.classList.contains("open")));
}

// Scroll suave entre seções com easing próprio
const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
let scrollAnim = null;

const scrollToY = (targetY) => {
  if (scrollAnim) cancelAnimationFrame(scrollAnim);
  const startY = window.scrollY;
  const distance = targetY - startY;
  if (reduceMotion || Math.abs(distance) < 2) {
    window.scrollTo(0, targetY);
    return;
  }
  const duration = Math.min(1100, Math.max(450, Math.abs(distance) * 0.45));
  const start = performance.now();

  const step = (now) => {
    const t = Math.min(1, (now - start) / duration);
    window.scrollTo(0, startY + distance * easeInOutCubic(t));
    scrollAnim = t < 1 ? requestAnimationFrame(step) : null;
  };
  scrollAnim = requestAnimationFrame(step);
};

// Interrompe a animação se a pessoa rolar manualmente
["wheel", "touchstart", "keydown"].forEach((evt) =>
  window.addEventListener(evt, () => {
    if (scrollAnim) cancelAnimationFrame(scrollAnim);
    scrollAnim = null;
  }, { passive: true })
);

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const id = link.getAttribute("href");
    const target = id === "#top" ? document.body : document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    setMenuOpen(false);
    const navH = navbar ? navbar.offsetHeight : 0;
    const y = id === "#top" ? 0 : target.getBoundingClientRect().top + window.scrollY - navH + 1;
    const maxY = document.documentElement.scrollHeight - window.innerHeight;
    scrollToY(Math.min(Math.max(0, y), maxY));
    history.replaceState(null, "", id);
  });
});

// Barra de progresso, navbar e seção ativa
const progress = document.querySelector(".scroll-progress span");
const sections = ["top", "sobre", "projetos", "stack", "experiencia", "contato"]
  .map((id) => document.getElementById(id))
  .filter(Boolean);
const navItems = document.querySelectorAll('.nav-links a[href^="#"], .section-dots a');

let ticking = false;
const onScroll = () => {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  if (progress) progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  if (navbar) navbar.classList.toggle("scrolled", y > 8);

  // Seção ativa = última cujo topo passou de 40% da tela (ou a última, no fim da página)
  let current = sections[0];
  const line = window.innerHeight * 0.4;
  sections.forEach((s) => {
    if (s.getBoundingClientRect().top <= line) current = s;
  });
  if (y >= max - 2) current = sections[sections.length - 1];

  navItems.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${current.id}`));
  ticking = false;
};

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(onScroll);
    ticking = true;
  }
}, { passive: true });
window.addEventListener("resize", onScroll);
onScroll();

// Animação de entrada ao rolar
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !reduceMotion) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

// Placeholders de imagem: mostra o aviso enquanto o arquivo não existir
document.querySelectorAll(".media img").forEach((img) => {
  const markEmpty = () => img.closest(".media").classList.add("is-empty");
  if (img.complete && img.naturalWidth === 0) markEmpty();
  else img.addEventListener("error", markEmpty);
});

// Projetos: o 1º começa aberto; os demais abrem em "Ver detalhes"
document.querySelectorAll(".case").forEach((card) => {
  const head = card.querySelector(".case-head");
  const btn = card.querySelector(".case-toggle");
  if (!head || !btn) return;
  const label = btn.querySelector("span");

  const setOpen = (open) => {
    card.classList.toggle("is-open", open);
    btn.setAttribute("aria-expanded", String(open));
    label.textContent = t(open ? "Ocultar detalhes" : "Ver detalhes");
  };

  // O cabeçalho inteiro é clicável; o botão garante o acesso por teclado
  head.addEventListener("click", () => setOpen(!card.classList.contains("is-open")));
});

// Tema claro/escuro (o tema inicial é aplicado por um script no <head>)
const themeToggle = document.querySelector(".theme-toggle");
const rootEl = document.documentElement;
const systemLight = window.matchMedia("(prefers-color-scheme: light)");

const setTheme = (theme, { save = true } = {}) => {
  // Transição de cores só durante a troca
  rootEl.classList.add("theme-switching");
  rootEl.setAttribute("data-theme", theme);
  if (save) {
    try { localStorage.setItem("theme", theme); } catch (e) {}
  }
  setTimeout(() => rootEl.classList.remove("theme-switching"), 350);
};

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    setTheme(rootEl.getAttribute("data-theme") === "light" ? "dark" : "light");
  });
}

// Sem escolha salva, acompanha o tema do sistema
systemLight.addEventListener("change", (e) => {
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (err) {}
  if (!saved) setTheme(e.matches ? "light" : "dark", { save: false });
});

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
