import Pipe from './pipe';
import BirdImg from '../assets/sprites/bird.png';
import { asset } from './assets-loader';

class Bird implements IIterableObject {
  position: ICoordinate;
  width: number;
  height: number;
  alive: boolean;
  gravity: number;
  velocity: IVelocity;
  jump: number;
  img: HTMLImageElement;

  constructor(options?: IBirdOptionsOptional) {
    this.position = {
      x: 0,
      y: 0
    };
    this.width = 0;
    this.height = 0;
    this.alive = false;
    this.gravity = 0;
    this.velocity = {
      x: 0,
      y: 0
    };
    this.jump = 0;
    this.img = asset(BirdImg) as HTMLImageElement;
    this.setOptions(options);
  }

  public setOptions(options?: IBirdOptionsOptional): void {
    const value: IBirdOptions = Object.assign(this, options);

    this.position = value.position;
    this.width = value.width;
    this.height = value.height;
    this.alive = value.alive;
    this.gravity = value.gravity;
    this.velocity = value.velocity;
    this.jump = value.jump;
    this.img = value.img;
  }

  public flap(): void {
    this.gravity = this.jump;
  }

  public isDead(height: number, pipes: Pipe[]): boolean {
    const posY = this.position.y;
    const posX = this.position.x;

    // Check at bottom
    if (posY >= height) {
      return true;
    }

    // Check at top
    if (posY + this.height <= 0) {
      return true;
    }

    // Check if collided with pipes
    for (const pipe of pipes) {
      try {
        const { x, y } = pipe.position;
        const { width, height } = pipe;

        // Check if pipe is close to bird
        if (x - width > posX) continue;

        // prettier-ignore
        if (!(
            posX >= x + width || 
            posY >= y + height || 
            posX + this.width <= x || 
            posY + this.height <= y)) {
          return true;
        }
      } catch (err) {}
    }

    return false;
  }

  public update(): void {
    if (!this.alive) return;

    this.gravity += this.velocity.y;
    this.position.y += this.gravity;
  }

  public display(ctx: CanvasRenderingContext2D): void {
    if (!this.alive) return;

    const { x, y } = this.position;
    const { width, height, gravity, img } = this;

    ctx.save();
    ctx.translate(x, y);
    ctx.translate(width / 2, height / 2);
    ctx.rotate(((Math.PI / 2) * gravity) / 20);
    ctx.drawImage(img, -width / 2, -height / 2, width, height);
    ctx.restore();
  }
}

export default Bird;
