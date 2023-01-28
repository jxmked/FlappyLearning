/**
 * For this object only
 * */
interface IAssetsLoaderLoader {
  test: RegExp;
  loader: Function;
}
interface IPromiseResolve {
  source: string;
  object: any;
}
export default class AssetsLoader {
  public static assets: Map<string, any> = new Map<string, any>();
  private callback: Function;
  private static sources: string[] = [];

  constructor(sources: string[]) {
    this.callback = () => {};
    AssetsLoader.sources.push(...sources);

    const loaders: IAssetsLoaderLoader[] = [
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: AssetsLoader.img
      }
    ];

    const loading = sources.map((source: string) => {
      return new Promise<IPromiseResolve>(async (res: Function, rej: Function) => {
        for (const { test, loader } of loaders) {
          if (test.test(source)) {
            loader(source, res, rej);
            break;
          }
        }
      });
    });

    Promise.all(loading).then((resolveArray: IPromiseResolve[]) => {
      resolveArray.forEach((resolve: IPromiseResolve) => {
        AssetsLoader.assets.set(resolve['source'], resolve['object']);
      });

      this.callback();
    });
  }

  /**
   * Drivers
   * */
  private static img(source: string, res: Function, rej: Function): void {
    const img: HTMLImageElement = new Image();

    img.src = source;
    img.onload = () =>
      res({
        source: source,
        object: img
      });
    img.onerror = () => rej(source);
  }

  /**
   * Public Methods
   * */
  // Call the instance function after all assets has been loaded
  then(callback: Function): void {
    this.callback = callback;
  }

  static get(source: string): any {
    return AssetsLoader.assets.get(source);
  }
}

export const asset = AssetsLoader.get;
