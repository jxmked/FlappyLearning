import { asset } from './assets-loader';
import PipeTop from '../assets/sprites/pipetop.png';
import PipeBottom from '../assets/sprites/pipebottom.png';

class Pipe implements IIterableObject {
  position: ICoordinate;
  width: number;
  height: number;
  velocity: IVelocity;
  imgs: IPipeImages;
  pos: string;

  constructor(options?: IPipeOptionsOptions) {
    this.position = {
      x: 0,
      y: 0
    };
    this.pos = '';
    this.width = 0;
    this.height = 0;
    this.velocity = {
      x: 0,
      y: 0
    };

    this.imgs = {
      top: asset(PipeTop),
      bottom: asset(PipeBottom)
    };

    this.setOptions(options);
  }

  public setOptions(options?: IPipeOptionsOptions): void {
    options = Object.assign(this, options) as IPipeOptions;

    this.position = options.position!;
    this.width = options.width!;
    this.height = options.height!;
    this.velocity = options.velocity!;
    this.imgs = options.imgs!;
    this.pos = options.pos!;
  }

  public isOut(): boolean {
    return this.position.x + this.width < 0;
  }

  public update(): void {
    this.position.x -= this.velocity.x;
  }

  public display(ctx: CanvasRenderingContext2D): void {
    const { x, y } = this.position;
    const { width, height } = this;
    const imgHeight = this.imgs.top.height;
    // const imgWidth = this.imgs.top.width;
    // const imgRatio = imgWidth / imgHeight;

    ctx.beginPath();
    if (this.pos === 'top') {
      ctx.drawImage(this.imgs.top, x, (y + (height - imgHeight)), width, imgHeight);
      // const sub = Math.abs((y + (height - imgHeight)) - imgHeight)
      // ctx.drawImage(this.imgs.top, x, y + (height - imgHeight), width, imgHeight, x, y + (height - imgHeight), width, imgHeight);
      // ctx.arc(width, y + (height - imgHeight), 50, 0, Math.PI * 2);
      // ctx.fill();
    } else if (this.pos === 'bottom') {
      ctx.drawImage(this.imgs.bottom, x, y, width, height);
    }
    ctx.closePath();
  }
}

export default Pipe;
