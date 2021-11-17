class Game {
  constructor(canvas, ctx, callback) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.scooter = new Scooter(canvas, 100);
    this.peaton = new Peaton(this.canvas, 15);
    this.scoreText = new TimeScore(ctx, 25, 25);
    this.sound = new Audio("./sounds/Executioner.mp3");
    this.gameOverFunction = callback;
  }

  start() {
    this.sound.play();
    this._assignControlsToKeys();
    window.requestAnimationFrame(this._update.bind(this));
  }

  _assignControlsToKeys() {
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowLeft':
          this.scooter.goLeft();
          break;
        case 'ArrowRight':
          this.scooter.goRight();
          break;
        default:
          break;
      }
    });
  }

  _update() {
    this._clean();
    this.scooter.draw();
    this.peaton.draw();
    if (this.scooter.collidesWith(this.peaton)) {
      this.sound.pause();
      this.gameOverFunction();
      return;
    } else if(this.peaton.noColision()){
      this._generatePeaton();
    }
    this.peaton.move();
    this.scoreText.score++;
    this.scoreText.draw();
    window.requestAnimationFrame(this._update.bind(this));
  }

  _clean() {
    this.ctx.clearRect(0, 0, 500, 500);
  }

  _generatePeaton() {
    this.peaton = new Peaton(this.canvas, 15);
  }

}
