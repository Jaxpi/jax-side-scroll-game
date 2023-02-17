export default class InputHandler {
  constructor() {
    this.lastKey = "";
    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowDown":
          this.lastKey = "PRESS down";
        case "ArrowUp":
          this.lastKey = "PRESS up";
        case "ArrowLeft":
          this.lastKey = "PRESS left";
        case "ArrowRight":
          this.lastKey = "PRESS right";
      }
    });
    window.addEventListener("keyup", (e) => {
      switch (e.key) {
        case "ArrowDown":
          this.lastKey = "RELEASE down";
        case "ArrowUp":
          this.lastKey = "RELEASE up";
        case "ArrowLeft":
          this.lastKey = "RELEASE left";
        case "ArrowRight":
          this.lastKey = "RELEASE right";
      }
    });

    // this.keys = [];
    // this.touchY = "";

    // this.touchThreshold = 30;
    // window.addEventListener("keydown", (e) => {
    //   if (
    //     (e.key === "ArrowDown" ||
    //       e.key === "ArrowUp" ||
    //       e.key === "ArrowLeft" ||
    //       e.key === "ArrowRight") &&
    //     this.keys.indexOf(e.key) === -1
    //   ) {
    //     this.keys.push(e.key);
    //   } else if (e.key === "Enter" && gameOver) restartGame();
    // });
    // window.addEventListener("keyup", (e) => {
    //   if (
    //     e.key === "ArrowDown" ||
    //     e.key === "ArrowUp" ||
    //     e.key === "ArrowLeft" ||
    //     e.key === "ArrowRight"
    //   ) {
    //     this.keys.splice(this.keys.indexOf(e.key), 1);
    //   }
    // });
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
