import { asset } from './assets-loader';
import PipeTop from '../assets/sprites/pipetop.png';
import PipeBottom from '../assets/sprites/pipebottom.png';
import { rescaleDim } from '../utils/resize-dimension';

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
    Object.assign(this, options);
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

    /**
     * We need to calculate the new height based on new width
     * to prevent squashing the image that create a cropped image.
     *
     * Keep watching on aspect ratio!
     * */

    if (this.pos === 'top') {
      // prettier-ignore
      const resized = rescaleDim({ 
        width: this.imgs.top.width,
        height: this.imgs.top.height
      }, { width });

      ctx.drawImage(this.imgs.top, x, y + (height - resized.height), resized.width, resized.height);
    } else if (this.pos === 'bottom') {
      // prettier-ignore
      const resized = rescaleDim({ 
        width: this.imgs.bottom.width,
        height: this.imgs.bottom.height
      }, { width });

      ctx.drawImage(this.imgs.bottom, x, y, resized.width, resized.height);
    }
  }
}

export default Pipe;
