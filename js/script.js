document.addEventListener('DOMContentLoaded', function() {
    var bgMusic = document.getElementById('bgMusic');
    var themeButtons = document.querySelectorAll('.themeButton');
    var muteButton = document.getElementById('muteButton');

    var selectedTheme = localStorage.getItem('selectedTheme');
    var selectedMusic = localStorage.getItem('selectedMusic');
    
    // Função para mudar o tema, o áudio de fundo e as imagens
    function changeThemeAndAudio(themeNumber, musicSrc, currentTime) {
      var theme = 'musica/mus_theme_' + themeNumber + '.ogg';
  
      // Pare a música atual antes de mudar para outra
      bgMusic.pause();
      var isPlaying = !bgMusic.paused;
      var currentMusicTime = isPlaying ? bgMusic.currentTime : 0;
      // Altere a música de fundo para o tema selecionado
      bgMusic.src = theme;
     bgMusic.currentTime = currentTime || currentMusicTime;
      bgMusic.play(); // Inicie a nova música automaticamente, se necessário
      

      localStorage.setItem('selectedTheme', themeNumber);
      localStorage.setItem('selectedMusic', theme);
      localStorage.setItem('selectedMusicTime', bgMusic.currentTime);
      // Altere as imagens de acordo com o tema selecionado
      document.body.className = 'theme_' + themeNumber;
    }
  
    // Adicione um evento de clique a cada botão de tema
    themeButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        var selectedTheme = button.getAttribute('data-theme');
        var musicSrc = 'musica/mus_theme_' + selectedTheme + '.ogg';
        changeThemeAndAudio(selectedTheme, musicSrc);
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
  ///// dropdown /////
  function toggleDropdown() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
  }

  ////////// seaforo /////////////////
  function atualizarDados() {
    fetch("https://niloweb.com.br/transit-room/api/reg_endpoint.php")
        .then(resposta => resposta.json())
        .then(dados1 => {
            if (dados1[0].res == "B") {
                document.querySelector('section').className = 'soul2';
                document.querySelector('.asgore').className = 'asgoreB';
                document.getElementById('statusSound').play();
                
            } else if (dados1[0].res == "L") {
                document.querySelector('section').className = 'soul1';
                document.querySelector('.asgore').className = 'asgoreL';
                document.getElementById('statusSound').play();
                
            } else {
                document.querySelector('section').className = 'soul3';
                document.querySelector('.asgore').className = 'asgoreA';
                document.getElementById('statusSound').play();
            }
        });
}

// Defina um tempo de espera (em milissegundos) entre as chamadas para atualizarDados
const tempoDeEspera = 10000; // Por exemplo, 60000 ms (1 minuto)

// Defina uma função para chamar atualizarDados após o tempo de espera
function recarregarPeriodicamente() {
    setTimeout(function() {
        atualizarDados();
        // Chama esta função novamente após o tempo de espera
        recarregarPeriodicamente();
    }, tempoDeEspera);
}

// Inicie o processo de atualização periódica
recarregarPeriodicamente();