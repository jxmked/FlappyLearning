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
  img: string;
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
