class DrawableElement {
  constructor(ctx, width, height, x=0, y=0, color='red') {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  collidesWith(drawableElement) {
    return !(
        drawableElement.x > (this.x + this.width) || 
        (drawableElement.x + drawableElement.width) <  this.x || 
        drawableElement.y > (this.y + this.height) ||
        (drawableElement.y + drawableElement.height) <  this.y
      );
  }
}





class TimeScore extends DrawableElement {
  constructor(ctx, x=0, y=0) {
    super(ctx, null, null, x, y)
    this.score = 0;
    this.align = "left";
    this.color = '#2484E4';
    this.font = "20";
  }

  draw () {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.font = this.font + "px sans-serif";
    this.ctx.textAlign = this.align;
    this.ctx.fillText("Score: " + this.score, this.x, this.y);
    this.ctx.closePath();
  }
}







class ImageDrawableElement extends DrawableElement {
  constructor(ctx, width, height, imgSrc, x=0, y=0) {
    super(ctx, width, height, x, y)
    this.img = new Image();
    this.img.src = imgSrc;
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

}

class Scooter extends ImageDrawableElement {
  constructor(canvas, speedX) {
    super(canvas.getContext('2d'), 60, 60, "../img/scooter.png", canvas.width / 2 - 30, canvas.height-60)
    this.speedX = speedX;
    this.maxWidth = canvas.width;
    this.maxHeight = canvas.height;
  }

  goLeft() {
    if(this.x > 0) {
      this.x -= this.speedX;
    }
  }

  goRight() {
    if(this.x < this.maxWidth) {
      this.x += this.speedX;
    }
  }

}

class Peaton extends ImageDrawableElement {
  constructor(canvas, speedY) {
    super(canvas.getContext('2d'), 35, 35, "../img/cono.png", Math.floor(Math.random()*canvas.width), 0)
    this.speedY = speedY;
    this.maxWidth = canvas.width;
    this.maxHeight = canvas.height;
  }

  move() {
    this.y += this.speedY;
  }

  noColision() {
    return this.y >= this.maxHeight;
  }

}

