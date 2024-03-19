const musicas = ['/musica/mus_menu0.ogg','/musica/mus_menu1.ogg', '/musica/mus_menu2.ogg', '/musica/mus_menu3.ogg', '/musica/mus_menu4.ogg', '/musica/mus_menu5.ogg','/musica/mus_menu6.ogg']; // Lista de músicas

const player = document.getElementById('lobbySong');
let indiceMusicaAtual = 2;

player.addEventListener('ended', () => {
    // Avança para a próxima música quando a atual termina
    indiceMusicaAtual++;
    if (indiceMusicaAtual >= musicas.length) {
        indiceMusicaAtual = 0; // Volta para a primeira música quando a última termina
    }
    player.src = musicas[indiceMusicaAtual]; // Define a próxima música
    player.play(); // Inicia a próxima música
});
document.getElementById("jogo1").addEventListener("click", function() {
    // Redirecionar para outra tela
    window.location.href = "/tela_carregamento/mainJogo1.html"; // Substitua "outraTela.html" pelo caminho da sua outra página
  });