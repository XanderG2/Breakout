// paddle ball and the blocks (entities)

class Entity {
  width = 30;
  height = 30;
  x = 30;
  y = 30;
  sx = 0;
  sy = 0;

  constructor(className, x, y, width, height, sx = 0, sy = 0) {
    this.el = document.createElement("div");
    this.el.className = "entity " + className;
    this.setPosition(x, y);
    this.setSize(width, height);
    this.setSpeed(sx, sy);
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

  setSpeed(sx, sy) {
    this.sx = sx;
    this.sy = sy;
  }
}

class Game {
  width = 640;
  height = 480;
  paddle = null;
  ball = null;
  blocks = [];

  constructor(playareaEl) {
    this.playareaEl = playareaEl;

    //paddle
    this.paddle = new Entity("paddle", 100, 440, 100, 10);
    this.playareaEl.append(this.paddle.el);

    this.ball = new Entity("ball", 147, 430, 6, 6, 3, -2);
    this.playareaEl.append(this.ball.el);

    for (let y = 0; y < 2; y++) {
      for (let x = 0; x < 15; x++) {
        const block = new Entity("block", 25 + 40 * x, 20 + 40 * y, 30, 30);
        this.playareaEl.append(block.el);
        this.blocks.push(block);
      }
    }
  }

  start() {
    this.interval = setInterval(() => {
      this.tick();
    }, 1000 / 30);
  }

  tick() {
    const newX = this.ball.x + this.ball.sx;
    const newY = this.ball.y + this.ball.sy;
    this.ball.setPosition(newX, newY);
    if (this.ball.x >= this.width - this.ball.width) {
      this.ball.sx = -Math.abs(this.ball.sx);
    }
    if (this.ball.x <= 0) {
      this.ball.sx = Math.abs(this.ball.sx);
    }
    if (this.ball.y <= 0) {
      this.ball.sy = Math.abs(this.ball.sy);
    }
    if (this.ball.y > this.height) {
      clearInterval(this.interval);
      alert("you lose");
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const game = new Game(document.getElementById("playarea"));
  game.start();
});

function themeswitch() {
  if (document.body.className === "theme2") {
    document.body.className = "theme1";
  } else if (document.body.className === "theme1") {
    document.body.className = "theme2";
  }
}
