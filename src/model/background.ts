import { asset } from './assets-loader';
import Sprite_bg from '../assets/sprites/background.png';
import { rescaleDim } from '../utils';

export default class Background implements IIterableObject {
  private speed: number;
  private position: ICoordinate;
  private img: HTMLImageElement;
  private contextAttr: IContextAttributes;
  private imgSrc: string;
  private imgAttr: IDimension;
  
  constructor(options?:IBackgroundOptions) {
    this.contextAttr = { width: 0, height: 0 };
    this.position = { x: 0, y: 0 };
    this.speed = 0;

    // Nope!
    this.imgSrc = '';
    this.img = void 0 as any;
    
    // new size of an image
    this.imgAttr = {
      width:0,
      height: 0
    }
    
    if(options)
      this.setOptions(options);
  }

  public resize({ width, height }: IContextAttributes): void {
    this.contextAttr = { width, height };
    this.imgAttr = rescaleDim({ 
      width: this.img.width, 
      height: this.img.height}, { height });
  }

  public setOptions(options: IBackgroundOptions): void {
    const { width, height, imgSrc } = Object.assign(this, options);
    
    if(imgSrc === '') {
      this.imgSrc = Sprite_bg;
    }
    
    this.img = asset(this.imgSrc);
    this.resize({ width, height });

  }

  public update(): void {
    this.position.x += this.speed;
  }

  public display(ctx: CanvasRenderingContext2D): void {
    const { width } = this.contextAttr;
    const { x, y } = this.position;
    const sequence = Math.ceil(width / this.imgAttr.width) + 1;
    const offset = x % this.imgAttr.width;
    
    for (let i = 0; i < sequence; i++) {
      ctx.drawImage(
        this.img!, 
        (i * this.imgAttr.width) - offset, 
        y, 
        this.imgAttr.width,
        this.imgAttr.height
      );
    }
  }
}
