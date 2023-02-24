export class Player {
  constructor(game) {
    this.game = game;
    this.width = 100;
    this.height = 91.3;
    this.x = 0;
    this.y = this.game.height - this.height;
    this.image = document.getElementById("player");
  }
  update(input) {
    if (input.includes("ArrowLeft")) this.x--;
    else if (input.includes("ArrowRight")) this.x++;
    // else if (input.includes("ArrowUp"));
    // else if (input.includes("ArrowDown"));
  }
  draw(context) {
    context.drawImage(
      this.image,
      0,
      0,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
