class SnowFlake {

  constructor () {
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.alpha = 0;
    this.raduis = 0;
    this.reset();
  }

  update () {
    this.x += this.vx;
    this.y += this.vy;
    if (this.y + this.raduis > window.innerHeight) this.reset();
  }

  reset () {
    this.x = this.rand(0, window.innerWidth);
    this.y = this.rand(0, -window.innerHeight);
    this.vx = this.rand(2, -2);
    this.vy = this.rand(2, 4);
    this.raduis = this.rand(1, 2);
    this.alpha = this.rand(0.1, 0.8);
  }

  rand (min, max) {
    return min + Math.random() * (max - min);
  }
}

class Snow {
  constructor () {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');

    window.addEventListener('resize', () => this.onResize());
    this.onResize();
    this.createSnowFlakes();

    this.updateBound = this.update.bind(this);
    requestAnimationFrame(this.updateBound);
  }

  onResize () {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  createSnowFlakes () {
    this.snowFlakes = [];
    for (let i = 0; i < window.innerWidth / 6; i++) {
      this.snowFlakes.push(new SnowFlake());
    }
  }

  update () {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.snowFlakes.forEach(flake => {
      flake.update();
      this.createCirle(flake);
      this.ctx.restore();
    });
    requestAnimationFrame(this.updateBound);
  }

  createCirle (flake) {
    this.ctx.save();
    this.ctx.fillStyle = '#fff';
    this.ctx.beginPath();
    this.ctx.arc(flake.x, flake.y, flake.raduis, 0, Math.PI * 2);
    this.ctx.closePath();
    this.ctx.globalAlpha = false.alpha;
    this.ctx.fill();
  }

  getCanvas () { return this.canvas; }
}

export default Snow;
