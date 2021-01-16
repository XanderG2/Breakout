// paddle ball and the blocks (entities)

class Entity {
  width = 30;
  height = 30;
  x = 30;
  y = 30;
  sx = 0;
  sy = 0;

  constructor(className, x, y, width, height) {
    this.el = document.createElement("div");
    this.el.className = "entity " + className;
    this.setPosition(x, y);
    this.setSize(width, height);
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
    this.el.style.left = this.x + "px";
    this.el.style.top = this.y + "px";
  }

  setSize(width, height) {
    this.width = width;
    this.height = height;
    this.el.style.width = this.width + "px";
    this.el.style.height = this.height + "px";
  }
}

class Game {
  paddle = null;
  ball = null;
  blocks = [];

  constructor(playareaEl) {
    this.playareaEl = playareaEl;

    //paddle
    this.paddle = new Entity("paddle", 100, 440, 100, 10);
    this.playareaEl.append(this.paddle.el);

    this.ball = new Entity("ball", 147, 430, 6, 6);
    this.playareaEl.append(this.ball.el);
    for (let y = 0; y < 2; y++) {
      for (let x = 0; x < 15; x++) {
        const block = new Entity("block", 25 + 40 * x, 20 + 40 * y, 30, 30);
        this.playareaEl.append(block.el);
        this.blocks.push(block);
      }
    }
  }

  start() {}
  tick() {}
}

window.addEventListener("DOMContentLoaded", () => {
  const game = new Game(document.getElementById("playarea"));
  game.start();
});
