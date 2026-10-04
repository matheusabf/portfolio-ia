// Tradução PT → EN
// O HTML é a fonte em português. Este dicionário mapeia cada texto (normalizado: espaços
// colapsados, sem quebras de linha) para a versão em inglês. Ao trocar de idioma, todos os
// nós de texto e atributos traduzíveis da página são reescritos.
// Ao editar um texto no index.html, atualize a chave correspondente aqui.

const I18N_EN = /*DICT*/{
  "Matheus Ferreira — Engenheiro de Software": "Matheus Ferreira — Software Engineer",
  "Sou o Matheus, engenheiro de software focado em backend, integrações via API e desenvolvimento assistido por IA.": "I'm Matheus, a software engineer focused on backend, API integrations and AI-assisted development.",

  "Sobre": "About",
  "Projetos": "Projects",
  "Ferramentas": "Skills",
  "Trajetória": "Experience",
  "Contato": "Contact",
  "Idioma": "Language",
  "Alternar tema claro/escuro": "Toggle light/dark theme",
  "Abrir menu": "Open menu",
  "Fechar menu": "Close menu",
  "Seções da página": "Page sections",
  "Início": "Home",

  "Backend · Integrações · IA aplicada": "Backend · Integrations · Applied AI",
  "Oi, eu sou o Matheus.": "Hi, I'm Matheus.",
  "Construo integrações e mantenho de pé sistemas que não podem parar.": "I build integrations and keep critical systems running.",
  "Trabalho com backend, APIs e SQL desde 2021. Sou Líder de Suporte no Grupo Multilaser, onde hoje atuo no apoio técnico e no desenvolvimento de soluções com IA.": "I've been working with backend, APIs and SQL since 2021. I'm a Support Lead at Grupo Multilaser, where I currently focus on technical support and building AI-powered solutions.",
  "Ver projetos": "View projects",
  "Baixar CV": "Download CV",
  "Sua foto · 4:5 · assets/img/perfil.jpg": "Your photo · 4:5 · assets/img/perfil.jpg",
  "Foto de Matheus Ferreira": "Photo of Matheus Ferreira",

  "Sobre mim": "About me",
  "Atualmente": "Currently",
  "Líder de Suporte · Grupo Multilaser": "Support Lead · Grupo Multilaser",
  "Base": "Based in",
  "São Paulo, SP": "São Paulo, Brazil",
  "Formação": "Education",
  "Tecnólogo em ADS · MBA em Eng. de Software na USP (em andamento)": "Associate degree in Systems Analysis & Development · MBA in Software Engineering at USP (in progress)",
  "Idiomas": "Languages",
  "Português nativo · Inglês intermediário (B1)": "Portuguese (native) · English (intermediate, B1)",
  "Comecei a programar profissionalmente em 2021, como assistente de desenvolvimento. De lá para cá passei por projetos em PHP, SQL e integrações REST, até chegar à operação de plataformas de varejo que rodam o tempo todo em produção. No Grupo Multilaser, como Líder de Suporte, liderei o time N1 e N2; hoje atuo no apoio técnico e no desenvolvimento de soluções com IA.": "I started programming professionally in 2021 as a development assistant. Since then I've worked on projects in PHP, SQL and REST integrations, and on running retail platforms that are in production around the clock. At Grupo Multilaser, as Support Lead, I led the L1 and L2 team; today I focus on technical support and building AI-powered solutions.",
  "O que mais me prende no backend é o que acontece": "What draws me most to backend work is what happens",
  "entre": "between",
  "os sistemas: a integração que falha em silêncio, a rotina agendada que precisa aguentar ser executada duas vezes, a query que funciona bem até o volume dobrar. Gosto dos problemas em que a resposta não está no primeiro log.": "systems: the integration that fails silently, the scheduled job that has to survive running twice, the query that works fine until the volume doubles. I enjoy problems where the answer isn't in the first log.",
  "Meu jeito de trabalhar segue quase sempre a mesma ordem: entender o problema com quem sente ele no dia a dia, chegar à causa-raiz e só então automatizar — de preferência para que o mesmo incidente não volte. Com IA, a lógica é a mesma: escrevo a especificação antes do código (Spec-Driven Development) para que o resultado seja previsível, não sorte. Estou aprofundando isso no MBA da USP.": "My process almost always follows the same order: understand the problem with the people who deal with it every day, find the root cause, and only then automate — ideally so the same incident never comes back. With AI the logic is the same: I write the spec before the code (Spec-Driven Development) so the outcome is predictable, not luck. I'm going deeper into this in my MBA at USP.",

  "Três problemas reais que resolvi, contados do jeito que aconteceram. São sistemas internos, por isso o código não é público — mas posso detalhar a arquitetura de qualquer um deles numa conversa.": "Three real problems I solved, told the way they happened. They're internal systems, so the code isn't public — but I'm happy to walk through the architecture of any of them.",
  "Concluído": "Completed",
  "Entregue": "Delivered",
  "Em produção": "In production",
  "Projeto interno": "Internal project",
  "Ver detalhes": "View details",
  "Ocultar detalhes": "Hide details",
  "Tecnologias": "Technologies",
  "O desafio": "The challenge",
  "A minha abordagem técnica": "My technical approach",
  "O resultado": "The outcome",

  "Gestão do Jira: triagem automática, SLA e relatório diário": "Jira management: automated triage, SLA and daily report",
  "Grupo Multilaser · Líder de Suporte": "Grupo Multilaser · Support Lead",
  "Triagem automática": "Automated triage",
  "Um script em Google Apps Script varre o Jira periodicamente em busca de chamados sem responsável ou sem contato definido.": "A Google Apps Script job periodically scans Jira for tickets with no assignee or no contact set.",
  "Varredura": "Scan",
  "Faz a triagem do chamado com o usuário, completando responsável e contato.": "Triages the ticket with the user, filling in the assignee and contact.",
  "Triagem": "Triage",
  "com o usuário": "with the user",
  "Com a triagem concluída, o SLA de triagem é registrado como cumprido.": "Once triage is done, the triage SLA is recorded as met.",
  "SLA de triagem": "Triage SLA",
  "cumprido": "met",
  "O chamado é encaminhado automaticamente para a fila de análise.": "The ticket is automatically routed to the analysis queue.",
  "Fila de análise": "Analysis queue",
  "automático": "automatic",
  "Avisa o time no Google Chat via webhook, com o chamado triado e encaminhado.": "Notifies the team in Google Chat via webhook with the triaged, routed ticket.",
  "Avisa o time": "Notify the team",
  "Relatório diário": "Daily report",
  "Um gatilho do Google Apps Script dispara a rotina sozinho, todo dia às 08h00.": "A Google Apps Script trigger runs the routine on its own every day at 8 AM.",
  "Gatilho": "Trigger",
  "Apps Script · 08h00": "Apps Script · 8 AM",
  "Busca os chamados aguardando retorno ou parados há mais de 3 dias sem movimentação.": "Fetches tickets awaiting a reply or idle for more than 3 days with no activity.",
  "Consulta": "Query",
  "aguardando · parados > 3d": "awaiting · idle > 3d",
  "Calcula há quantos dias cada chamado está parado e monta um resumo com o total.": "Calculates how many days each ticket has been idle and builds a summary with the total.",
  "Relatório": "Report",
  "dias parados + total": "idle days + total",
  "Envia o relatório ao Google Chat do time via webhook, com link direto para cada chamado.": "Sends the report to the team's Google Chat via webhook, with a direct link to each ticket.",
  "Duas automações independentes sobre a mesma fila: uma garante que todo chamado tenha dono, a outra que nenhum fique esquecido.": "Two independent automations on the same queue: one makes sure every ticket has an owner, the other that none gets forgotten.",
  "Na fila do suporte, dois problemas se somavam. Chamados chegavam sem responsável ou sem contato definido e ficavam parados até alguém notar, estourando o SLA de triagem. E os chamados aguardando retorno ou sem movimentação há dias simplesmente sumiam da vista do time.": "Two problems were piling up in the support queue. Tickets arrived with no assignee or contact and sat idle until someone noticed, breaching the triage SLA. And tickets awaiting a reply or idle for days simply dropped out of the team's sight.",
  "Resolvi com duas automações independentes em Google Apps Script, ambas integradas à REST API do Jira e avisando o time por webhook no Google Chat. A primeira varre o Jira periodicamente, encontra chamados sem responsável ou contato e faz a triagem com o usuário; com a triagem concluída, registra o SLA de triagem como cumprido, encaminha o chamado para a fila de análise e notifica o time. A segunda roda todo dia às 8h, levanta os chamados aguardando retorno ou parados há mais de 3 dias e envia um relatório ao Chat, com link direto para cada um.": "I solved it with two independent Google Apps Script automations, both integrated with the Jira REST API and notifying the team through a Google Chat webhook. The first periodically scans Jira, finds tickets with no assignee or contact and triages them with the user; once triage is done, it records the triage SLA as met, routes the ticket to the analysis queue and notifies the team. The second runs every day at 8 AM, gathers tickets awaiting a reply or idle for more than 3 days, and sends a report to Chat with a direct link to each one.",
  "Os chamados sem dono deixaram de existir, o SLA de triagem passou a ser cumprido de forma consistente e o time começa o dia sabendo exatamente o que está parado.": "Ownerless tickets disappeared, the triage SLA is now met consistently, and the team starts the day knowing exactly what's stuck.",

  "Módulo de envio e acompanhamento de assinatura digital": "Digital signature sending and tracking module",
  "MultidadosTI · Desenvolvedor Júnior": "MultidadosTI · Junior Developer",
  "Fluxo do envio": "Sending flow",
  "Cada regra define um status de ativação pré-configurado para disparar o envio.": "Each rule defines a preconfigured activation status that triggers the send.",
  "Regra": "Rule",
  "status de ativação": "activation status",
  "Quando o chamado entra no status configurado, a regra é ativada.": "When the ticket enters the configured status, the rule is activated.",
  "chamado muda de status": "ticket changes status",
  "A integração envia o contrato ao provedor de assinatura digital via REST API.": "The integration sends the contract to the e-signature provider via REST API.",
  "Envio": "Send",
  "REST API do provedor": "provider REST API",
  "O destinatário recebe, lê e assina o documento — cada ação muda o estado no provedor.": "The recipient receives, reads and signs the document — each action changes its state at the provider.",
  "Usuário": "User",
  "recebe · lê · assina": "receives · reads · signs",
  "Um cronjob lê o provedor e grava o status atual de cada envio no módulo.": "A cronjob reads the provider and stores the current status of each send in the module.",
  "atualiza o status": "updates the status",
  "Telas de gestão": "Management screens",
  "Tela para definir em quais status do chamado cada envio deve ser ativado.": "Screen to define which ticket statuses activate each send.",
  "Status de ativação": "Activation status",
  "configuração das regras": "rule configuration",
  "Cadastro de campos adicionais que acompanham o envio do contrato.": "Registration of additional fields sent along with the contract.",
  "Campos adicionais": "Additional fields",
  "cadastro": "registration",
  "Lista todos os envios, mostra o andamento de cada assinatura e permite reprocessar o que falhou.": "Lists every send, shows the progress of each signature and lets you reprocess what failed.",
  "Painel de envios": "Sending dashboard",
  "acompanhamento · reprocessamento": "tracking · reprocessing",
  "Do status do chamado à assinatura: o envio dispara sozinho e o andamento fica sempre atualizado.": "From ticket status to signature: the send fires on its own and progress is always up to date.",
  "Os contratos enviados para assinatura digital eram acompanhados à mão: alguém conferia se cada documento tinha sido entregue, lido e assinado. Quando algo falhava no caminho, ninguém ficava sabendo.": "Contracts sent for digital signature were tracked by hand: someone checked whether each document had been delivered, read and signed. When something failed along the way, nobody found out.",
  "Desenvolvi o módulo de ponta a ponta em PHP. O envio é disparado por regras: cada uma define um status de ativação e, quando o chamado entra nele, a integração envia o contrato ao provedor via REST API. A partir daí, um cronjob lê o provedor e atualiza o status de cada envio conforme o usuário recebe, lê ou assina. Para o time, criei telas para configurar os status de ativação, cadastrar campos adicionais e acompanhar os envios — com a opção de reprocessar o que falhou.": "I built the module end to end in PHP. Sending is triggered by rules: each one defines an activation status, and when the ticket enters it, the integration sends the contract to the provider via REST API. From there, a cronjob reads the provider and updates each send's status as the user receives, reads or signs. For the team, I built screens to configure activation statuses, register additional fields and track sends — with the option to reprocess what failed.",
  "Rastreabilidade de cada contrato, do envio à assinatura, sem ninguém conferir nada à mão. Quando algo falha, o time vê no painel e reprocessa em um clique.": "Full traceability of every contract, from send to signature, with no manual checking. When something fails, the team sees it on the dashboard and reprocesses it in one click.",

  "Alertas em tempo real para pedidos com SLA estourado": "Real-time alerts for orders past their SLA",
  "Grupo Multilaser · Analista → Líder de Suporte": "Grupo Multilaser · Analyst → Support Lead",
  "Fluxo do alerta": "Alert flow",
  "Consulta as listagens dos sistemas internos e separa os pedidos com SLA estourado.": "Queries the internal systems' listings and picks out orders past their SLA.",
  "Listagens internas": "Internal listings",
  "pedidos com SLA estourado": "orders past SLA",
  "Para cada pedido, busca no banco do sistema interno o log de erro correspondente.": "For each order, fetches the matching error log from the internal system's database.",
  "Log de erro": "Error log",
  "banco do sistema interno": "internal system database",
  "Junta link, dados do pedido, erro, tempo decorrido e SLA em uma única mensagem.": "Combines link, order details, error, elapsed time and SLA into a single message.",
  "Monta o alerta": "Build the alert",
  "pedido + erro + SLA": "order + error + SLA",
  "Envia o alerta via webhook para um espaço no Google Chat do time.": "Sends the alert via webhook to a space in the team's Google Chat.",
  "espaço do time": "team space",
  "O que chega no alerta": "What the alert contains",
  "Link direto para o pedido no sistema interno.": "Direct link to the order in the internal system.",
  "acesso direto ao pedido": "direct access to the order",
  "As informações do pedido que importam para agir.": "The order details that matter to take action.",
  "Pedido": "Order",
  "informações pertinentes": "relevant details",
  "O erro registrado no log, para o time já começar pelo diagnóstico.": "The error recorded in the log, so the team starts straight from the diagnosis.",
  "Erro": "Error",
  "mensagem do log": "log message",
  "Há quanto tempo o pedido está parado e qual era o SLA.": "How long the order has been stuck and what the SLA was.",
  "Tempo e SLA": "Time and SLA",
  "quanto já passou": "time elapsed",
  "O time recebe o problema já diagnosticado: qual pedido, qual erro e há quanto tempo.": "The team gets the problem already diagnosed: which order, which error and for how long.",
  "Pedidos com falha de integração estouravam o SLA sem ninguém perceber. Quando alguém notava, ainda precisava caçar o erro no log, um pedido por vez — e nos fechamentos, quando cada hora conta, isso pesava ainda mais.": "Orders with integration failures blew past their SLA without anyone noticing. When someone did notice, they still had to dig through the log for the error, one order at a time — and during month-end closings, when every hour counts, that hurt even more.",
  "Montei uma automação que consulta as listagens dos sistemas internos e separa os pedidos com SLA estourado. Para cada um, ela busca no banco do sistema interno o log de erro correspondente e envia um alerta via webhook para um espaço no Google Chat, com o link do pedido, as informações pertinentes, o erro registrado, o tempo decorrido e o SLA.": "I built an automation that queries the internal systems' listings and picks out orders past their SLA. For each one, it fetches the matching error log from the internal system's database and sends an alert via webhook to a Google Chat space, with the order link, relevant details, the recorded error, the elapsed time and the SLA.",
  "O time passou a receber o problema já diagnosticado, em vez de garimpar log por log. As falhas começaram a ser resolvidas dentro das janelas críticas, não depois delas.": "The team now gets the problem already diagnosed instead of combing through log after log. Failures started being fixed within the critical windows, not after them.",

  "Ferramentas & competências": "Tools & skills",
  "O que uso no dia a dia, agrupado por área.": "What I use day to day, grouped by area.",
  "IA aplicada ao desenvolvimento": "AI in software development",
  "Foco atual": "Current focus",
  "— Spec Kit, especificação antes do código": "— Spec Kit, spec before code",
  "Sistemas multi-agente": "Multi-agent systems",
  "— orquestração de agentes e subagentes": "— orchestrating agents and subagents",
  "— instruções e fluxos reutilizáveis para agentes": "— reusable instructions and workflows for agents",
  "— Model Context Protocol, conectando agentes a ferramentas": "— Model Context Protocol, connecting agents to tools",
  "Agentes de código": "Coding agents",
  "Engenharia de prompt e de contexto": "Prompt and context engineering",
  "Revisão de código e testes assistidos por IA": "AI-assisted code review and testing",
  "Integração com APIs de LLM": "LLM API integration",
  "Linguagens & frameworks": "Languages & frameworks",
  "— módulos e integrações em produção": "— production modules and integrations",
  "— scripts de monitoramento e automação": "— monitoring and automation scripts",
  "— automações com Jira e Google Chat": "— Jira and Google Chat automations",
  "Bancos de dados": "Databases",
  "— consultas complexas e diagnóstico": "— complex queries and diagnostics",
  "Modelagem de dados": "Data modeling",
  "Arquitetura & integrações": "Architecture & integrations",
  "Cronjobs e rotinas agendadas": "Cronjobs and scheduled jobs",
  "Reprocessamento de falhas": "Failure reprocessing",
  "Observabilidade & infra": "Observability & infra",
  "Análise de logs e causa-raiz": "Log analysis and root cause",
  "Alertas via webhook": "Webhook alerts",
  "Como trabalho:": "How I work:",
  "Scrum e Kanban, especificação antes do código — com ou sem IA — e documentação técnica como parte da entrega, não como etapa opcional.": "Scrum and Kanban, spec before code — with or without AI — and technical documentation as part of the delivery, not an optional step.",

  "Onde trabalhei e o que estudei.": "Where I've worked and what I've studied.",
  "Experiência": "Work",
  "03/2025 — atual": "03/2025 — present",
  "11/2025 — atual": "11/2025 — present",
  "Líder de Suporte": "Support Lead",
  "Analista de Suporte a Sistemas Jr.": "Junior Systems Support Analyst",
  "Desenvolvedor Júnior": "Junior Developer",
  "Estagiário de Desenvolvimento": "Development Intern",
  "Estagiário de TI": "IT Intern",
  "Assistente de Desenvolvimento de Software": "Software Development Assistant",
  "MBA em Engenharia de Software": "MBA in Software Engineering",
  "USP · em andamento": "USP · in progress",
  "Tecnólogo em Análise e Desenvolvimento de Sistemas": "Associate Degree in Systems Analysis and Development",
  "Técnico em Desenvolvimento de Sistemas": "Technical Diploma in Systems Development",
  "Cursos": "Courses",

  "Vamos conversar?": "Let's talk",
  "Quer trocar uma ideia sobre backend, integrações ou IA aplicada? Respondo por e-mail em até um dia útil.": "Want to chat about backend, integrations or applied AI? I reply by email within one business day."
}/*END*/;

window.i18n = (() => {
  const EN = I18N_EN;
  const PT_OF = {}; // inglês → português, para voltar ao original
  Object.keys(EN).forEach((pt) => { PT_OF[EN[pt]] = pt; });

  const STORAGE_KEY = "lang";
  const ATTRS = ["data-desc", "data-label", "aria-label", "alt", "data-hint"];
  const norm = (s) => s.replace(/\s+/g, " ").trim();

  let lang = "pt";

  // Texto em PT (chave do dicionário) para qualquer string, esteja ela em PT ou EN
  const toPt = (s) => {
    const key = norm(s);
    return key in EN ? key : PT_OF[key] ?? key;
  };

  // Traduz uma string do português para o idioma atual
  const t = (pt) => {
    const key = toPt(pt);
    return lang === "en" ? EN[key] ?? key : key;
  };

  // Reescreve uma string preservando os espaços das pontas (importante entre <em>, <strong>…)
  const swap = (s) => {
    const key = norm(s);
    if (!key || !(key in EN || key in PT_OF)) return s;
    const lead = s.match(/^\s*/)[0];
    const trail = s.match(/\s*$/)[0];
    return lead + t(key) + trail;
  };

  const apply = () => {
    const root = document.documentElement;
    root.lang = lang === "en" ? "en" : "pt-BR";
    document.title = t(document.title);
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.content = t(meta.content);

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: (n) =>
        n.parentElement.closest("script, style") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT,
    });
    for (let n = walker.nextNode(); n; n = walker.nextNode()) {
      const next = swap(n.nodeValue);
      if (next !== n.nodeValue) n.nodeValue = next;
    }

    ATTRS.forEach((attr) => {
      document.querySelectorAll(`[${attr}]`).forEach((el) => {
        const value = el.getAttribute(attr);
        const next = swap(value);
        if (next !== value) el.setAttribute(attr, next);
      });
    });

    document.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
    });
  };

  const setLang = (next) => {
    if (next !== "pt" && next !== "en") return;
    lang = next;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    apply();
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
  };

  // Idioma inicial: escolha salva → idioma do navegador → português
  let initial;
  try { initial = localStorage.getItem(STORAGE_KEY); } catch (e) {}
  if (initial !== "pt" && initial !== "en") {
    initial = (navigator.language || "pt").toLowerCase().startsWith("pt") ? "pt" : "en";
  }
  if (initial === "en") setLang("en");
  else apply();

  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  return {
    t,
    toPt,
    setLang,
    get lang() { return lang; },
  };
})();
