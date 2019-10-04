/* global window: false */

/**
 * Force size of the graph to the size of the screenshot.
 */
(() => {
  window.vis = {};
  let Graph3d = undefined;

  Object.defineProperty(window.vis, "Graph3d", {
    get() {
      return function StableNetwork(container, data, options, ...args) {
        options = options || {};
        options.width = "400px";
        options.height = "400px";
        return new Graph3d(container, data, options, ...args);
      };
    },
    set(value) {
      Graph3d = value;
    }
  });
})();
