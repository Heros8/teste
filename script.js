const frases = [
  "🎬 Cinema é pura emoção!",
  "🍿 Nada melhor que um bom filme.",
  "⭐ Filmes marcam momentos.",
  "🎥 Luz, câmera, ação!"
];

function mostrarMagia() {
  const mensagem = document.getElementById("mensagem-magica");

  const aleatoria = frases[Math.floor(Math.random() * frases.length)];

  mensagem.textContent = aleatoria;
}

function enviarFormulario(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const resposta = document.getElementById("resposta-formulario");

  resposta.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada.`;
}