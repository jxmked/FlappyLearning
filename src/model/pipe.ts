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
    const values: IPipeOptions = Object.assign(this, options);

    this.position = values.position;
    this.width = values.width;
    this.height = values.height;
    this.velocity = values.velocity;
    this.imgs = values.imgs;
    this.pos = values.pos;
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
    const imgWidth = this.imgs.top.width;

    /**
     * We need to calculate the new height based on new width
     * to prevent squashing the image that create a cropped image
     * */
    const newHeight = (imgHeight / imgWidth) * width;

    ctx.beginPath();
    if (this.pos === 'top') {
      ctx.drawImage(this.imgs.top, x, y + (height - newHeight), width, newHeight);
    } else if (this.pos === 'bottom') {
      ctx.drawImage(this.imgs.bottom, x, y, width, newHeight);
    }
    ctx.closePath();
  }
}

export default Pipe;
