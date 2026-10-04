// Diagrama de fluxo: mostra a descrição da etapa ao passar o mouse ou tocar
document.querySelectorAll("[data-flow]").forEach((root) => {
  const steps = [...root.querySelectorAll(".flow-step")];
  const caption = root.querySelector(".flow-caption");
  // Guarda a legenda padrão em PT e traduz na hora de exibir
  const defaultText = window.i18n ? window.i18n.toPt(caption.textContent) : caption.textContent.trim();
  const t = (pt) => (window.i18n ? window.i18n.t(pt) : pt);
  let swapTimer = null;

  const setCaption = (text) => {
    if (caption.textContent === text) return;
    clearTimeout(swapTimer);
    caption.classList.add("is-changing");
    swapTimer = setTimeout(() => {
      caption.textContent = text;
      caption.classList.remove("is-changing");
    }, 180);
  };

  const select = (step) => {
    steps.forEach((s) => s.classList.toggle("is-active", s === step));
    setCaption(step ? step.dataset.desc : t(defaultText));
  };

  steps.forEach((step) => {
    step.addEventListener("mouseenter", () => select(step));
    step.addEventListener("focus", () => select(step));
    step.addEventListener("click", () => select(step));
  });
  root.addEventListener("mouseleave", () => select(null));
});
