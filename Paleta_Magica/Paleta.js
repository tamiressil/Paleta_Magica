// A função abaixo gera uma cor aleatória em hexadecimal
    function corAleatoria() {
      let letras = "0123456789ABCDEF";
      let cor = "#";
      for (let i = 0; i < 6; i++) {
        cor += letras[Math.floor(Math.random() * 16)];
      }
      return cor;
    }

    // Função que muda as cores dos blocos
    function gerarCores() {
      let blocos = document.querySelectorAll(".color-box");
      blocos.forEach(bloco => {
        let novaCor = corAleatoria();
        bloco.style.backgroundColor = novaCor;
        bloco.textContent = novaCor; // mostra o código da cor dentro do bloco
      });
    }

    // usar a barra de espaço
    document.addEventListener("keydown", function(event) {
      if (event.code === "Space") {
        gerarCores();
      }
    });
