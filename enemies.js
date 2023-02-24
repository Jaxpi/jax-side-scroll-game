class Enemy {
  constructor() {
    this.markedForDeletion = false;
    this.frameX = 0;
    this.frameY = 0;
    this.fps = 20;
    this.frameInterval = 1000 / this.fps;
    this.frameTimer = 0;
  }
  update(deltaTime) {
    this.x -= this.speedX + this.game.speed;
    this.y += this.speedY;
    if (this.frameTimer > this.frameInterval) {
      if (this.frameX < this.maxFrame) this.frameX++;
      else this.frameX = 0;
      this.frameTimer = 0;
    } else {
      this.frameTimer += deltaTime;
    }
    if (this.x + this.width < 0) this.markedForDeletion = true;
  }
  draw(context) {
    context.drawImage(
      this.image,
      this.frameX * this.width,
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

export class FlyingEnemy extends Enemy {
  constructor(game) {
    super();
    this.game = game;
    this.width = 60;
    this.height = 44;
    this.x = this.game.width + Math.random() * this.game.width * 0.5;
    this.y = Math.random() * this.game.height * 0.5;
    this.speedX = Math.random() + 1;
    this.speedY = 0;
    this.maxFrame = 5;
    this.image = document.getElementById("enemy_fly");
    // this.vx = Math.random() * 0.1 + 0.1;
  }
  update(deltaTime) {
    super.update(deltaTime);
    // this.y += Math.sin(this.angle) * this.curve;
    // this.angle += 0.04;
  }
}

export class GroundEnemy extends Enemy {
  //   constructor(game) {
  //     super(game);
  //     this.spriteWidth = 261;
  //     this.spriteHeight = 209;
  //     this.width = this.spriteWidth / 2;
  //     this.height = this.spriteHeight / 2;
  //     this.x = this.game.width;
  //     this.y = Math.random() * this.game.height * 0.6;
  //     this.image = ghost;
  //     this.vx = Math.random() * 0.2 + 0.1;
  //     this.angle = 0;
  //     this.curve = Math.random() * 3;
  //   }
  //   update(deltaTime) {
  //     super.update(deltaTime);
  //     this.y += Math.sin(this.angle) * this.curve;
  //     this.angle += 0.04;
  //   }
  //   draw(ctx) {
  //     ctx.save();
  //     ctx.globalAlpha = 0.7;
  //     super.draw(ctx);
  //     ctx.restore();
  //   }
}

export class ClimbingEnemy extends Enemy {
  //   constructor(game) {
  //     super(game);
  //     this.spriteWidth = 310;
  //     this.spriteHeight = 175;
  //     this.width = this.spriteWidth / 3;
  //     this.height = this.spriteHeight / 3;
  //     this.x = Math.random() * this.game.width;
  //     this.y = 0 - this.height;
  //     this.image = spider;
  //     this.vx = 0;
  //     this.vy = Math.random() * 0.1 + 0.1;
  //     this.maxLength = Math.random() * this.game.height;
  //   }
  //   update(deltaTime) {
  //     if (this.y < 0 - this.height * 2) this.markedForDeletion = true;
  //     super.update(deltaTime);
  //     this.y += this.vy * deltaTime;
  //     if (this.y > this.maxLength) this.vy *= -1;
  //   }
  //   draw(ctx) {
  //     ctx.beginPath();
  //     ctx.moveTo(this.x + this.width / 2, 0);
  //     ctx.lineTo(this.x + this.width / 2, this.y + 10);
  //     ctx.stroke();
  //     super.draw(ctx);
  //   }
}
