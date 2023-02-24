export const states = {
  STANDING: 0,
  SITTING: 1,
  RUNNING: 2,
  JUMPING: 3,
  FALLING: 4,

  // DAZED: 4,

  // ROLLING: 6,
  // A1: 7,
  // KO: 8,
  // A2: 9,
};

class State {
  constructor(state) {
    this.state = state;
  }
}

export class Standing extends State {
  constructor(player) {
    super("STANDING");
    this.player = player;
  }
  enter() {
    this.frameX = 0;
    this.player.frameY = 0;
    this.player.speed = 0;
    this.player.maxFrame = 6;
  }
  handleInput(input) {
    if (input.includes("ArrowLeft") || input.includes("ArrowRight")) {
      this.player.setState(states.RUNNING);
    } else if (input.includes("ArrowDown")) {
      this.player.setState(states.SITTING);
    }
  }
}

export class Sitting extends State {
  constructor(player) {
    super("SITTING");
    this.player = player;
  }
    enter() {
        this.frameX = 0;
    this.player.frameY = 5;
    this.player.speed = 0;
    this.player.maxFrame = 4;
  }
  handleInput(input) {
    if (input.includes("ArrowLeft") || input.includes("ArrowRight")) {
      this.player.setState(states.RUNNING);
    }
  }
}

export class Running extends State {
  constructor(player) {
    super("RUNNING");
    this.player = player;
  }
    enter() {
        this.frameX = 0;
    this.player.frameY = 3;
    this.player.speed = -this.player.maxSpeed;
    this.player.maxFrame = 8;
  }
  handleInput(input) {
    if (input.includes("ArrowDown")) {
      this.player.setState(states.SITTING);
    } else if (input.includes("ArrowUp")) {
      this.player.setState(states.JUMPING);
    }
  }
}

export class Jumping extends State {
  constructor(player) {
    super("JUMPING");
    this.player = player;
  }
    enter() {
        this.frameX = 0;
    this.player.frameY = 1;
    if (this.player.onGround()) this.player.vy -= 28;
    this.player.speed = -this.player.maxSpeed * 0.5;
    this.player.maxFrame = 6;
  }
  handleInput(input) {
    if (this.player.vy > this.player.weight) {
      this.player.setState(states.FALLING);
    }
  }
}

export class Falling extends State {
  constructor(player) {
    super("FALLING");
    this.player = player;
  }
    enter() {
        this.frameX = 0;
    this.player.frameY = 2;
    this.player.maxFrame = 6;
  }
  handleInput(input) {
    if (this.player.onGround()) this.player.setState(states.RUNNING);
  }
}

//   export class FallingRight extends State {
//     constructor(player) {
//       super("FALLING RIGHT");
//       this.player = player;
//     }
//     enter() {
//       this.player.frameY = 4;
//       this.player.maxFrame = 6;
//     }
//     handleInput(input) {
//       if (input === "PRESS left") this.player.setState(states.FALLING_LEFT);
//       else if (this.player.onGround())
//         this.player.setState(states.STANDING_RIGHT);
//     }
//   }
