import SnowFlake from './SnowFlake'

export default class SnowCanvas {
  constructor () {
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'snow-canvas';
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

  createSnowFlakes (nbFlakes = window.innerWidth / 6) {
    this.snowFlakes = [];
    for (let i = 0; i < nbFlakes; i++) {
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
    this.ctx.save()
    this.ctx.fillStyle = '#fff';
    this.ctx.beginPath();
    this.ctx.arc(flake.x, flake.y, flake.raduis, 0, Math.PI * 2);
    this.ctx.closePath();
    this.ctx.globalAlpha = false.alpha;
    this.ctx.fill();
  }

  getCanvas () { return this.canvas; }
}