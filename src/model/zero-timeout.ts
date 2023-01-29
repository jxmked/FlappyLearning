const timeouts: Function[] = [];
const messageName = 'zero-timeout-message';

const setZeroTimeout = (func: Function) => {
  timeouts.push(func);
  window.postMessage(messageName, '*');
};

const handleMessage = (evt: MessageEvent<any>) => {
  if (evt.source == window && evt.data === messageName) {
    evt.stopPropagation();
    if (timeouts.length > 0) {
      const func = timeouts.shift();
      func && func();
    }
  }
};

window.addEventListener('message', handleMessage, true);

export default setZeroTimeout;
