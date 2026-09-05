/*
  ╔════════════════════════ PERSONALIZA AQUÍ ════════════════════════╗
  Cambia solo los textos entre comillas. Guarda el archivo y recarga.
  La fecha usa el formato: AAAA-MM-DDTHH:MM:SS (por ejemplo 2024-02-14T19:00:00)
  ╚═══════════════════════════════════════════════════════════════════╝
*/
const CONFIG = {
  girlfriendName: "GUERITA",
  userName: "Yo AWOOO",
  relationshipStart: "2026-03-14T00:00:00", // ← FECHA DE INICIO
  letter: `Mi chaparrita bella AWOOOO:

Quise hacerte este pequeño lugar para recordarte lo especial que eres para mí. Gracias por cada sonrisa, cada conversación y cada momento que hace más bonita mi vida.

No necesito una fecha especial para decirte que te amo, pero sí quería que tuvieras algo que te hiciera sentir lo mucho que significas para mí.`,
  reasons: [
    { icon: "☀️", text: "Porque haces que mis dias sean muy felices" },
    { icon: "☺️", text: "Porque te convertiste en mi lugar más seguro" },
    { icon: "🌷", text: "Porque eres autentica" },
    { icon: "🤍", text: "Porque contigo puedo ser yo sin limites" },
    { icon: "✨", text: "Porque haces especial lo cotidiano" },
    { icon: "♾️", text: "PORQUE ERES INSANA FRIFAYERA MUAMUA" },
  ],  moments: [
    { date: "El comienzo", title: "El día que todo cambió", text: "[Escribe cómo se conocieron o qué pensaste la primera vez que hablaste con ella.]" },
    { date: "Un recuerdo", title: "Una risa que no olvido", text: "[Pon aquí una anécdota que les dé risa a los dos.]" },
    { date: "Hoy", title: "Mi lugar favorito", text: "Contigo, incluso los días normales se vuelven mis favoritos." },
  ],
  notes: [
    { title: "Cuando estés triste", icon: "🌧️", text: "[Recuérdale aquí que no está sola y que puede contar contigo.]" },
    { title: "Cuando sonrías", icon: "☀️", text: "Tu sonrisa tiene el poder de arreglar más de lo que imaginas." },
    { title: "Cuando me extrañes", icon: "💌", text: "[Escribe un mensaje corto que le haga sentirte cerca.]" },
    { title: "Cuando dudes de ti", icon: "🌟", text: "Eres capaz, valiente y muchísimo más increíble de lo que a veces crees." },
  ],
  promises: [
    "[Prometo escucharte siempre que quieras hablar.]",
    "[Prometo cuidar de tu corazón y celebrar tus sueños.]",
    "[Prometo seguir encontrando maneras de hacerte sonreír.]",
  ],

  finalMessage: "Desde que llegaste a mi vida entendí que el amor verdaderamente bonito no se busca ni se fuerza, sino que se construye todos los días con alguien que te hace sentir en casa sin importar en dónde estés. Contigo aprendí que querer a alguien de verdad va muchísimo más allá de las palabras; es encontrar a una persona en la que puedo confiar a ciegas, mi refugio seguro en los días difíciles y mi compañera favorita para celebrar cada pequeña victoria. No me canso de admirar la luz que transmites, tu forma de ver la vida y la manera tan única en la que logras cambiarme el ánimo con solo una sonrisa o una mirada. Gracias por enseñarme lo hermoso que es querer sin reservas, por aguantarme en mis peores momentos y por demostrarme día a día lo que significa sostener a alguien con ternura y respeto. Quiero que nunca dudes de todo lo que vales ni de lo increíble que eres, porque para mí lo eres todo; promete que jamás olvidarás que, pase lo que pase y venga lo que venga, siempre voy a estar a tu lado para cuidarte, apoyarte en cada uno de tus sueños y recordarte todos los días lo profundamente enamorado que estoy de ti.",
};

document.querySelectorAll("[data-girlfriend-name]").forEach((el) => el.textContent = CONFIG.girlfriendName);
document.querySelectorAll("[data-user-name]").forEach((el) => el.textContent = CONFIG.userName);
document.querySelector("#letter-text").textContent = CONFIG.letter;

const reasonsList = document.querySelector("#reasons-list");
CONFIG.reasons.forEach(({ icon, text }) => {
  const reason = document.createElement("article");
  reason.className = "reason";
  reason.innerHTML = `<span class="icon">${icon}</span><p>${text}</p>`;
  reasonsList.appendChild(reason);
});

const openButton = document.querySelector("#open-surprise");
const story = document.querySelector("#story");
openButton.addEventListener("click", () => {
  document.querySelector("#welcome").classList.add("hidden");
  story.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function updateCounter() {
  const difference = Math.max(0, Date.now() - new Date(CONFIG.relationshipStart).getTime());
  const minutes = Math.floor(difference / 60000);
  document.querySelector("#days").textContent = Math.floor(minutes / 1440);
  document.querySelector("#hours").textContent = Math.floor((minutes % 1440) / 60);
  document.querySelector("#minutes").textContent = minutes % 60;
}
updateCounter();
setInterval(updateCounter, 30000);

const finalButton = document.querySelector("#final-button");
const finalMessage = document.querySelector("#final-message");
document.querySelector("#final-text").textContent = CONFIG.finalMessage;
finalButton.addEventListener("click", () => {
  finalButton.hidden = true;
  finalMessage.hidden = false;
  makeHearts(22);
});

const music = document.querySelector("#background-music");
const musicButton = document.querySelector("#music-toggle");
musicButton.addEventListener("click", async () => {
  if (music.paused) {
    try { await music.play(); musicButton.textContent = "❚❚ Pausar"; musicButton.setAttribute("aria-pressed", "true"); }
    catch { musicButton.textContent = "No se pudo reproducir"; }
  } else { music.pause(); musicButton.textContent = "▶ Escuchar"; musicButton.setAttribute("aria-pressed", "false"); }
});

const hearts = document.querySelector("#hearts");
function makeHearts(amount = 1) {
  for (let i = 0; i < amount; i += 1) {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.textContent = Math.random() > .2 ? "♥" : "♡";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${.8 + Math.random() * 1.4}rem`;
    heart.style.animationDuration = `${7 + Math.random() * 7}s`;
    heart.style.animationDelay = `${Math.random() * 2}s`;
    hearts.appendChild(heart);
    setTimeout(() => heart.remove(), 16000);
  }
}
makeHearts(12);
setInterval(() => makeHearts(), 1600);

const add = (id, items, render) => items.forEach((item, index) => document.querySelector(id).appendChild(render(item, index)));
add("#moments-list", CONFIG.moments, ({ date, title, text }) => { const el = document.createElement("article"); el.className = "moment"; el.innerHTML = `<p class="moment-date">${date}</p><h3>${title}</h3><p>${text}</p>`; return el; });
add("#notes-list", CONFIG.notes, ({ title, icon, text }) => { const el = document.createElement("details"); el.className = "note"; el.innerHTML = `<summary><span>${icon}</span>${title}<b>+</b></summary><p>${text}</p>`; return el; });
add("#promises-list", CONFIG.promises, (text, index) => { const el = document.createElement("article"); el.className = "promise"; el.innerHTML = `<span>0${index + 1}</span><p>${text}</p><i>♥</i>`; return el; });
