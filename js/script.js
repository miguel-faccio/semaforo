document.addEventListener('DOMContentLoaded', function() {
    var bgMusic = document.getElementById('bgMusic');
    var themeButtons = document.querySelectorAll('.themeButton');
    var muteButton = document.getElementById('muteButton');
  
    // Função para mudar o tema, o áudio de fundo e as imagens
    function changeThemeAndAudio(themeNumber) {
      var theme = 'musica/mus_theme_' + themeNumber + '.ogg';
  
      // Pare a música atual antes de mudar para outra
      bgMusic.pause();
      bgMusic.currentTime = 0;
  
      // Altere a música de fundo para o tema selecionado
      bgMusic.src = theme;
      bgMusic.play(); // Inicie a nova música automaticamente, se necessário
  
      // Altere as imagens de acordo com o tema selecionado
      document.body.className = 'theme_' + themeNumber;
    }
  
    // Adicione um evento de clique a cada botão de tema
    themeButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        var selectedTheme = button.getAttribute('data-theme');
        changeThemeAndAudio(selectedTheme);
      });
    });
  
    // Adicione um evento de clique ao botão de mudo
    muteButton.addEventListener('click', function() {
      if (bgMusic.paused) {
        bgMusic.play();
        muteButton.textContent = 'Mudo';
      } else {
        bgMusic.pause();
        muteButton.textContent = 'Som';
      }
    });
  });
  