export class InputHandler {
  constructor(game) {
    this.game = game;
    this.keys = [];
    // this.touchY = "";
    // this.touchThreshold = 30;
    window.addEventListener("keydown", (e) => {
      if (
        (e.key === "ArrowDown" ||
          e.key === "ArrowUp" ||
          e.key === "ArrowLeft" ||
          e.key === "ArrowRight" ||
          e.key === "Control") &&
        this.keys.indexOf(e.key) === -1
      ) {
        this.keys.push(e.key);
      } else if (e.key === "d") this.game.debug = !this.game.debug;
      //   } else if (e.key === "Enter" && gameOver) restartGame();
    });
    window.addEventListener("keyup", (e) => {
      if (
        e.key === "ArrowDown" ||
        e.key === "ArrowUp" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowRight" ||
        e.key === "Control"
      ) {
        this.keys.splice(this.keys.indexOf(e.key), 1);
      }
    });
    // window.addEventListener("touchstart", (e) => {
    //   this.touchY = e.changedTouches[0].pageY;
    // });
    // window.addEventListener("touchmove", (e) => {
    //   const swipeDistance = e.changedTouches[0].pageY - this.touchY;
    //   if (
    //     swipeDistance < -this.touchThreshold &&
    //     this.keys.indexOf("swipe up") === -1
    //   )
    //     this.keys.push("swipe up");
    //   else if (
    //     swipeDistance > this.touchThreshold &&
    //     this.keys.indexOf("swipe down") === -1
    //   ) {
    //     this.keys.push("swipe down");
    //     if (gameOver) restartGame();
    //   }
    // });
    // window.addEventListener("touchend", (e) => {
    //   this.keys.splice(this.keys.indexOf("swipe up"), 1);
    //   this.keys.splice(this.keys.indexOf("swipe down"), 1);
    // });
  }
}
