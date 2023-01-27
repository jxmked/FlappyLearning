export const resize = (canvas: HTMLCanvasElement): void => {
  const { innerWidth, innerHeight } = window;
  
  let size = Math.min(innerWidth, innerHeight);
  size = 500;
  canvas.width = size * 2;
  canvas.height = size * 2;
};
