interface IIterableObject {
  public update(): void;
  public display(ctx: CanvasRenderingContext2D): void;
}

interface ICoordinate {
  x: number;
  y: number;
}
interface IVelocity {
  x: number;
  y: number;
}

interface IContextAttributes {
  width: number;
  height: number;
}

interface IBackgroundOptions extends IContextAttributes {
  speed: number;
  imgSrc?: string;
}

interface IBirdOptions {
  position: ICoordinate;
  width: number;
  height: number;
  alive: boolean;
  gravity: number;
  velocity: IVelocity;
  jump: number;
  img: HTMLImageElement;
}
type IBirdOptionsOptional = Partial<IBirdOptions>;

interface IPipeImages {
  top: HTMLImageElement;
  bottom: HTMLImageElement;
}

interface IPipeOptions {
  position: ICoordinate;
  width: number;
  height: number;
  velocity: IVelocity;
  imgs: IPipeImages;
  pos: string;
}

type IPipeOptionsOptions = Partial<IPipeOptions>;

interface IGameConfig {
  gameSpeed: number;
  AI: {
    state: string;
  };
}


interface IDimension {
  width: number;
  height: number;
}

type = IRescaleDim = Pick<IDimension, 'width'> | Pick<IDimension, 'height'>;
