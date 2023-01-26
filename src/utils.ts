export const resize = (canvas: HTMLCanvasElement): void => {
  const { innerWidth, innerHeight } = window;
  
  //const size = Math.min(innerWidth, innerHeight);
  
  canvas.width = innerWidth * 2;
  canvas.height = innerHeight * 2;
};
