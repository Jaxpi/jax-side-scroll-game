class Layer {
  constructor(game, width, height, speedModifier, image) {
    this.game = game;
    this.width = width;
    this.height = height;
    this.speedModifier = speedModifier;
    this.image = image;
    this.x = 0;
    this.y = 0;
    // this.speed = gameSpeed * this.speedModifier;
  }
  update() {
    if (this.x < -this.width) this.x = 0;
    else this.x -= this.game.speed * this.speedModifier;
    // this.x = (gameFrame * this.speed) % this.width;
  }
  draw(context) {
      context.drawImage(this.image, this.x, this.y, this.width, this.height);
      context.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
  }
}

export class Background {
  constructor(game) {
    this.game = game;
    this.width = 1667;
    this.height = 500;
    this.layer5Image = document.getElementById("layer5");
    this.layer1 = new Layer(
      this.game,
      this.width,
      this.height,
      1,
      //   this.speedModifier,
      this.layer5Image
    );
    this.backgroundLayers = [this.layer1];
  }
  update() {
    this.backgroundLayers.forEach(layer => {
      layer.update();
    });
    // if (this.x < -this.width) this.x = 0;
    // else this.x -= this.game.speed * this.speedModifier;
  }
  draw(context) {
    this.backgroundLayers.forEach(layer => {
      layer.draw(context);
    });
  }
}
