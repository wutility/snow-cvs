export default class SnowFlake {

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
