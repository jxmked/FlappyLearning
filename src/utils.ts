// https://stackoverflow.com/a/14570614

export const observeDOM = (function () {
  const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

  return (obj: HTMLElement, callback: () => void): MutationObserver | undefined => {
    // Performance Issue

    /* 
    if (!obj || obj.nodeType !== 1) return;

    if (MutationObserver) {
      // define a new observer
      const mutationObserver = new MutationObserver(callback);

      // have the observer observe for changes in children
      mutationObserver.observe(obj, { childList: true, subtree: true });
      return mutationObserver;
    }

    // browser support fallback

    obj.addEventListener('DOMNodeInserted', callback, false);
    obj.addEventListener('DOMNodeRemoved', callback, false);
*/
    return void 0;
  };
})();
