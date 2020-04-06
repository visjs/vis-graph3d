import propagatingHammerJS from "propagating-hammerjs";
import HammerJS from "hammerjs";

/**
 * Setup a mock hammer.js object, for unit testing.
 *
 * Inspiration: https://github.com/uber/deck.gl/pull/658
 *
 * @returns {{on: noop, off: noop, destroy: noop, emit: noop, get: get}}
 */
function hammerMock() {
  const noop = () => {};

  return {
    on: noop,
    off: noop,
    destroy: noop,
    emit: noop,

    get: function(m) {	//eslint-disable-line no-unused-vars
      return {
        set: noop
      };
    }
  };
}


let moduleExport
if (typeof window !== 'undefined') {
  var propagating = propagatingHammerJS;
  var Hammer = window['Hammer'] || HammerJS;
  moduleExport = propagating(Hammer, {
    preventDefault: 'mouse'
  });
}
else {
  moduleExport = function () {
    // hammer.js is only available in a browser, not in node.js. Replacing it with a mock object.
    return hammerMock();
  }
}

export default moduleExport;
