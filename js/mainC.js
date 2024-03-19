// Função para simular o carregamento gradual da barra de progresso
function carregarBarra() {
  var progresso = 0;
  var barra = document.getElementById("progressBar");
  var texto = document.getElementById("loaderText");

  var interval = setInterval(function() {
      if (progresso >= 100) {
          clearInterval(interval);
          // Atraso de 2 segundos antes de redirecionar para a próxima página
          setTimeout(function() {
            window.location.href = "/jogos/lobby.html";
        }, 2000); // 2000 milissegundos = 2 segundos
      } else {
          progresso += 4;
          barra.style.width = progresso + "%";
          texto.textContent = "Carregando... " + progresso + "%";
          // Muda a cor da barra de progresso de acordo com a cor atual do coração
          mudarCor(progresso);
      }
  }, 500); // Intervalo de tempo em milissegundos (0.5 segundos)
}

// Função para mudar a cor da barra de progresso com base no progresso
function mudarCor(progresso) {
  var cores = ["#ff3b30", "#ff9500", "#ffcc00", "#05921c", "#01c4ff", "#1803d3", "#5906b9"];
  var etapas = [0, 14.2857, 28.5714, 42.8571, 57.1428, 71.4285, 85.7142, 100];

  for (var i = 0; i < etapas.length - 1; i++) {
      if (progresso >= etapas[i] && progresso < etapas[i + 1]) {
          var cor = cores[i];
          var proximaCor = cores[i + 1];
          var percentual = (progresso - etapas[i]) / (etapas[i + 1] - etapas[i]);
          var corAtual = interpolarCor(cor, proximaCor, percentual);
          var barra = document.getElementById("progressBar");
          barra.style.backgroundColor = corAtual;
          break;
      }
  }
}
const musicas = ['/musica/mus_f_saved.ogg']; // Lista de músicas

const player = document.getElementById('player');
let indiceMusicaAtual = 0;

player.addEventListener('ended', () => {
    // Avança para a próxima música quando a atual termina
    indiceMusicaAtual++;
    if (indiceMusicaAtual >= musicas.length) {
        indiceMusicaAtual = 0; // Volta para a primeira música quando a última termina
    }
    player.src = musicas[indiceMusicaAtual]; // Define a próxima música
    player.play(); // Inicia a próxima música
});


// Função para interpolar entre duas cores com base em um percentual
function interpolarCor(cor1, cor2, percentual) {
  var r1 = parseInt(cor1.substr(1, 2), 16);
  var g1 = parseInt(cor1.substr(3, 2), 16);
  var b1 = parseInt(cor1.substr(5, 2), 16);
  var r2 = parseInt(cor2.substr(1, 2), 16);
  var g2 = parseInt(cor2.substr(3, 2), 16);
  var b2 = parseInt(cor2.substr(5, 2), 16);
  var r = Math.round(r1 + (r2 - r1) * percentual);
  var g = Math.round(g1 + (g2 - g1) * percentual);
  var b = Math.round(b1 + (b2 - b1) * percentual);
  return "#" + (r < 16 ? "0" : "") + r.toString(16) +
         (g < 16 ? "0" : "") + g.toString(16) +
         (b < 16 ? "0" : "") + b.toString(16);
}

// Chama a função ao carregar a página
carregarBarra();
