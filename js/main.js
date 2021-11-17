//Esperamos a que la página acabe de importar javascript, CSS, IMÁGENES... 
document.addEventListener('DOMContentLoaded', () => {

  function printGameOver() {
    alert("LOOOOOOSEEEEERRR!");
  }

  function generateSplashScreen() {
    const intro = document.getElementById('intro');
    // Inyectamos un boton de play con html
    intro.innerHTML = `
    <div>
      <button id="play" class="mb-2">Play</button>
    </div>
    `;
    // Recuperamos el boton play
    const playButton = document.querySelector('#play');
    // Cuando el boton play es pulsado
    playButton.addEventListener('click', () => {
      // Ocultamos portada juego (logo maquina motors)
      intro.classList.add('hide');
      // Mostramos el juego (canvas)
      const game = document.getElementById('game');
      game.classList.remove('hide');
      game.classList.add('show');

      // Recuperamos el boton start
      const startButton = game.querySelector('#start');
      // Cuando el boton start es pulsado
      startButton.addEventListener('click', () => {
        let canvas = game.querySelector('#game');
        const ctx = canvas.getContext('2d');
        // Creamos juego
        const scooterGame = new Game(canvas, ctx, printGameOver);
        // Empezamos juego
        scooterGame.start();
      });
    });
  }

  generateSplashScreen();
});
