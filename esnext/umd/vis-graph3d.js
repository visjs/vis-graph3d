/**
 * vis-graph3d
 * https://visjs.github.io/vis-graph3d/
 *
 * Create interactive, animated 3d graphs. Surfaces, lines, dots and block styling out of the box.
 *
 * @version 0.0.0-no-version
 * @date    2021-03-11T09:18:06.604Z
 *
 * @copyright (c) 2011-2017 Almende B.V, http://almende.com
 * @copyright (c) 2017-2019 visjs contributors, https://github.com/visjs
 *
 * @license
 * vis.js is dual licensed under both
 *
 *   1. The Apache 2.0 License
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *   and
 *
 *   2. The MIT License
 *      http://opensource.org/licenses/MIT
 *
 * vis.js may be distributed under either license.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('component-emitter'), require('vis-util/esnext/umd/vis-util.js'), require('vis-data/esnext/umd/vis-data.js')) :
  typeof define === 'function' && define.amd ? define(['exports', 'component-emitter', 'vis-util/esnext/umd/vis-util.js', 'vis-data/esnext/umd/vis-data.js'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.vis = global.vis || {}, global.Emitter, global.vis, global.vis));
}(this, (function (exports, Emitter, util, esnext) {
  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Emitter__default = /*#__PURE__*/_interopDefaultLegacy(Emitter);

  /**
   * @prototype Point3d
   * @param {number} [x]
   * @param {number} [y]
   * @param {number} [z]
   */
  function Point3d(x, y, z) {
    this.x = x !== undefined ? x : 0;
    this.y = y !== undefined ? y : 0;
    this.z = z !== undefined ? z : 0;
  }

  /**
   * Subtract the two provided points, returns a-b
   * @param {Point3d} a
   * @param {Point3d} b
   * @return {Point3d} a-b
   */
  Point3d.subtract = function(a, b) {
    var sub = new Point3d();
    sub.x = a.x - b.x;
    sub.y = a.y - b.y;
    sub.z = a.z - b.z;
    return sub;
  };

  /**
   * Add the two provided points, returns a+b
   * @param {Point3d} a
   * @param {Point3d} b
   * @return {Point3d} a+b
   */
  Point3d.add = function(a, b) {
    var sum = new Point3d();
    sum.x = a.x + b.x;
    sum.y = a.y + b.y;
    sum.z = a.z + b.z;
    return sum;
  };

  /**
   * Calculate the average of two 3d points
   * @param {Point3d} a
   * @param {Point3d} b
   * @return {Point3d} The average, (a+b)/2
   */
  Point3d.avg = function(a, b) {
    return new Point3d(
            (a.x + b.x) / 2,
            (a.y + b.y) / 2,
            (a.z + b.z) / 2
    );
  };

  /**
   * Scale the provided point by a scalar, returns p*c
   * @param {Point3d} p
   * @param {number} c
   * @return {Point3d} p*c
   */
  Point3d.scalarProduct = function(p, c) {
    return new Point3d(p.x * c, p.y * c, p.z * c);
  };

  /**
   * Calculate the dot product of the two provided points, returns a.b
   * Documentation: http://en.wikipedia.org/wiki/Dot_product
   * @param {Point3d} a
   * @param {Point3d} b
   * @return {Point3d} dot product a.b
   */
  Point3d.dotProduct = function(a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z;
  };

  /**
   * Calculate the cross product of the two provided points, returns axb
   * Documentation: http://en.wikipedia.org/wiki/Cross_product
   * @param {Point3d} a
   * @param {Point3d} b
   * @return {Point3d} cross product axb
   */
  Point3d.crossProduct = function(a, b) {
    var crossproduct = new Point3d();

    crossproduct.x = a.y * b.z - a.z * b.y;
    crossproduct.y = a.z * b.x - a.x * b.z;
    crossproduct.z = a.x * b.y - a.y * b.x;

    return crossproduct;
  };


  /**
   * Retrieve the length of the vector (or the distance from this point to the origin
   * @return {number}  length
   */
  Point3d.prototype.length = function() {
    return Math.sqrt(
            this.x * this.x +
            this.y * this.y +
            this.z * this.z
    );
  };


  /**
   * Return a normalized vector pointing in the same direction.
   * @return {Point3d}  normalized
   */
  Point3d.prototype.normalize = function() {
    return Point3d.scalarProduct(this, 1/this.length());
  };


  var Point3d_1 = Point3d;

  /**
   * @prototype Point2d
   * @param {number} [x]
   * @param {number} [y]
   */
  function Point2d (x, y) {
    this.x = x !== undefined ? x : 0;
    this.y = y !== undefined ? y : 0;
  }

  var Point2d_1 = Point2d;

  /**
   * An html slider control with start/stop/prev/next buttons
   *
   * @constructor Slider
   * @param {Element} container  The element where the slider will be created
   * @param {Object} options   Available options:
   *                 {boolean} visible   If true (default) the
   *                           slider is visible.
   */
  function Slider(container, options) {
    if (container === undefined) {
      throw new Error('No container element defined');
    }
    this.container = container;
    this.visible = (options && options.visible != undefined) ? options.visible : true;

    if (this.visible) {
      this.frame = document.createElement('DIV');
      //this.frame.style.backgroundColor = '#E5E5E5';
      this.frame.style.width = '100%';
      this.frame.style.position = 'relative';
      this.container.appendChild(this.frame);

      this.frame.prev = document.createElement('INPUT');
      this.frame.prev.type = 'BUTTON';
      this.frame.prev.value = 'Prev';
      this.frame.appendChild(this.frame.prev);

      this.frame.play = document.createElement('INPUT');
      this.frame.play.type = 'BUTTON';
      this.frame.play.value = 'Play';
      this.frame.appendChild(this.frame.play);

      this.frame.next = document.createElement('INPUT');
      this.frame.next.type = 'BUTTON';
      this.frame.next.value = 'Next';
      this.frame.appendChild(this.frame.next);

      this.frame.bar = document.createElement('INPUT');
      this.frame.bar.type = 'BUTTON';
      this.frame.bar.style.position = 'absolute';
      this.frame.bar.style.border = '1px solid red';
      this.frame.bar.style.width = '100px';
      this.frame.bar.style.height = '6px';
      this.frame.bar.style.borderRadius = '2px';
      this.frame.bar.style.MozBorderRadius = '2px';
      this.frame.bar.style.border = '1px solid #7F7F7F';
      this.frame.bar.style.backgroundColor = '#E5E5E5';
      this.frame.appendChild(this.frame.bar);

      this.frame.slide = document.createElement('INPUT');
      this.frame.slide.type = 'BUTTON';
      this.frame.slide.style.margin = '0px';
      this.frame.slide.value = ' ';
      this.frame.slide.style.position = 'relative';
      this.frame.slide.style.left = '-100px';
      this.frame.appendChild(this.frame.slide);

      // create events
      var me = this;
      this.frame.slide.onmousedown = function (event) {me._onMouseDown(event);};
      this.frame.prev.onclick = function (event) {me.prev(event);};
      this.frame.play.onclick = function (event) {me.togglePlay(event);};
      this.frame.next.onclick = function (event) {me.next(event);};
    }

    this.onChangeCallback = undefined;

    this.values = [];
    this.index = undefined;

    this.playTimeout = undefined;
    this.playInterval = 1000; // milliseconds
    this.playLoop = true;
  }

  /**
   * Select the previous index
   */
  Slider.prototype.prev = function() {
    var index = this.getIndex();
    if (index > 0) {
      index--;
      this.setIndex(index);
    }
  };

  /**
   * Select the next index
   */
  Slider.prototype.next = function() {
    var index = this.getIndex();
    if (index < this.values.length - 1) {
      index++;
      this.setIndex(index);
    }
  };

  /**
   * Select the next index
   */
  Slider.prototype.playNext = function() {
    var start = new Date();

    var index = this.getIndex();
    if (index < this.values.length - 1) {
      index++;
      this.setIndex(index);
    }
    else if (this.playLoop) {
      // jump to the start
      index = 0;
      this.setIndex(index);
    }

    var end = new Date();
    var diff = (end - start);

    // calculate how much time it to to set the index and to execute the callback
    // function.
    var interval = Math.max(this.playInterval - diff, 0);
    // document.title = diff // TODO: cleanup

    var me = this;
    this.playTimeout = setTimeout(function() {me.playNext();}, interval);
  };

  /**
   * Toggle start or stop playing
   */
  Slider.prototype.togglePlay = function() {
    if (this.playTimeout === undefined) {
      this.play();
    } else {
      this.stop();
    }
  };

  /**
   * Start playing
   */
  Slider.prototype.play = function() {
    // Test whether already playing
    if (this.playTimeout) return;

    this.playNext();

    if (this.frame) {
      this.frame.play.value = 'Stop';
    }
  };

  /**
   * Stop playing
   */
  Slider.prototype.stop = function() {
    clearInterval(this.playTimeout);
    this.playTimeout = undefined;

    if (this.frame) {
      this.frame.play.value = 'Play';
    }
  };

  /**
   * Set a callback function which will be triggered when the value of the
   * slider bar has changed.
   *
   * @param {function} callback
   */
  Slider.prototype.setOnChangeCallback = function(callback) {
    this.onChangeCallback = callback;
  };

  /**
   * Set the interval for playing the list
   * @param {number} interval   The interval in milliseconds
   */
  Slider.prototype.setPlayInterval = function(interval) {
    this.playInterval = interval;
  };

  /**
   * Retrieve the current play interval
   * @return {number} interval   The interval in milliseconds
   */
  Slider.prototype.getPlayInterval = function() {
    return this.playInterval;
  };

  /**
   * Set looping on or off
   * @param {boolean} doLoop  If true, the slider will jump to the start when
   *               the end is passed, and will jump to the end
   *               when the start is passed.
   *
   */
  Slider.prototype.setPlayLoop = function(doLoop) {
    this.playLoop = doLoop;
  };


  /**
   * Execute the onchange callback function
   */
  Slider.prototype.onChange = function() {
    if (this.onChangeCallback !== undefined) {
      this.onChangeCallback();
    }
  };

  /**
   * redraw the slider on the correct place
   */
  Slider.prototype.redraw = function() {
    if (this.frame) {
      // resize the bar
      this.frame.bar.style.top = (this.frame.clientHeight/2 -
          this.frame.bar.offsetHeight/2) + 'px';
      this.frame.bar.style.width = (this.frame.clientWidth -
          this.frame.prev.clientWidth -
          this.frame.play.clientWidth -
          this.frame.next.clientWidth - 30)  + 'px';

      // position the slider button
      var left = this.indexToLeft(this.index);
      this.frame.slide.style.left = (left) + 'px';
    }
  };


  /**
   * Set the list with values for the slider
   * @param {Array} values   A javascript array with values (any type)
   */
  Slider.prototype.setValues = function(values) {
    this.values = values;

    if (this.values.length > 0)
      this.setIndex(0);
    else
      this.index = undefined;
  };

  /**
   * Select a value by its index
   * @param {number} index
   */
  Slider.prototype.setIndex = function(index) {
    if (index < this.values.length) {
      this.index = index;

      this.redraw();
      this.onChange();
    }
    else {
      throw new Error('Index out of range');
    }
  };

  /**
   * retrieve the index of the currently selected vaue
   * @return {number} index
   */
  Slider.prototype.getIndex = function() {
    return this.index;
  };


  /**
   * retrieve the currently selected value
   * @return {*} value
   */
  Slider.prototype.get = function() {
    return this.values[this.index];
  };


  Slider.prototype._onMouseDown = function(event) {
    // only react on left mouse button down
    var leftButtonDown = event.which ? (event.which === 1) : (event.button === 1);
    if (!leftButtonDown) return;

    this.startClientX = event.clientX;
    this.startSlideX = parseFloat(this.frame.slide.style.left);

    this.frame.style.cursor = 'move';

    // add event listeners to handle moving the contents
    // we store the function onmousemove and onmouseup in the graph, so we can
    // remove the eventlisteners lateron in the function mouseUp()
    var me = this;
    this.onmousemove = function (event) {me._onMouseMove(event);};
    this.onmouseup   = function (event) {me._onMouseUp(event);};
    util.addEventListener(document, 'mousemove', this.onmousemove);
    util.addEventListener(document, 'mouseup',   this.onmouseup);
    util.preventDefault(event);
  };


  Slider.prototype.leftToIndex = function (left) {
    var width = parseFloat(this.frame.bar.style.width) -
        this.frame.slide.clientWidth - 10;
    var x = left - 3;

    var index = Math.round(x / width * (this.values.length-1));
    if (index < 0) index = 0;
    if (index > this.values.length-1) index = this.values.length-1;

    return index;
  };

  Slider.prototype.indexToLeft = function (index) {
    var width = parseFloat(this.frame.bar.style.width) -
        this.frame.slide.clientWidth - 10;

    var x = index / (this.values.length-1) * width;
    var left = x + 3;

    return left;
  };



  Slider.prototype._onMouseMove = function (event) {
    var diff = event.clientX - this.startClientX;
    var x = this.startSlideX + diff;

    var index = this.leftToIndex(x);

    this.setIndex(index);

    util.preventDefault();
  };


  Slider.prototype._onMouseUp = function (event) {  // eslint-disable-line no-unused-vars
    this.frame.style.cursor = 'auto';

    // remove event listeners
    util.removeEventListener(document, 'mousemove', this.onmousemove);
    util.removeEventListener(document, 'mouseup', this.onmouseup);

    util.preventDefault();
  };

  /**
   * @prototype StepNumber
   * The class StepNumber is an iterator for Numbers. You provide a start and end
   * value, and a best step size. StepNumber itself rounds to fixed values and
   * a finds the step that best fits the provided step.
   *
   * If prettyStep is true, the step size is chosen as close as possible to the
   * provided step, but being a round value like 1, 2, 5, 10, 20, 50, ....
   *
   * Example usage:
   *   var step = new StepNumber(0, 10, 2.5, true);
   *   step.start();
   *   while (!step.end()) {
   *   alert(step.getCurrent());
   *   step.next();
   *   }
   *
   * Version: 1.0
   *
   * @param {number} start     The start value
   * @param {number} end     The end value
   * @param {number} step    Optional. Step size. Must be a positive value.
   * @param {boolean} prettyStep Optional. If true, the step size is rounded
   *               To a pretty step size (like 1, 2, 5, 10, 20, 50, ...)
   */
  function StepNumber(start, end, step, prettyStep) {
    // set default values
    this._start = 0;
    this._end = 0;
    this._step = 1;
    this.prettyStep = true;
    this.precision = 5;

    this._current = 0;
    this.setRange(start, end, step, prettyStep);
  }


  /**
   * Check for input values, to prevent disasters from happening
   *
   * Source: http://stackoverflow.com/a/1830844
   *
   * @param {string} n
   * @returns {boolean}
   */
  StepNumber.prototype.isNumeric = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };


  /**
   * Set a new range: start, end and step.
   *
   * @param {number} start     The start value
   * @param {number} end     The end value
   * @param {number} step    Optional. Step size. Must be a positive value.
   * @param {boolean} prettyStep Optional. If true, the step size is rounded
   *               To a pretty step size (like 1, 2, 5, 10, 20, 50, ...)
   */
  StepNumber.prototype.setRange = function(start, end, step, prettyStep) {
    if (!this.isNumeric(start)) {
      throw new Error('Parameter \'start\' is not numeric; value: ' + start);
    }
    if (!this.isNumeric(end)) {
      throw new Error('Parameter \'end\' is not numeric; value: ' + start);
    }
    if (!this.isNumeric(step)) {
      throw new Error('Parameter \'step\' is not numeric; value: ' + start);
    }

    this._start = start ? start : 0;
    this._end = end ? end : 0;

    this.setStep(step, prettyStep);
  };

  /**
   * Set a new step size
   * @param {number} step    New step size. Must be a positive value
   * @param {boolean} prettyStep Optional. If true, the provided step is rounded
   *               to a pretty step size (like 1, 2, 5, 10, 20, 50, ...)
   */
  StepNumber.prototype.setStep = function(step, prettyStep) {
    if (step === undefined || step <= 0)
      return;

    if (prettyStep !== undefined)
      this.prettyStep = prettyStep;

    if (this.prettyStep === true)
      this._step = StepNumber.calculatePrettyStep(step);
    else
      this._step = step;
  };

  /**
   * Calculate a nice step size, closest to the desired step size.
   * Returns a value in one of the ranges 1*10^n, 2*10^n, or 5*10^n, where n is an
   * integer Number. For example 1, 2, 5, 10, 20, 50, etc...
   * @param {number}  step  Desired step size
   * @return {number}     Nice step size
   */
  StepNumber.calculatePrettyStep = function (step) {
    var log10 = function (x) {return Math.log(x) / Math.LN10;};

    // try three steps (multiple of 1, 2, or 5
    var step1 = Math.pow(10, Math.round(log10(step))),
        step2 = 2 * Math.pow(10, Math.round(log10(step / 2))),
        step5 = 5 * Math.pow(10, Math.round(log10(step / 5)));

    // choose the best step (closest to minimum step)
    var prettyStep = step1;
    if (Math.abs(step2 - step) <= Math.abs(prettyStep - step)) prettyStep = step2;
    if (Math.abs(step5 - step) <= Math.abs(prettyStep - step)) prettyStep = step5;

    // for safety
    if (prettyStep <= 0) {
      prettyStep = 1;
    }

    return prettyStep;
  };

  /**
   * returns the current value of the step
   * @return {number} current value
   */
  StepNumber.prototype.getCurrent = function () {
    return parseFloat(this._current.toPrecision(this.precision));
  };

  /**
   * returns the current step size
   * @return {number} current step size
   */
  StepNumber.prototype.getStep = function () {
    return this._step;
  };

  /**
   * Set the current to its starting value.
   *
   * By default, this will be the largest value smaller than start, which
   * is a multiple of the step size.
   *
   * Parameters checkFirst is optional, default false.
   * If set to true, move the current value one step if smaller than start.
   *
   * @param {boolean} [checkFirst=false]
   */
  StepNumber.prototype.start = function(checkFirst) {
    if (checkFirst === undefined) {
      checkFirst = false;
    }

    this._current = this._start - this._start % this._step;

    if (checkFirst) {
      if (this.getCurrent() < this._start) {
        this.next();
      }
    }
  };


  /**
   * Do a step, add the step size to the current value
   */
  StepNumber.prototype.next = function () {
    this._current += this._step;
  };

  /**
   * Returns true whether the end is reached
   * @return {boolean}  True if the current value has passed the end value.
   */
  StepNumber.prototype.end = function () {
    return (this._current > this._end);
  };

  var StepNumber_1 = StepNumber;

  /**
   * The camera is mounted on a (virtual) camera arm. The camera arm can rotate
   * The camera is always looking in the direction of the origin of the arm.
   * This way, the camera always rotates around one fixed point, the location
   * of the camera arm.
   *
   * Documentation:
   *   http://en.wikipedia.org/wiki/3D_projection
   * @class Camera
   */
  function Camera() {
    this.armLocation = new Point3d_1();
    this.armRotation = {};
    this.armRotation.horizontal = 0;
    this.armRotation.vertical = 0;
    this.armLength = 1.7;
    this.cameraOffset = new Point3d_1();
    this.offsetMultiplier = 0.6;

    this.cameraLocation = new Point3d_1();
    this.cameraRotation =  new Point3d_1(0.5*Math.PI, 0, 0);

    this.calculateCameraOrientation();
  }

  /**
   * Set offset camera in camera coordinates
   * @param {number} x offset by camera horisontal
   * @param {number} y offset by camera vertical
   */
  Camera.prototype.setOffset = function(x, y) {
    var abs = Math.abs,
        sign = Math.sign,
        mul = this.offsetMultiplier,
        border = this.armLength * mul;

    if (abs(x) > border) {
        x = sign(x) * border;
    }
    if (abs(y) > border) {
        y = sign(y) * border;
    }
    this.cameraOffset.x = x;
    this.cameraOffset.y = y;
    this.calculateCameraOrientation();
  };


  /**
   * Get camera offset by horizontal and vertical
   * @returns {number}
   */
  Camera.prototype.getOffset = function() {
    return this.cameraOffset;
  };

  /**
   * Set the location (origin) of the arm
   * @param {number} x  Normalized value of x
   * @param {number} y  Normalized value of y
   * @param {number} z  Normalized value of z
   */
  Camera.prototype.setArmLocation = function(x, y, z) {
    this.armLocation.x = x;
    this.armLocation.y = y;
    this.armLocation.z = z;

    this.calculateCameraOrientation();
  };

  /**
   * Set the rotation of the camera arm
   * @param {number} horizontal   The horizontal rotation, between 0 and 2*PI.
   *                Optional, can be left undefined.
   * @param {number} vertical   The vertical rotation, between 0 and 0.5*PI
   *                if vertical=0.5*PI, the graph is shown from the
   *                top. Optional, can be left undefined.
   */
  Camera.prototype.setArmRotation = function(horizontal, vertical) {
    if (horizontal !== undefined) {
      this.armRotation.horizontal = horizontal;
    }

    if (vertical !== undefined) {
      this.armRotation.vertical = vertical;
      if (this.armRotation.vertical < 0) this.armRotation.vertical = 0;
      if (this.armRotation.vertical > 0.5*Math.PI) this.armRotation.vertical = 0.5*Math.PI;
    }

    if (horizontal !== undefined || vertical !== undefined) {
      this.calculateCameraOrientation();
    }
  };

  /**
   * Retrieve the current arm rotation
   * @return {object}   An object with parameters horizontal and vertical
   */
  Camera.prototype.getArmRotation = function() {
    var rot = {};
    rot.horizontal = this.armRotation.horizontal;
    rot.vertical = this.armRotation.vertical;

    return rot;
  };

  /**
   * Set the (normalized) length of the camera arm.
   * @param {number} length A length between 0.71 and 5.0
   */
  Camera.prototype.setArmLength = function(length) {
    if (length === undefined)
      return;

    this.armLength = length;

    // Radius must be larger than the corner of the graph,
    // which has a distance of sqrt(0.5^2+0.5^2) = 0.71 from the center of the
    // graph
    if (this.armLength < 0.71) this.armLength = 0.71;
    if (this.armLength > 5.0) this.armLength = 5.0;

    this.setOffset(this.cameraOffset.x, this.cameraOffset.y);
    this.calculateCameraOrientation();
  };

  /**
   * Retrieve the arm length
   * @return {number} length
   */
  Camera.prototype.getArmLength = function() {
    return this.armLength;
  };

  /**
   * Retrieve the camera location
   * @return {Point3d} cameraLocation
   */
  Camera.prototype.getCameraLocation = function() {
    return this.cameraLocation;
  };

  /**
   * Retrieve the camera rotation
   * @return {Point3d} cameraRotation
   */
  Camera.prototype.getCameraRotation = function() {
    return this.cameraRotation;
  };

  /**
   * Calculate the location and rotation of the camera based on the
   * position and orientation of the camera arm
   */
  Camera.prototype.calculateCameraOrientation = function() {
    // calculate location of the camera
    this.cameraLocation.x = this.armLocation.x - this.armLength * Math.sin(this.armRotation.horizontal) * Math.cos(this.armRotation.vertical);
    this.cameraLocation.y = this.armLocation.y - this.armLength * Math.cos(this.armRotation.horizontal) * Math.cos(this.armRotation.vertical);
    this.cameraLocation.z = this.armLocation.z + this.armLength * Math.sin(this.armRotation.vertical);

    // calculate rotation of the camera
    this.cameraRotation.x = Math.PI/2 - this.armRotation.vertical;
    this.cameraRotation.y = 0;
    this.cameraRotation.z = -this.armRotation.horizontal;

    var xa = this.cameraRotation.x;
    var za = this.cameraRotation.z;
    var dx = this.cameraOffset.x;
    var dy = this.cameraOffset.y;
    var sin = Math.sin, cos = Math.cos;

    this.cameraLocation.x = this.cameraLocation.x + dx * cos(za) + dy * - sin(za) * cos(xa);
    this.cameraLocation.y = this.cameraLocation.y + dx * sin(za) + dy * cos(za) * cos(xa);
    this.cameraLocation.z = this.cameraLocation.z + dy * sin(xa);
  };

  ////////////////////////////////////////////////////////////////////////////////


  // enumerate the available styles
  var STYLE = {
    BAR     : 0,
    BARCOLOR: 1,
    BARSIZE : 2,
    DOT     : 3,
    DOTLINE : 4,
    DOTCOLOR: 5,
    DOTSIZE : 6,
    GRID    : 7,
    LINE    : 8,
    SURFACE : 9
  };


  // The string representations of the styles
  var STYLENAME = {
    'dot'      : STYLE.DOT,
    'dot-line' : STYLE.DOTLINE,
    'dot-color': STYLE.DOTCOLOR,
    'dot-size' : STYLE.DOTSIZE,
    'line'     : STYLE.LINE,
    'grid'     : STYLE.GRID,
    'surface'  : STYLE.SURFACE,
    'bar'      : STYLE.BAR,
    'bar-color': STYLE.BARCOLOR,
    'bar-size' : STYLE.BARSIZE
  };


  /**
   * Field names in the options hash which are of relevance to the user.
   *
   * Specifically, these are the fields which require no special handling,
   * and can be directly copied over.
   */
  var OPTIONKEYS = [
    'width',
    'height',
    'filterLabel',
    'legendLabel',
    'xLabel',
    'yLabel',
    'zLabel',
    'xValueLabel',
    'yValueLabel',
    'zValueLabel',
    'showXAxis',
    'showYAxis',
    'showZAxis',
    'showGrayBottom',
    'showGrid',
    'showPerspective',
    'showShadow',
    'showSurfaceGrid',
    'keepAspectRatio',
    'rotateAxisLabels',
    'verticalRatio',
    'dotSizeRatio',
    'dotSizeMinFraction',
    'dotSizeMaxFraction',
    'showAnimationControls',
    'animationInterval',
    'animationPreload',
    'animationAutoStart',
    'axisColor',
    'axisFontSize',
    'axisFontType',
    'gridColor',
    'xCenter',
    'yCenter',
    'zoomable',
    'tooltipDelay',
    'ctrlToZoom'
  ];


  /**
   * Field names in the options hash which are of relevance to the user.
   *
   * Same as OPTIONKEYS, but internally these fields are stored with 
   * prefix 'default' in the name.
   */
  var PREFIXEDOPTIONKEYS = [
    'xBarWidth',
    'yBarWidth',
    'valueMin',
    'valueMax',
    'xMin',
    'xMax',
    'xStep',
    'yMin',
    'yMax',
    'yStep',
    'zMin',
    'zMax',
    'zStep'
  ];


  // Placeholder for DEFAULTS reference
  var DEFAULTS = undefined; 


  /**
   * Check if given hash is empty.
   *
   * Source: http://stackoverflow.com/a/679937
   *
   * @param {object} obj
   * @returns {boolean}
   */
  function isEmpty(obj) {
    for(var prop in obj) {
      if (obj.hasOwnProperty(prop))
        return false;
    }

    return true;
  }


  /**
   * Make first letter of parameter upper case.
   *
   * Source: http://stackoverflow.com/a/1026087
   *
   * @param {string} str
   * @returns {string}
   */
  function capitalize(str) {
    if (str === undefined || str === "" || typeof str != "string") {
      return str;
    }

    return str.charAt(0).toUpperCase() + str.slice(1);
  }


  /**
   * Add a prefix to a field name, taking style guide into account
   *
   * @param {string} prefix
   * @param {string} fieldName
   * @returns {string}
   */
  function prefixFieldName(prefix, fieldName) {
    if (prefix === undefined || prefix === "") {
      return fieldName;
    }

    return prefix + capitalize(fieldName);
  }


  /**
   * Forcibly copy fields from src to dst in a controlled manner.
   *
   * A given field in dst will always be overwitten. If this field
   * is undefined or not present in src, the field in dst will 
   * be explicitly set to undefined.
   * 
   * The intention here is to be able to reset all option fields.
   * 
   * Only the fields mentioned in array 'fields' will be handled.
   *
   * @param {object} src
   * @param {object} dst
   * @param {array<string>} fields array with names of fields to copy
   * @param {string} [prefix] prefix to use for the target fields.
   */
  function forceCopy(src, dst, fields, prefix) {
    var srcKey;
    var dstKey;

    for (var i = 0; i < fields.length; ++i) {
      srcKey  = fields[i];
      dstKey  = prefixFieldName(prefix, srcKey);

      dst[dstKey] = src[srcKey];
    }
  }


  /**
   * Copy fields from src to dst in a safe and controlled manner.
   *
   * Only the fields mentioned in array 'fields' will be copied over,
   * and only if these are actually defined.
   *
   * @param {object} src
   * @param {object} dst
   * @param {array<string>} fields array with names of fields to copy
   * @param {string} [prefix] prefix to use for the target fields.
   */
  function safeCopy(src, dst, fields, prefix) {
    var srcKey;
    var dstKey;

    for (var i = 0; i < fields.length; ++i) {
      srcKey  = fields[i];
      if (src[srcKey] === undefined) continue;

      dstKey  = prefixFieldName(prefix, srcKey);

      dst[dstKey] = src[srcKey];
    }
  }


  /**
   * Initialize dst with the values in src.
   *
   * src is the hash with the default values. 
   * A reference DEFAULTS to this hash is stored locally for 
   * further handling.
   *
   * For now, dst is assumed to be a Graph3d instance.
   * @param {object} src
   * @param {object} dst
   */
  function setDefaults(src, dst) {
    if (src === undefined || isEmpty(src)) {
      throw new Error('No DEFAULTS passed');
    }
    if (dst === undefined) {
      throw new Error('No dst passed');
    }

    // Remember defaults for future reference
    DEFAULTS = src;

    // Handle the defaults which can be simply copied over
    forceCopy(src, dst, OPTIONKEYS);
    forceCopy(src, dst, PREFIXEDOPTIONKEYS, 'default');

    // Handle the more complex ('special') fields
    setSpecialSettings(src, dst);

    // Following are internal fields, not part of the user settings
    dst.margin = 10;                  // px
    dst.showTooltip = false;
    dst.onclick_callback = null;
    dst.eye = new Point3d_1(0, 0, -1);  // TODO: set eye.z about 3/4 of the width of the window?
  }

  /**
   *
   * @param {object} options
   * @param {object} dst
   */
  function setOptions(options, dst) {
    if (options === undefined) {
      return;
    }
    if (dst === undefined) {
      throw new Error('No dst passed');
    }

    if (DEFAULTS === undefined || isEmpty(DEFAULTS)) {
      throw new Error('DEFAULTS not set for module Settings');
    }

    // Handle the parameters which can be simply copied over
    safeCopy(options, dst, OPTIONKEYS);
    safeCopy(options, dst, PREFIXEDOPTIONKEYS, 'default');

    // Handle the more complex ('special') fields
    setSpecialSettings(options, dst);
  }

  /**
   * Special handling for certain parameters
   *
   * 'Special' here means: setting requires more than a simple copy
   *
   * @param {object} src
   * @param {object} dst
   */
  function setSpecialSettings(src, dst) {
    if (src.backgroundColor !== undefined) {
      setBackgroundColor(src.backgroundColor, dst);
    }

    setDataColor(src.dataColor, dst);
    setStyle(src.style, dst);
    if (src.surfaceColors !== undefined) {
      console.warn(
        '`options.surfaceColors` is deprecated and may be removed in a future ' +
        'version. Please use `options.colormap` instead. Note that the `colormap` ' +
        'option uses the inverse array ordering (running from vMin to vMax).');
      if (src.colormap !== undefined) {
        throw new Error('The `colormap` and `surfaceColors` options are mutually exclusive.');
      }
      if (dst.style !== 'surface') {
        console.warn(
          'Ignoring `surfaceColors` in graph style `' + dst.style + '` for ' +
          'backward compatibility (only effective in `surface` plots).');
      }
      else {
        setSurfaceColor(src.surfaceColors, dst);
      }
    }
    else {
      setColormap(src.colormap, dst);
    }
    setShowLegend(src.showLegend, dst);
    setCameraPosition(src.cameraPosition, dst);

    // As special fields go, this is an easy one; just a translation of the name.
    // Can't use this.tooltip directly, because that field exists internally
    if (src.tooltip !== undefined) {
      dst.showTooltip = src.tooltip;
    }
    if (src.onclick != undefined) {
      dst.onclick_callback = src.onclick;
      console.warn(
        "`options.onclick` is deprecated and may be removed in a future version." +
        " Please use `Graph3d.on('click', handler)` instead.");
    }

    if (src.tooltipStyle !== undefined) {
      util.selectiveDeepExtend(['tooltipStyle'], dst, src);
    }
  }


  /**
   * Set the value of setting 'showLegend'
   *
   * This depends on the value of the style fields, so it must be called
   * after the style field has been initialized.
   *
   * @param {boolean} showLegend
   * @param {object} dst
   */
  function setShowLegend(showLegend, dst) {
    if (showLegend === undefined) {
      // If the default was auto, make a choice for this field
      var isAutoByDefault = (DEFAULTS.showLegend === undefined);

      if (isAutoByDefault) {
        // these styles default to having legends
        var isLegendGraphStyle = dst.style === STYLE.DOTCOLOR
                              || dst.style === STYLE.DOTSIZE;

        dst.showLegend = isLegendGraphStyle;
      }
    } else {
      dst.showLegend = showLegend;
    }
  }


  /**
   * Retrieve the style index from given styleName
   * @param {string} styleName  Style name such as 'dot', 'grid', 'dot-line'
   * @return {number} styleNumber Enumeration value representing the style, or -1
   *                when not found
   */
  function getStyleNumberByName(styleName) {
    var number = STYLENAME[styleName];

    if (number === undefined) {
      return -1;
    }

    return number;
  }


  /**
   * Check if given number is a valid style number.
   *
   * @param {string | number} style
   * @return {boolean} true if valid, false otherwise
   */
  function checkStyleNumber(style) {
    var valid = false;

    for (var n in STYLE) {
      if (STYLE[n] === style) {
        valid = true;
        break;
      }
    }

    return valid;
  }

  /**
   *
   * @param {string | number} style
   * @param {Object} dst
   */
  function setStyle(style, dst) {
    if (style === undefined) {
      return;   // Nothing to do
    }

    var styleNumber;

    if (typeof style === 'string') {
      styleNumber = getStyleNumberByName(style);

      if (styleNumber === -1 ) {
        throw new Error('Style \'' + style + '\' is invalid');
      }
    } else {
      // Do a pedantic check on style number value
      if (!checkStyleNumber(style)) {
        throw new Error('Style \'' + style + '\' is invalid');
      }

      styleNumber = style;
    }

    dst.style = styleNumber;
  }


  /**
   * Set the background styling for the graph
   * @param {string | {fill: string, stroke: string, strokeWidth: string}} backgroundColor
   * @param {Object} dst
   */
  function setBackgroundColor(backgroundColor, dst) {
    var fill = 'white';
    var stroke = 'gray';
    var strokeWidth = 1;

    if (typeof(backgroundColor) === 'string') {
      fill = backgroundColor;
      stroke = 'none';
      strokeWidth = 0;
    }
    else if (typeof(backgroundColor) === 'object') {
      if (backgroundColor.fill !== undefined)    fill = backgroundColor.fill;
      if (backgroundColor.stroke !== undefined)    stroke = backgroundColor.stroke;
      if (backgroundColor.strokeWidth !== undefined) strokeWidth = backgroundColor.strokeWidth;
    }
    else {
      throw new Error('Unsupported type of backgroundColor');
    }

    dst.frame.style.backgroundColor = fill;
    dst.frame.style.borderColor = stroke;
    dst.frame.style.borderWidth = strokeWidth + 'px';
    dst.frame.style.borderStyle = 'solid';
  }

  /**
   *
   * @param {string | Object} dataColor
   * @param {Object} dst
   */
  function setDataColor(dataColor, dst) {
    if (dataColor === undefined) {
      return;    // Nothing to do
    }

    if (dst.dataColor === undefined) {
      dst.dataColor = {};
    }

    if (typeof dataColor === 'string') {
      dst.dataColor.fill   = dataColor;
      dst.dataColor.stroke = dataColor;
    }
    else {
      if (dataColor.fill) {
        dst.dataColor.fill = dataColor.fill;
      }
      if (dataColor.stroke) {
        dst.dataColor.stroke = dataColor.stroke;
      }
      if (dataColor.strokeWidth !== undefined) {
        dst.dataColor.strokeWidth = dataColor.strokeWidth;
      }
    }
  }

  /**
   * 
   * @param {Object | Array<string>} surfaceColors Either an object that describes the HUE, or an array of HTML hex color codes
   * @param {Object} dst 
   */
  function setSurfaceColor(surfaceColors, dst) {
    if(surfaceColors === undefined || surfaceColors === true) {
      return;    // Nothing to do
    }
    if (surfaceColors === false) {
      dst.surfaceColors = undefined;
      return;
    }

    if (dst.surfaceColors === undefined) {
      dst.surfaceColors = {};
    }

    let rgbColors;
    if (Array.isArray(surfaceColors)) {
      rgbColors = parseColorArray(surfaceColors);
    } else if (typeof surfaceColors === 'object') {
      rgbColors = parseColorObject(surfaceColors.hue);
    } else {
      throw new Error('Unsupported type of surfaceColors');
    }
    // for some reason surfaceColors goes from vMax to vMin:
    rgbColors.reverse();
    dst.colormap = rgbColors;
  }


  /**
   *
   * @param {Object | Array<string>} colormap Either an object that describes the HUE, or an array of HTML hex color codes
   * @param {Object} dst
   */
  function setColormap(colormap, dst) {
    if (colormap === undefined) {
      return;
    }

    let rgbColors;
    if (Array.isArray(colormap)) {
      rgbColors = parseColorArray(colormap);
    } else if (typeof colormap === 'object') {
      rgbColors = parseColorObject(colormap.hue);
    } else if (typeof colormap === 'function') {
      rgbColors = colormap;
    } else {
      throw new Error('Unsupported type of colormap');
    }
    dst.colormap = rgbColors;
  }


  /**
   *
   * @param {Array} colormap
   */
  function parseColorArray(colormap) {
    if(colormap.length < 2) {
      throw new Error('Colormap array length must be 2 or above.');
    }
    return colormap.map(function(colorCode){
      if(!util.isValidHex(colorCode)) {
        throw new Error(`Invalid hex color code supplied to colormap.`);
      }
      return util.hexToRGB(colorCode);
    });
  }


  /**
   * Converts an object to a certain amount of hex color stops. At which point:
   * the HTML hex color codes is converted into an RGB color object.
   *
   * @param {Object} hues
   */
  function parseColorObject(hues) {
    if (hues === undefined) {
      throw new Error('Unsupported type of colormap');
    }
    if (!(hues.saturation >= 0 && hues.saturation <= 100)) {
      throw new Error('Saturation is out of bounds. Expected range is 0-100.');
    }
    if (!(hues.brightness >= 0 && hues.brightness <= 100)) {
      throw new Error('Brightness is out of bounds. Expected range is 0-100.');
    }
    if (!(hues.colorStops >= 2)) {
      throw new Error('colorStops is out of bounds. Expected 2 or above.');
    }

    const hueStep = (hues.end - hues.start) / (hues.colorStops - 1);

    let rgbColors = [];
    for (let i = 0; i < hues.colorStops; ++i) {
      let hue = (hues.start + hueStep * i) % 360 / 360;
      rgbColors.push(
        util.HSVToRGB(
          hue < 0 ? hue + 1 : hue,
          hues.saturation/100,
          hues.brightness/100
        )
      );
    }
    return rgbColors;
  }


  /**
   *
   * @param {Object} cameraPosition
   * @param {Object} dst
   */
  function setCameraPosition(cameraPosition, dst) {
    var camPos = cameraPosition;
    if (camPos === undefined) {
      return;
    }

    if (dst.camera === undefined) {
      dst.camera = new Camera();
    }

    dst.camera.setArmRotation(camPos.horizontal, camPos.vertical);
    dst.camera.setArmLength(camPos.distance);
  }

  /**
   * This object contains all possible options. It will check if the types are correct, if required if the option is one
   * of the allowed values.
   *
   * __any__ means that the name of the property does not matter.
   * __type__ is a required field for all objects and contains the allowed types of all objects
   */
  let string   = 'string';
  let bool     = 'boolean';
  let number   = 'number';
  let object   = 'object';   // should only be in a __type__ property
  let array    = 'array';
  // Following not used here, but useful for reference
  //let dom      = 'dom';
  //let any      = 'any';


  let colorOptions = {
    fill       : { string },
    stroke     : { string },
    strokeWidth: { number },
    __type__   : { string, object, 'undefined': 'undefined' }
  };

  let surfaceColorsOptions = {
    hue: {
      start       : { number },
      end         : { number },
      saturation  : { number },
      brightness  : { number },
      colorStops  : { number },
      __type__    : { object },
    },
    __type__    : { boolean: bool, array, object, 'undefined': 'undefined' },
  };

  let colormapOptions = {
    hue: {
      start       : { number },
      end         : { number },
      saturation  : { number },
      brightness  : { number },
      colorStops  : { number },
      __type__    : { object },
    },
    __type__    : { array, object, 'function': 'function', 'undefined': 'undefined' },
  };

  /**
   * Order attempted to be alphabetical.
   *   - x/y/z-prefixes ignored in sorting
   *   - __type__ always at end
   *   - globals at end
   */
  let allOptions = {
    animationAutoStart: { boolean: bool, 'undefined': 'undefined' },
    animationInterval : { number },
    animationPreload  : { boolean: bool },
    axisColor         : { string },
    axisFontSize      : { number: number},
    axisFontType      : { string: string},
    backgroundColor   : colorOptions,
    xBarWidth         : { number, 'undefined': 'undefined' },
    yBarWidth         : { number, 'undefined': 'undefined' },
    cameraPosition    : {
      distance  : { number },
      horizontal: { number },
      vertical  : { number },
      __type__  : { object }
    },
    zoomable          : { boolean: bool },
    ctrlToZoom        : { boolean: bool },
    xCenter           : { string },
    yCenter           : { string },
    colormap          : colormapOptions,
    dataColor         : colorOptions,
    dotSizeMinFraction: { number },
    dotSizeMaxFraction: { number },
    dotSizeRatio      : { number },
    filterLabel       : { string },
    gridColor         : { string },
    onclick           : { 'function': 'function' },
    keepAspectRatio   : { boolean: bool },
    xLabel            : { string },
    yLabel            : { string },
    zLabel            : { string },
    legendLabel       : { string },
    xMin              : { number, 'undefined': 'undefined' },
    yMin              : { number, 'undefined': 'undefined' },
    zMin              : { number, 'undefined': 'undefined' },
    xMax              : { number, 'undefined': 'undefined' },
    yMax              : { number, 'undefined': 'undefined' },
    zMax              : { number, 'undefined': 'undefined' },
    showAnimationControls: { boolean: bool, 'undefined': 'undefined' },
    showGrayBottom    : { boolean: bool },
    showGrid          : { boolean: bool },
    showLegend        : { boolean: bool, 'undefined': 'undefined' },
    showPerspective   : { boolean: bool },
    showShadow        : { boolean: bool },
    showSurfaceGrid   : { boolean: bool },
    showXAxis         : { boolean: bool },
    showYAxis         : { boolean: bool },
    showZAxis         : { boolean: bool },
    rotateAxisLabels  : { boolean: bool },
    surfaceColors     : surfaceColorsOptions,
    xStep             : { number, 'undefined': 'undefined' },
    yStep             : { number, 'undefined': 'undefined' },
    zStep             : { number, 'undefined': 'undefined' },
    style: {
      number,        // TODO: either Graph3d.DEFAULT has string, or number allowed in documentation
      string: [
        'bar',
        'bar-color',
        'bar-size',
        'dot',
        'dot-line',
        'dot-color',
        'dot-size',
        'line',
        'grid',
        'surface'
      ]
    },
    tooltip      : { boolean: bool, 'function': 'function' },
    tooltipDelay : { number: number },
    tooltipStyle : {
      content: {
        color       : { string },
        background  : { string },
        border      : { string },
        borderRadius: { string },
        boxShadow   : { string },
        padding     : { string },
        __type__    : { object }
      },
      line: {
        borderLeft   : { string },
        height       : { string },
        width        : { string },
        pointerEvents: { string },
        __type__     : { object }
      },
      dot: {
        border       : { string },
        borderRadius : { string },
        height       : { string },
        width        : { string },
        pointerEvents: { string },
        __type__     : { object}
      },
       __type__: { object}
    },
    xValueLabel   : { 'function': 'function' },
    yValueLabel   : { 'function': 'function' },
    zValueLabel   : { 'function': 'function' },
    valueMax      : { number, 'undefined': 'undefined' },
    valueMin      : { number, 'undefined': 'undefined' },
    verticalRatio : { number },

    //globals :
    height: { string },
    width: { string },
    __type__: { object }
  };

  /**
   * @prototype Range
   *
   * Helper class to make working with related min and max values easier.
   *
   * The range is inclusive; a given value is considered part of the range if:
   *
   *    this.min <= value <= this.max
   */
  function Range() {
    this.min = undefined;
    this.max = undefined;
  }


  /**
   * Adjust the range so that the passed value fits in it.
   *
   * If the value is outside of the current extremes, adjust
   * the min or max so that the value is within the range.
   *
   * @param {number} value Numeric value to fit in range
   */
  Range.prototype.adjust = function(value) {
    if (value === undefined) return;

    if (this.min === undefined || this.min > value ) {
      this.min = value;
    }

    if (this.max === undefined || this.max < value) {
      this.max = value;
    }
  };


  /**
   * Adjust the current range so that the passed range fits in it.
   *
   * @param {Range} range Range instance to fit in current instance
   */
  Range.prototype.combine = function(range) {
     this.add(range.min);
     this.add(range.max);
  };


  /**
   * Expand the range by the given value
   *
   * min will be lowered by given value;
   * max will be raised by given value
   *
   * Shrinking by passing a negative value is allowed.
   *
   * @param {number} val Amount by which to expand or shrink current range with
   */
  Range.prototype.expand = function(val) {
    if (val === undefined) {
      return;
    }

    var newMin = this.min - val;
    var newMax = this.max + val;

    // Note that following allows newMin === newMax.
    // This should be OK, since method expand() allows this also.
    if (newMin > newMax) {
      throw new Error('Passed expansion value makes range invalid');
    }

    this.min = newMin;
    this.max = newMax;
  };


  /**
   * Determine the full range width of current instance.
   *
   * @returns {num} The calculated width of this range
   */
  Range.prototype.range = function() {
    return this.max - this.min;
  };


  /**
   * Determine the central point of current instance.
   *
   * @returns {number} the value in the middle of min and max
   */
  Range.prototype.center = function() {
   return (this.min + this.max) / 2;
  };


  var Range_1 = Range;

  /**
   * @class Filter
   *
   * @param {DataGroup} dataGroup the data group 
   * @param {number}  column             The index of the column to be filtered
   * @param {Graph3d} graph              The graph
   */
  function Filter (dataGroup, column, graph) {
    this.dataGroup = dataGroup;
    this.column = column;
    this.graph = graph; // the parent graph

    this.index = undefined;
    this.value = undefined;

    // read all distinct values and select the first one
    this.values = dataGroup.getDistinctValues(this.column);

    if (this.values.length > 0) {
      this.selectValue(0);
    }

    // create an array with the filtered datapoints. this will be loaded afterwards
    this.dataPoints = [];

    this.loaded = false;
    this.onLoadCallback = undefined;

    if (graph.animationPreload) {
      this.loaded = false;
      this.loadInBackground();
    }
    else {
      this.loaded = true;
    }
  }


  /**
   * Return the label
   * @return {string} label
   */
  Filter.prototype.isLoaded = function() {
    return this.loaded;
  };


  /**
   * Return the loaded progress
   * @return {number} percentage between 0 and 100
   */
  Filter.prototype.getLoadedProgress = function() {
    var len = this.values.length;

    var i = 0;
    while (this.dataPoints[i]) {
      i++;
    }

    return Math.round(i / len * 100);
  };


  /**
   * Return the label
   * @return {string} label
   */
  Filter.prototype.getLabel = function() {
    return this.graph.filterLabel;
  };


  /**
   * Return the columnIndex of the filter
   * @return {number} columnIndex
   */
  Filter.prototype.getColumn = function() {
    return this.column;
  };

  /**
   * Return the currently selected value. Returns undefined if there is no selection
   * @return {*} value
   */
  Filter.prototype.getSelectedValue = function() {
    if (this.index === undefined)
      return undefined;

    return this.values[this.index];
  };

  /**
   * Retrieve all values of the filter
   * @return {Array} values
   */
  Filter.prototype.getValues = function() {
    return this.values;
  };

  /**
   * Retrieve one value of the filter
   * @param {number}  index
   * @return {*} value
   */
  Filter.prototype.getValue = function(index) {
    if (index >= this.values.length)
      throw new Error('Index out of range');

    return this.values[index];
  };


  /**
   * Retrieve the (filtered) dataPoints for the currently selected filter index
   * @param {number} [index] (optional)
   * @return {Array} dataPoints
   */
  Filter.prototype._getDataPoints = function(index) {
    if (index === undefined)
      index = this.index;

    if (index === undefined)
      return [];

    var dataPoints;
    if (this.dataPoints[index]) {
      dataPoints = this.dataPoints[index];
    }
    else {
      var f = {};
      f.column = this.column;
      f.value = this.values[index];

      var dataView = new esnext.DataView(this.dataGroup.getDataSet(), {filter: function (item) {return (item[f.column] == f.value);}}).get();
      dataPoints = this.dataGroup._getDataPoints(dataView);

      this.dataPoints[index] = dataPoints;
    }

    return dataPoints;
  };



  /**
   * Set a callback function when the filter is fully loaded.
   *
   * @param {function} callback
   */
  Filter.prototype.setOnLoadCallback = function(callback) {
    this.onLoadCallback = callback;
  };


  /**
   * Add a value to the list with available values for this filter
   * No double entries will be created.
   * @param {number} index
   */
  Filter.prototype.selectValue = function(index) {
    if (index >= this.values.length)
      throw new Error('Index out of range');

    this.index = index;
    this.value = this.values[index];
  };

  /**
   * Load all filtered rows in the background one by one
   * Start this method without providing an index!
   *
   * @param {number} [index=0]
   */
  Filter.prototype.loadInBackground = function(index) {
    if (index === undefined)
      index = 0;

    var frame = this.graph.frame;

    if (index < this.values.length) {
      // create a progress box
      if (frame.progress === undefined) {
        frame.progress = document.createElement('DIV');
        frame.progress.style.position = 'absolute';
        frame.progress.style.color = 'gray';
        frame.appendChild(frame.progress);
      }
      var progress = this.getLoadedProgress();
      frame.progress.innerHTML = 'Loading animation... ' + progress + '%';
      // TODO: this is no nice solution...
      frame.progress.style.bottom = 60 + 'px'; // TODO: use height of slider
      frame.progress.style.left = 10 + 'px';

      var me = this;
      setTimeout(function() {me.loadInBackground(index+1);}, 10);
      this.loaded = false;
    }
    else {
      this.loaded = true;

      // remove the progress box
      if (frame.progress !== undefined) {
        frame.removeChild(frame.progress);
        frame.progress = undefined;
      }

      if (this.onLoadCallback)
        this.onLoadCallback();
    }
  };

  /**
   * Creates a container for all data of one specific 3D-graph.
   *
   * On construction, the container is totally empty; the data
   * needs to be initialized with method initializeData().
   * Failure to do so will result in the following exception begin thrown
   * on instantiation of Graph3D:
   *
   *     Error: Array, DataSet, or DataView expected
   *
   * @constructor DataGroup
   */
  function DataGroup() {
    this.dataTable = null;  // The original data table
  }


  /**
   * Initializes the instance from the passed data.
   *
   * Calculates minimum and maximum values and column index values.
   *
   * The graph3d instance is used internally to access the settings for
   * the given instance.
   * TODO: Pass settings only instead.
   *
   * @param {vis.Graph3d}  graph3d Reference to the calling Graph3D instance.
   * @param {Array | DataSet | DataView} rawData The data containing the items for
   *                                             the Graph.
   * @param {number}   style   Style Number
   * @returns {Array.<Object>}
   */
  DataGroup.prototype.initializeData = function(graph3d, rawData, style) {
    if (rawData === undefined) return;

    if (Array.isArray(rawData)) {
      rawData = new esnext.DataSet(rawData);
    }

    var data;
    if (rawData instanceof esnext.DataSet || rawData instanceof esnext.DataView) {
      data = rawData.get();
    }
    else {
      throw new Error('Array, DataSet, or DataView expected');
    }

    if (data.length == 0) return;

    this.style = style;

    // unsubscribe from the dataTable
    if (this.dataSet) {
      this.dataSet.off('*', this._onChange);
    }

    this.dataSet = rawData;
    this.dataTable = data;

    // subscribe to changes in the dataset
    var me = this;
    this._onChange = function () {
      graph3d.setData(me.dataSet);
    };
    this.dataSet.on('*', this._onChange);

    // determine the location of x,y,z,value,filter columns
    this.colX = 'x';
    this.colY = 'y';
    this.colZ = 'z';


    var withBars = graph3d.hasBars(style);

    // determine barWidth from data
    if (withBars) {
      if (graph3d.defaultXBarWidth !== undefined) {
        this.xBarWidth = graph3d.defaultXBarWidth;
      }
      else {
        this.xBarWidth = this.getSmallestDifference(data, this.colX) || 1;
      }

      if (graph3d.defaultYBarWidth !== undefined) {
        this.yBarWidth = graph3d.defaultYBarWidth;
      }
      else {
        this.yBarWidth = this.getSmallestDifference(data, this.colY) || 1;
      }
    }

    // calculate minima and maxima
    this._initializeRange(data, this.colX, graph3d, withBars);
    this._initializeRange(data, this.colY, graph3d, withBars);
    this._initializeRange(data, this.colZ, graph3d, false);

    if (data[0].hasOwnProperty('style')) {
      this.colValue = 'style';
      var valueRange = this.getColumnRange(data, this.colValue);
      this._setRangeDefaults(valueRange, graph3d.defaultValueMin, graph3d.defaultValueMax);
      this.valueRange = valueRange;
    }
    else {
      this.colValue = 'z';
      this.valueRange = this.zRange;
    }

    // Initialize data filter if a filter column is provided
    var table = this.getDataTable();
    if (table[0].hasOwnProperty('filter')) {
      if (this.dataFilter === undefined) {
        this.dataFilter = new Filter(this, 'filter', graph3d);
        this.dataFilter.setOnLoadCallback(function() { graph3d.redraw(); });
      }
    }


    var dataPoints;
    if (this.dataFilter) {
      // apply filtering
      dataPoints = this.dataFilter._getDataPoints();
    }
    else {
      // no filtering. load all data
      dataPoints = this._getDataPoints(this.getDataTable());
    }
    return dataPoints;
  };


  /**
   * Collect the range settings for the given data column.
   *
   * This internal method is intended to make the range 
   * initalization more generic.
   *
   * TODO: if/when combined settings per axis defined, get rid of this.
   *
   * @private
   *
   * @param {'x'|'y'|'z'} column  The data column to process
   * @param {vis.Graph3d} graph3d Reference to the calling Graph3D instance;
   *                              required for access to settings
   * @returns {Object}
   */
  DataGroup.prototype._collectRangeSettings = function(column, graph3d) {
    var index = ['x', 'y', 'z'].indexOf(column);

    if (index == -1) {
      throw new Error('Column \'' + column + '\' invalid');
    }

    var upper = column.toUpperCase();

    return {
      barWidth   : this[column + 'BarWidth'],
      min        : graph3d['default' + upper + 'Min'],
      max        : graph3d['default' + upper + 'Max'],
      step       : graph3d['default' + upper + 'Step'],
      range_label: column + 'Range', // Name of instance field to write to
      step_label : column + 'Step'   // Name of instance field to write to
    };
  };


  /**
   * Initializes the settings per given column.
   *
   * TODO: if/when combined settings per axis defined, rewrite this.
   *
   * @private
   *
   * @param {DataSet | DataView} data     The data containing the items for the Graph
   * @param {'x'|'y'|'z'}        column   The data column to process
   * @param {vis.Graph3d}        graph3d  Reference to the calling Graph3D instance;
   *                                      required for access to settings
   * @param {boolean}            withBars True if initializing for bar graph
   */
  DataGroup.prototype._initializeRange = function(data, column, graph3d, withBars) {
    var NUMSTEPS = 5;
    var settings = this._collectRangeSettings(column, graph3d);

    var range = this.getColumnRange(data, column);
    if (withBars && column != 'z') {          // Safeguard for 'z'; it doesn't have a bar width
      range.expand(settings.barWidth / 2);
    }

    this._setRangeDefaults(range, settings.min, settings.max);
    this[settings.range_label] = range;
    this[settings.step_label ] = (settings.step !== undefined) ? settings.step : range.range()/NUMSTEPS;
  };


  /**
   * Creates a list with all the different values in the data for the given column.
   *
   * If no data passed, use the internal data of this instance.
   *
   * @param {'x'|'y'|'z'}                column The data column to process
   * @param {DataSet|DataView|undefined} data   The data containing the items for the Graph
   *
   * @returns {Array} All distinct values in the given column data, sorted ascending.
   */
  DataGroup.prototype.getDistinctValues = function(column, data) {
    if (data === undefined) {
      data = this.dataTable;
    }

    var values = [];

    for (var i = 0; i < data.length; i++) {
      var value = data[i][column] || 0;
      if (values.indexOf(value) === -1) {
        values.push(value);
      }
    }

    return values.sort(function(a,b) { return a - b; });
  };


  /**
   * Determine the smallest difference between the values for given
   * column in the passed data set.
   *
   * @param {DataSet|DataView|undefined} data   The data containing the items for the Graph
   * @param {'x'|'y'|'z'}                column The data column to process
   *
   * @returns {number|null} Smallest difference value or
   *                        null, if it can't be determined.
   */
  DataGroup.prototype.getSmallestDifference = function(data, column) {
    var values = this.getDistinctValues(data, column);

    // Get all the distinct diffs
    // Array values is assumed to be sorted here
    var smallest_diff = null;

    for (var i = 1; i < values.length; i++) {
      var diff = values[i] - values[i - 1];

      if (smallest_diff == null || smallest_diff > diff ) {
        smallest_diff = diff;
      }
    }

    return smallest_diff;
  };


  /**
   * Get the absolute min/max values for the passed data column.
   *
   * @param {DataSet|DataView|undefined} data   The data containing the items for the Graph
   * @param {'x'|'y'|'z'}                column The data column to process
   *
   * @returns {Range} A Range instance with min/max members properly set.
   */
  DataGroup.prototype.getColumnRange = function(data, column) {
    var range  = new Range_1();

    // Adjust the range so that it covers all values in the passed data elements.
    for (var i = 0; i < data.length; i++) {
      var item = data[i][column];
      range.adjust(item);
    }

    return range;
  };


  /**
   * Determines the number of rows in the current data.
   *
   * @returns {number}
   */
  DataGroup.prototype.getNumberOfRows = function() {
    return this.dataTable.length;
  };


  /**
   * Set default values for range
   *
   * The default values override the range values, if defined.
   *
   * Because it's possible that only defaultMin or defaultMax is set, it's better
   * to pass in a range already set with the min/max set from the data. Otherwise,
   * it's quite hard to process the min/max properly.
   *
   * @param {vis.Range} range
   * @param {number} [defaultMin=range.min]
   * @param {number} [defaultMax=range.max]
   * @private
   */
  DataGroup.prototype._setRangeDefaults = function (range, defaultMin, defaultMax) {
    if (defaultMin !== undefined) {
      range.min = defaultMin;
    }

    if (defaultMax !== undefined) {
      range.max = defaultMax;
    }

    // This is the original way that the default min/max values were adjusted.
    // TODO: Perhaps it's better if an error is thrown if the values do not agree.
    //       But this will change the behaviour.
    if (range.max <= range.min) range.max = range.min + 1;
  };


  DataGroup.prototype.getDataTable = function() {
    return this.dataTable;
  };


  DataGroup.prototype.getDataSet = function() {
    return this.dataSet;
  };


  /**
   * Return all data values as a list of Point3d objects
   * @param {Array.<Object>} data
   * @returns {Array.<Object>}
   */
  DataGroup.prototype.getDataPoints = function(data) {
    var dataPoints = [];

    for (var i = 0; i < data.length; i++) {
      var point = new Point3d_1();
      point.x = data[i][this.colX] || 0;
      point.y = data[i][this.colY] || 0;
      point.z = data[i][this.colZ] || 0;
      point.data = data[i];
      point.value = data[i][this.colValue] || 0;

      var obj = {};
      obj.point = point;
      obj.bottom = new Point3d_1(point.x, point.y, this.zRange.min);
      obj.trans = undefined;
      obj.screen = undefined;

      dataPoints.push(obj);
    }

    return dataPoints;
  };


  /**
   * Copy all values from the data table to a matrix.
   *
   * The provided values are supposed to form a grid of (x,y) positions.
   * @param {Array.<Object>} data
   * @returns {Array.<Object>}
   * @private
   */
  DataGroup.prototype.initDataAsMatrix = function(data) {
    // TODO: store the created matrix dataPoints in the filters instead of
    //       reloading each time.
    var x, y, i, obj;

    // create two lists with all present x and y values
    var dataX = this.getDistinctValues(this.colX, data);
    var dataY = this.getDistinctValues(this.colY, data);

    var dataPoints = this.getDataPoints(data);

    // create a grid, a 2d matrix, with all values.
    var dataMatrix = [];   // temporary data matrix
    for (i = 0; i < dataPoints.length; i++) {
      obj = dataPoints[i];

      // TODO: implement Array().indexOf() for Internet Explorer
      var xIndex = dataX.indexOf(obj.point.x);
      var yIndex = dataY.indexOf(obj.point.y);

      if (dataMatrix[xIndex] === undefined) {
        dataMatrix[xIndex] = [];
      }

      dataMatrix[xIndex][yIndex] = obj;
    }

    // fill in the pointers to the neighbors.
    for (x = 0; x < dataMatrix.length; x++) {
      for (y = 0; y < dataMatrix[x].length; y++) {
        if (dataMatrix[x][y]) {
          dataMatrix[x][y].pointRight = (x < dataMatrix.length-1) ? dataMatrix[x+1][y] : undefined;
          dataMatrix[x][y].pointTop   = (y < dataMatrix[x].length-1) ? dataMatrix[x][y+1] : undefined;
          dataMatrix[x][y].pointCross =
            (x < dataMatrix.length-1 && y < dataMatrix[x].length-1) ?
              dataMatrix[x+1][y+1] :
              undefined;
        }
      }
    }

    return dataPoints;
  };


  /**
   * Return common information, if present
   *
   * @returns {string}
   */
  DataGroup.prototype.getInfo = function() {
    var dataFilter = this.dataFilter;
    if (!dataFilter) return undefined;

    return dataFilter.getLabel() + ': ' + dataFilter.getSelectedValue();
  };


  /**
   * Reload the data
   */
  DataGroup.prototype.reload = function() {
    if (this.dataTable) {
      this.setData(this.dataTable);
    }
  };


  /**
   * Filter the data based on the current filter
   *
   * @param   {Array} data
   * @returns {Array} dataPoints Array with point objects which can be drawn on
   *                             screen
   */
  DataGroup.prototype._getDataPoints = function (data) {
    var dataPoints = [];

    if (this.style === STYLE.GRID || this.style === STYLE.SURFACE) {
      dataPoints = this.initDataAsMatrix(data);
    }
    else {  // 'dot', 'dot-line', etc.
      dataPoints = this.getDataPoints(data);

      if (this.style === STYLE.LINE) {
        // Add next member points for line drawing
        for (var i = 0; i < dataPoints.length; i++) {
          if (i > 0) {
            dataPoints[i - 1].pointNext = dataPoints[i];
          }
        }
      }
    }

    return dataPoints;
  };

  /// enumerate the available styles
  Graph3d.STYLE = STYLE;


  /**
   * Following label is used in the settings to describe values which should be
   * determined by the code while running, from the current data and graph style.
   *
   * Using 'undefined' directly achieves the same thing, but this is more
   * descriptive by describing the intent.
   */
  var autoByDefault = undefined;

  /**
   * Default values for option settings.
   *
   * These are the values used when a Graph3d instance is initialized without
   * custom settings.
   *
   * If a field is not in this list, a default value of 'autoByDefault' is assumed,
   * which is just an alias for 'undefined'.
   */
  Graph3d.DEFAULTS = {
    width            : '400px',
    height           : '400px',
    filterLabel      : 'time',
    legendLabel      : 'value',
    xLabel           : 'x',
    yLabel           : 'y',
    zLabel           : 'z',
    xValueLabel      : function(v) { return v; },
    yValueLabel      : function(v) { return v; },
    zValueLabel      : function(v) { return v; },
    showXAxis        : true,
    showYAxis        : true,
    showZAxis        : true,
    showGrayBottom   : false,
    showGrid         : true,
    showPerspective  : true,
    showShadow       : false,
    showSurfaceGrid  : true,
    keepAspectRatio  : true,
    rotateAxisLabels : true,
    verticalRatio    : 0.5,    // 0.1 to 1.0, where 1.0 results in a 'cube'

    dotSizeRatio      : 0.02,  // size of the dots as a fraction of the graph width
    dotSizeMinFraction: 0.5,	 // size of min-value dot as a fraction of dotSizeRatio	
    dotSizeMaxFraction: 2.5,	 // size of max-value dot as a fraction of dotSizeRatio	

    showAnimationControls: autoByDefault,
    animationInterval    : 1000, // milliseconds
    animationPreload     : false,
    animationAutoStart   : autoByDefault,

    axisFontSize     : 14,
    axisFontType     : 'arial',
    axisColor        : '#4D4D4D',
    gridColor        : '#D3D3D3',
    xCenter          : '55%',
    yCenter          : '50%',

    style            : Graph3d.STYLE.DOT,
    tooltip          : false,
    tooltipDelay     : 300, // milliseconds

    tooltipStyle     : {
        content : {
          padding       : '10px',
          border        : '1px solid #4d4d4d',
          color         : '#1a1a1a',
          background    : 'rgba(255,255,255,0.7)',
          borderRadius  : '2px',
          boxShadow     : '5px 5px 10px rgba(128,128,128,0.5)'
        },
        line    : {
          height        : '40px',
          width         : '0',
          borderLeft    : '1px solid #4d4d4d',
          pointerEvents : 'none'
        },
        dot     : {
          height        : '0',
          width         : '0',
          border        : '5px solid #4d4d4d',
          borderRadius  : '5px',
          pointerEvents : 'none'
        }
    },

    dataColor        : {
      fill       : '#7DC1FF',
      stroke     : '#3267D2',
      strokeWidth: 1 // px
    },

    surfaceColors: autoByDefault,
    colormap : autoByDefault,

    cameraPosition   : {
       horizontal: 1.0,
       vertical  : 0.5,
       distance  : 1.7
    },
    
    zoomable  : true,
    ctrlToZoom: false,

  /*
    The following fields are 'auto by default', see above.
   */
    showLegend       : autoByDefault, // determined by graph style
    backgroundColor  : autoByDefault,

    xBarWidth : autoByDefault,
    yBarWidth : autoByDefault,
    valueMin  : autoByDefault,
    valueMax  : autoByDefault,
    xMin      : autoByDefault,
    xMax      : autoByDefault,
    xStep     : autoByDefault,
    yMin      : autoByDefault,
    yMax      : autoByDefault,
    yStep     : autoByDefault,
    zMin      : autoByDefault,
    zMax      : autoByDefault,
    zStep     : autoByDefault
  };


  // -----------------------------------------------------------------------------
  // Class Graph3d
  // -----------------------------------------------------------------------------


  /**
   * Graph3d displays data in 3d.
   *
   * Graph3d is developed in javascript as a Google Visualization Chart.
   *
   * @constructor Graph3d
   * @param {Element} container   The DOM element in which the Graph3d will
   *                              be created. Normally a div element.
   * @param {DataSet | DataView | Array} [data]
   * @param {Object} [options]
   */
  function Graph3d(container, data, options) {
    if (!(this instanceof Graph3d)) {
      throw new SyntaxError('Constructor must be called with the new operator');
    }

    // create variables and set default values
    this.containerElement = container;

    this.dataGroup = new DataGroup();
    this.dataPoints = null; // The table with point objects

    // create a frame and canvas
    this.create();

    setDefaults(Graph3d.DEFAULTS, this);

    // the column indexes
    this.colX = undefined;
    this.colY = undefined;
    this.colZ = undefined;
    this.colValue = undefined;

    // TODO: customize axis range

    // apply options (also when undefined)
    this.setOptions(options);

    // apply data
    this.setData(data);
  }

  // Extend Graph3d with an Emitter mixin
  Emitter__default['default'](Graph3d.prototype);

  /**
   * Calculate the scaling values, dependent on the range in x, y, and z direction
   */
  Graph3d.prototype._setScale = function() {
    this.scale = new Point3d_1(
      1 / this.xRange.range(),
      1 / this.yRange.range(),
      1 / this.zRange.range()
    );

    // keep aspect ration between x and y scale if desired
    if (this.keepAspectRatio) {
      if (this.scale.x < this.scale.y) {
        //noinspection JSSuspiciousNameCombination
        this.scale.y = this.scale.x;
      }
      else {
        //noinspection JSSuspiciousNameCombination
        this.scale.x = this.scale.y;
      }
    }

    // scale the vertical axis
    this.scale.z *= this.verticalRatio;
    // TODO: can this be automated? verticalRatio?

    // determine scale for (optional) value
    if (this.valueRange !== undefined) {
      this.scale.value = 1 / this.valueRange.range();
    }

    // position the camera arm
    var xCenter = this.xRange.center() * this.scale.x;
    var yCenter = this.yRange.center() * this.scale.y;
    var zCenter = this.zRange.center() * this.scale.z;
    this.camera.setArmLocation(xCenter, yCenter, zCenter);
  };


  /**
   * Convert a 3D location to a 2D location on screen
   * Source: ttp://en.wikipedia.org/wiki/3D_projection
   *
   * @param   {Point3d} point3d  A 3D point with parameters x, y, z
   * @returns {Point2d} point2d  A 2D point with parameters x, y
   */
  Graph3d.prototype._convert3Dto2D = function(point3d) {
    var translation = this._convertPointToTranslation(point3d);
    return this._convertTranslationToScreen(translation);
  };

  /**
   * Convert a 3D location its translation seen from the camera
   * Source: http://en.wikipedia.org/wiki/3D_projection
   *
   * @param   {Point3d} point3d     A 3D point with parameters x, y, z
   * @returns {Point3d} translation A 3D point with parameters x, y, z This is
   *                                the translation of the point, seen from the
   *                                camera.
   */
  Graph3d.prototype._convertPointToTranslation = function(point3d) {
    var cameraLocation = this.camera.getCameraLocation(),
      cameraRotation = this.camera.getCameraRotation(),
      ax = point3d.x * this.scale.x,
      ay = point3d.y * this.scale.y,
      az = point3d.z * this.scale.z,

      cx = cameraLocation.x,
      cy = cameraLocation.y,
      cz = cameraLocation.z,

    // calculate angles
      sinTx = Math.sin(cameraRotation.x),
      cosTx = Math.cos(cameraRotation.x),
      sinTy = Math.sin(cameraRotation.y),
      cosTy = Math.cos(cameraRotation.y),
      sinTz = Math.sin(cameraRotation.z),
      cosTz = Math.cos(cameraRotation.z),

    // calculate translation
      dx = cosTy * (sinTz * (ay - cy) + cosTz * (ax - cx)) - sinTy * (az - cz),
      dy = sinTx * (cosTy * (az - cz) + sinTy * (sinTz * (ay - cy) + cosTz * (ax - cx))) + cosTx * (cosTz * (ay - cy) - sinTz * (ax-cx)),
      dz = cosTx * (cosTy * (az - cz) + sinTy * (sinTz * (ay - cy) + cosTz * (ax - cx))) - sinTx * (cosTz * (ay - cy) - sinTz * (ax-cx));

    return new Point3d_1(dx, dy, dz);
  };

  /**
   * Convert a translation point to a point on the screen
   *
   * @param   {Point3d} translation A 3D point with parameters x, y, z This is
   *                                the translation of the point, seen from the
   *                                camera.
   * @returns {Point2d} point2d     A 2D point with parameters x, y
   */
  Graph3d.prototype._convertTranslationToScreen = function(translation) {
    var ex = this.eye.x,
      ey = this.eye.y,
      ez = this.eye.z,
      dx = translation.x,
      dy = translation.y,
      dz = translation.z;

    // calculate position on screen from translation
    var bx;
    var by;
    if (this.showPerspective) {
      bx = (dx - ex) * (ez / dz);
      by = (dy - ey) * (ez / dz);
    }
    else {
      bx = dx * -(ez / this.camera.getArmLength());
      by = dy * -(ez / this.camera.getArmLength());
    }

    // shift and scale the point to the center of the screen
    // use the width of the graph to scale both horizontally and vertically.
    return new Point2d_1(
      this.currentXCenter + bx * this.frame.canvas.clientWidth,
      this.currentYCenter - by * this.frame.canvas.clientWidth);
  };


  /**
   * Calculate the translations and screen positions of all points
   *
   * @param {Array.<Point3d>} points
   * @private
   */
  Graph3d.prototype._calcTranslations = function(points) {
    for (var i = 0; i < points.length; i++) {
      var point    = points[i];
      point.trans  = this._convertPointToTranslation(point.point);
      point.screen = this._convertTranslationToScreen(point.trans);

      // calculate the translation of the point at the bottom (needed for sorting)
      var transBottom = this._convertPointToTranslation(point.bottom);
      point.dist = this.showPerspective ? transBottom.length() : -transBottom.z;
    }

    // sort the points on depth of their (x,y) position (not on z)
    var sortDepth = function (a, b) {
      return b.dist - a.dist;
    };
    points.sort(sortDepth);
  };


  /**
   * Transfer min/max values to the Graph3d instance.
   */
  Graph3d.prototype._initializeRanges = function() {
    // TODO: later on, all min/maxes of all datagroups will be combined here
    var dg = this.dataGroup;
    this.xRange = dg.xRange;
    this.yRange = dg.yRange;
    this.zRange = dg.zRange;
    this.valueRange = dg.valueRange;

    // Values currently needed but which need to be sorted out for
    // the multiple graph case.
    this.xStep = dg.xStep;
    this.yStep = dg.yStep;
    this.zStep = dg.zStep;
    this.xBarWidth = dg.xBarWidth;
    this.yBarWidth = dg.yBarWidth;
    this.colX = dg.colX;
    this.colY = dg.colY;
    this.colZ = dg.colZ;
    this.colValue = dg.colValue;

    
    // set the scale dependent on the ranges.
    this._setScale();
  };


  /**
   * Return all data values as a list of Point3d objects
   *
   * @param {vis.DataSet} data
   * @returns {Array.<Object>}
   */
  Graph3d.prototype.getDataPoints = function(data) {
    var dataPoints = [];

    for (var i = 0; i < data.length; i++) {
      var point = new Point3d_1();
      point.x = data[i][this.colX] || 0;
      point.y = data[i][this.colY] || 0;
      point.z = data[i][this.colZ] || 0;
      point.data = data[i];
      point.value = data[i][this.colValue] || 0;

      var obj = {};
      obj.point = point;
      obj.bottom = new Point3d_1(point.x, point.y, this.zRange.min);
      obj.trans = undefined;
      obj.screen = undefined;

      dataPoints.push(obj);
    }

    return dataPoints;
  };


  /**
   * Filter the data based on the current filter
   *
   * @param   {Array} data
   * @returns {Array} dataPoints Array with point objects which can be drawn on
   *                             screen
   */
  Graph3d.prototype._getDataPoints = function (data) {
    // TODO: store the created matrix dataPoints in the filters instead of
    //       reloading each time.
    var x, y, i, obj;

    var dataPoints = [];

    if (this.style === Graph3d.STYLE.GRID ||
      this.style === Graph3d.STYLE.SURFACE) {
      // copy all values from the data table to a matrix
      // the provided values are supposed to form a grid of (x,y) positions

      // create two lists with all present x and y values
      var dataX = this.dataGroup.getDistinctValues(this.colX, data);
      var dataY = this.dataGroup.getDistinctValues(this.colY, data);

      dataPoints = this.getDataPoints(data);

      // create a grid, a 2d matrix, with all values.
      var dataMatrix = [];   // temporary data matrix
      for (i = 0; i < dataPoints.length; i++) {
        obj = dataPoints[i];

        // TODO: implement Array().indexOf() for Internet Explorer
        var xIndex = dataX.indexOf(obj.point.x);
        var yIndex = dataY.indexOf(obj.point.y);

        if (dataMatrix[xIndex] === undefined) {
          dataMatrix[xIndex] = [];
        }

        dataMatrix[xIndex][yIndex] = obj;
      }

      // fill in the pointers to the neighbors.
      for (x = 0; x < dataMatrix.length; x++) {
        for (y = 0; y < dataMatrix[x].length; y++) {
          if (dataMatrix[x][y]) {
            dataMatrix[x][y].pointRight = (x < dataMatrix.length-1) ? dataMatrix[x+1][y] : undefined;
            dataMatrix[x][y].pointTop   = (y < dataMatrix[x].length-1) ? dataMatrix[x][y+1] : undefined;
            dataMatrix[x][y].pointCross =
              (x < dataMatrix.length-1 && y < dataMatrix[x].length-1) ?
                dataMatrix[x+1][y+1] :
                undefined;
          }
        }
      }
    }
    else {  // 'dot', 'dot-line', etc.
      dataPoints = this.getDataPoints(data);

      if (this.style === Graph3d.STYLE.LINE) {
        // Add next member points for line drawing
        for (i = 0; i < dataPoints.length; i++) {
          if (i > 0) {
            dataPoints[i - 1].pointNext = dataPoints[i];
          }
        }
      }
    }

    return dataPoints;
  };


  /**
   * Create the main frame for the Graph3d.
   *
   * This function is executed once when a Graph3d object is created. The frame
   * contains a canvas, and this canvas contains all objects like the axis and
   * nodes.
   */
  Graph3d.prototype.create = function () {
    // remove all elements from the container element.
    while (this.containerElement.hasChildNodes()) {
      this.containerElement.removeChild(this.containerElement.firstChild);
    }

    this.frame = document.createElement('div');
    this.frame.style.position = 'relative';
    this.frame.style.overflow = 'hidden';

    // create the graph canvas (HTML canvas element)
    this.frame.canvas = document.createElement( 'canvas' );
    this.frame.canvas.style.position = 'relative';
    this.frame.appendChild(this.frame.canvas);
    //if (!this.frame.canvas.getContext) {
    {
      var noCanvas = document.createElement( 'DIV' );
      noCanvas.style.color = 'red';
      noCanvas.style.fontWeight =  'bold' ;
      noCanvas.style.padding =  '10px';
      noCanvas.innerHTML =  'Error: your browser does not support HTML canvas';
      this.frame.canvas.appendChild(noCanvas);
    }

    this.frame.filter = document.createElement( 'div' );
    this.frame.filter.style.position = 'absolute';
    this.frame.filter.style.bottom = '0px';
    this.frame.filter.style.left = '0px';
    this.frame.filter.style.width = '100%';
    this.frame.appendChild(this.frame.filter);

    // add event listeners to handle moving and zooming the contents
    var me = this;
    var onmousedown = function (event) {me._onMouseDown(event);};
    var ontouchstart = function (event) {me._onTouchStart(event);};
    var onmousewheel = function (event) {me._onWheel(event);};
    var ontooltip = function (event) {me._onTooltip(event);};
    var onclick = function(event) {me._onClick(event);};
    // TODO: these events are never cleaned up... can give a 'memory leakage'

    util.addEventListener(this.frame.canvas, 'mousedown', onmousedown);
    util.addEventListener(this.frame.canvas, 'touchstart', ontouchstart);
    util.addEventListener(this.frame.canvas, 'mousewheel', onmousewheel);
    util.addEventListener(this.frame.canvas, 'mousemove', ontooltip);
    util.addEventListener(this.frame.canvas, 'click', onclick);

    // add the new graph to the container element
    this.containerElement.appendChild(this.frame);
  };


  /**
   * Set a new size for the graph
   *
   * @param {number} width
   * @param {number} height
   * @private
   */
  Graph3d.prototype._setSize = function(width, height) {
    this.frame.style.width = width;
    this.frame.style.height = height;

    this._resizeCanvas();
  };


  /**
   * Resize the canvas to the current size of the frame
   */
  Graph3d.prototype._resizeCanvas = function() {
    this.frame.canvas.style.width = '100%';
    this.frame.canvas.style.height = '100%';

    this.frame.canvas.width = this.frame.canvas.clientWidth;
    this.frame.canvas.height = this.frame.canvas.clientHeight;

    // adjust with for margin
    this.frame.filter.style.width = (this.frame.canvas.clientWidth - 2 * 10) + 'px';
  };


  /**
   * Start playing the animation, if requested and filter present. Only applicable
   * when animation data is available.
   */
  Graph3d.prototype.animationStart = function() {
    // start animation when option is true
    if (!this.animationAutoStart || !this.dataGroup.dataFilter) return;

    if (!this.frame.filter || !this.frame.filter.slider)
      throw new Error('No animation available');

    this.frame.filter.slider.play();
  };


  /**
   * Stop animation
   */
  Graph3d.prototype.animationStop = function() {
    if (!this.frame.filter || !this.frame.filter.slider) return;

    this.frame.filter.slider.stop();
  };


  /**
   * Resize the center position based on the current values in this.xCenter
   * and this.yCenter (which are strings with a percentage or a value
   * in pixels). The center positions are the variables this.currentXCenter
   * and this.currentYCenter
   */
  Graph3d.prototype._resizeCenter = function() {
    // calculate the horizontal center position
    if (this.xCenter.charAt(this.xCenter.length-1) === '%') {
      this.currentXCenter =
        parseFloat(this.xCenter) / 100 *
          this.frame.canvas.clientWidth;
    }
    else {
      this.currentXCenter = parseFloat(this.xCenter); // supposed to be in px
    }

    // calculate the vertical center position
    if (this.yCenter.charAt(this.yCenter.length-1) === '%') {
      this.currentYCenter =
        parseFloat(this.yCenter) / 100 *
          (this.frame.canvas.clientHeight - this.frame.filter.clientHeight);
    }
    else {
      this.currentYCenter = parseFloat(this.yCenter); // supposed to be in px
    }
  };



  /**
   * Retrieve the current camera rotation
   *
   * @returns {object} An object with parameters horizontal, vertical, and
   *                   distance
   */
  Graph3d.prototype.getCameraPosition = function() {
    var pos = this.camera.getArmRotation();
    pos.distance = this.camera.getArmLength();
    return pos;
  };

  /**
   * Load data into the 3D Graph
   *
   * @param {vis.DataSet} data
   * @private
   */
  Graph3d.prototype._readData = function(data) {
    // read the data
    this.dataPoints = this.dataGroup.initializeData(this, data, this.style);

    this._initializeRanges();
    this._redrawFilter();
  };

  /**
   * Replace the dataset of the Graph3d
   *
   * @param {Array | DataSet | DataView} data
   */
  Graph3d.prototype.setData = function (data) {
    if (data === undefined || data === null) return;

    this._readData(data);
    this.redraw();
    this.animationStart();
  };

  /**
   * Update the options. Options will be merged with current options
   *
   * @param {Object} options
   */
  Graph3d.prototype.setOptions = function (options) {
    if (options === undefined) return;

    let errorFound = util.Validator.validate(options, allOptions);
    if (errorFound === true) {
      console.log(
        "%cErrors have been found in the supplied options object.",
        util.VALIDATOR_PRINT_STYLE
      );
    }

    this.animationStop();

    setOptions(options, this);
    this.setPointDrawingMethod();
    this._setSize(this.width, this.height);
    this.setAxisLabelMethod();

    this.setData(this.dataGroup.getDataTable());
    this.animationStart();
  };


  /**
   * Determine which point drawing method to use for the current graph style.
   */
  Graph3d.prototype.setPointDrawingMethod = function() {
    var method = undefined;

    switch (this.style) {
      case Graph3d.STYLE.BAR:
        method = this._redrawBarGraphPoint;
        break;
      case Graph3d.STYLE.BARCOLOR:
        method = this._redrawBarColorGraphPoint;
        break;
      case Graph3d.STYLE.BARSIZE:
        method = this._redrawBarSizeGraphPoint;
        break;
      case Graph3d.STYLE.DOT:
        method = this._redrawDotGraphPoint;
        break;
      case Graph3d.STYLE.DOTLINE:
        method = this._redrawDotLineGraphPoint;
        break;
      case Graph3d.STYLE.DOTCOLOR:
        method = this._redrawDotColorGraphPoint;
        break;
      case Graph3d.STYLE.DOTSIZE:
        method = this._redrawDotSizeGraphPoint;
        break;
      case Graph3d.STYLE.SURFACE:
        method = this._redrawSurfaceGraphPoint;
        break;
      case Graph3d.STYLE.GRID:
        method = this._redrawGridGraphPoint;
        break;
      case Graph3d.STYLE.LINE:
        method = this._redrawLineGraphPoint;
        break;
      default:
        throw new Error('Can not determine point drawing method '
                      + 'for graph style \'' + this.style + '\'');
    }

    this._pointDrawingMethod = method;
  };

  /**
   * Determine which functions to use to draw axis labels.
   */
  Graph3d.prototype.setAxisLabelMethod = function () {
    if (this.rotateAxisLabels) {
      this._drawAxisLabelX = this.drawAxisLabelXRotate;
      this._drawAxisLabelY = this.drawAxisLabelYRotate;
      this._drawAxisLabelZ = this.drawAxisLabelZRotate;
    } else {
      this._drawAxisLabelX = this.drawAxisLabelX;
      this._drawAxisLabelY = this.drawAxisLabelY;
      this._drawAxisLabelZ = this.drawAxisLabelZ;
    }
  };

  /**
   * Redraw the Graph.
   */
  Graph3d.prototype.redraw = function() {
    if (this.dataPoints === undefined) {
      throw new Error('Graph data not initialized');
    }

    this._resizeCanvas();
    this._resizeCenter();
    this._redrawSlider();
    this._redrawClear();
    this._redrawAxis();

    this._redrawDataGraph();

    this._redrawInfo();
    this._redrawLegend();
  };


  /**
   * Get drawing context without exposing canvas
   *
   * @returns {CanvasRenderingContext2D}
   * @private
   */
  Graph3d.prototype._getContext = function() {
    var canvas = this.frame.canvas;
    var ctx = canvas.getContext('2d');

    ctx.lineJoin = 'round';
    ctx.lineCap  = 'round';

    return ctx;
  };


  /**
   * Clear the canvas before redrawing
   */
  Graph3d.prototype._redrawClear = function() {
    var canvas = this.frame.canvas;
    var ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };


  Graph3d.prototype._dotSize = function() {
    return this.frame.clientWidth * this.dotSizeRatio;
  };


  /**
   * Get legend width
   *
   * @returns {*}
   * @private
   */
  Graph3d.prototype._getLegendWidth = function() {
    var width;

    if (this.style === Graph3d.STYLE.DOTSIZE) {
      var dotSize = this._dotSize();
      //width =  dotSize / 2 + dotSize * 2;
      width =  dotSize * this.dotSizeMaxFraction;
    } else if (this.style === Graph3d.STYLE.BARSIZE) {
      width = this.xBarWidth ;
    } else {
      width = 20;
    }
    return width;
  };


  /**
   * Redraw the legend based on size, dot color, or surface height
   */
  Graph3d.prototype._redrawLegend = function() {

    //Return without drawing anything, if no legend is specified
    if (this.showLegend !== true) {
      return;
    }

    // Do not draw legend when graph style does not support
    if (this.style === Graph3d.STYLE.LINE
     || this.style === Graph3d.STYLE.BARSIZE //TODO add legend support for BARSIZE
    ){
      return;
    }

    // Legend types - size and color. Determine if size legend.
    var isSizeLegend = (this.style === Graph3d.STYLE.BARSIZE
                     || this.style === Graph3d.STYLE.DOTSIZE) ;

    // Legend is either tracking z values or style values. This flag if false means use z values.
    var isValueLegend = (this.style === Graph3d.STYLE.DOTSIZE
                    || this.style === Graph3d.STYLE.DOTCOLOR
                    || this.style === Graph3d.STYLE.SURFACE
                    || this.style === Graph3d.STYLE.BARCOLOR);

    var height = Math.max(this.frame.clientHeight * 0.25, 100);
    var top    = this.margin;
    var width  = this._getLegendWidth() ; // px - overwritten by size legend
    var right  = this.frame.clientWidth - this.margin;
    var left   = right - width;
    var bottom = top + height;

    var ctx = this._getContext();
    ctx.lineWidth = 1;
    ctx.font = '14px arial'; // TODO: put in options

    if (isSizeLegend === false) {
      // draw the color bar
      var ymin = 0;
      var ymax = height; // Todo: make height customizable
      var y;

      for (y = ymin; y < ymax; y++) {
        // Need (1 - x) because y runs from top to bottom:
        const f = 1 - (y - ymin) / (ymax - ymin);
        const color = this._colormap(f, 1);

        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(left, top + y);
        ctx.lineTo(right, top + y);
        ctx.stroke();
      }
      ctx.strokeStyle =  this.axisColor;
      ctx.strokeRect(left, top, width, height);

    } else {

      // draw the size legend box
      var  widthMin;
      if (this.style === Graph3d.STYLE.DOTSIZE) {
        // Get the proportion to max and min right
        widthMin = width * (this.dotSizeMinFraction / this.dotSizeMaxFraction);
      } else if (this.style === Graph3d.STYLE.BARSIZE) ;
      ctx.strokeStyle =  this.axisColor;
      ctx.fillStyle =  this.dataColor.fill;
      ctx.beginPath();
      ctx.moveTo(left, top);
      ctx.lineTo(right, top);
      ctx.lineTo(left + widthMin, bottom);
      ctx.lineTo(left, bottom);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }

    // print value text along the legend edge
    var gridLineLen = 5; // px

    var legendMin = isValueLegend ? this.valueRange.min :  this.zRange.min;
    var legendMax = isValueLegend ? this.valueRange.max :  this.zRange.max;
    var step = new StepNumber_1(legendMin, legendMax, (legendMax-legendMin)/5, true);
    step.start(true);

    var from;
    var to;
    while (!step.end()) {
      y = bottom - (step.getCurrent() - legendMin) / (legendMax - legendMin) * height;
      from  = new Point2d_1(left - gridLineLen, y);
      to    = new Point2d_1(left, y);
      this._line(ctx, from, to);

      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = this.axisColor;
      ctx.fillText(step.getCurrent(), left - 2 * gridLineLen, y);

      step.next();
    }

    ctx.textAlign = 'right';
    ctx.textBaseline = 'top';
    var label = this.legendLabel;
    ctx.fillText(label, right, bottom + this.margin);
  };


  /**
   * Redraw the filter
   */
  Graph3d.prototype._redrawFilter = function() {
    var dataFilter = this.dataGroup.dataFilter;
    var filter = this.frame.filter;
    filter.innerHTML = '';

    if (!dataFilter) {
      filter.slider = undefined;
      return;
    }

    var options = {
      'visible': this.showAnimationControls
    };
    var slider = new Slider(filter, options);
    filter.slider = slider;

    // TODO: css here is not nice here...
    filter.style.padding = '10px';
    //this.frame.filter.style.backgroundColor = '#EFEFEF';

    slider.setValues(dataFilter.values);
    slider.setPlayInterval(this.animationInterval);

    // create an event handler
    var me = this;
    var onchange = function () {
      var dataFilter = me.dataGroup.dataFilter;
      var index = slider.getIndex();

      dataFilter.selectValue(index);
      me.dataPoints = dataFilter._getDataPoints();

      me.redraw();
    };

    slider.setOnChangeCallback(onchange);
  };


  /**
   * Redraw the slider
   */
  Graph3d.prototype._redrawSlider = function() {
    if ( this.frame.filter.slider !== undefined) {
      this.frame.filter.slider.redraw();
    }
  };


  /**
   * Redraw common information
   */
  Graph3d.prototype._redrawInfo = function() {
    var info = this.dataGroup.getInfo();
    if (info === undefined) return;

    var ctx = this._getContext();

    ctx.font = '14px arial'; // TODO: put in options
    ctx.lineStyle = 'gray';
    ctx.fillStyle = 'gray';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';

    var x = this.margin;
    var y = this.margin;
    ctx.fillText(info, x, y);
  };


  /**
   * Draw a line between 2d points 'from' and 'to'.
   *
   * If stroke style specified, set that as well.
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {vis.Point2d} from
   * @param {vis.Point2d} to
   * @param {string} [strokeStyle]
   * @private
   */
  Graph3d.prototype._line = function(ctx, from, to, strokeStyle) {
    if (strokeStyle !== undefined) {
      ctx.strokeStyle = strokeStyle;
    }

    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x  , to.y  );
    ctx.stroke();
  };

  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {vis.Point3d} point3d
   * @param {string} text
   * @param {number} armAngle
   * @param {number} [yMargin=0]
   */
  Graph3d.prototype.drawAxisLabelX = function(ctx, point3d, text, armAngle, yMargin) {
    if (yMargin === undefined) {
      yMargin = 0;
    }

    var point2d = this._convert3Dto2D(point3d);

    if (Math.cos(armAngle * 2) > 0) {
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      point2d.y += yMargin;
    }
    else if (Math.sin(armAngle * 2) < 0){
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
    }
    else {
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
    }

    ctx.fillStyle = this.axisColor;
    ctx.fillText(text, point2d.x, point2d.y);
  };


  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {vis.Point3d} point3d
   * @param {string} text
   * @param {number} armAngle
   * @param {number} [yMargin=0]
   */
  Graph3d.prototype.drawAxisLabelY = function(ctx, point3d, text, armAngle, yMargin) {
    if (yMargin === undefined) {
      yMargin = 0;
    }

    var point2d = this._convert3Dto2D(point3d);

    if (Math.cos(armAngle * 2) < 0) {
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      point2d.y += yMargin;
    }
    else if (Math.sin(armAngle * 2) > 0){
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
    }
    else {
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
    }

    ctx.fillStyle = this.axisColor;
    ctx.fillText(text, point2d.x, point2d.y);
  };


  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {vis.Point3d} point3d
   * @param {string} text
   * @param {number} [offset=0]
   */
  Graph3d.prototype.drawAxisLabelZ = function(ctx, point3d, text, offset) {
    if (offset === undefined) {
      offset = 0;
    }

    var point2d = this._convert3Dto2D(point3d);
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = this.axisColor;
    ctx.fillText(text, point2d.x - offset, point2d.y);
  };

  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {vis.Point3d} point3d
   * @param {string} text
   * @param {number} armAngle
   * @param {number} [yMargin=0]
   */
  Graph3d.prototype.drawAxisLabelXRotate = function (ctx, point3d, text, armAngle, yMargin) {

    var point2d = this._convert3Dto2D(point3d);
    if (Math.cos(armAngle * 2) > 0) {
      ctx.save();
      ctx.translate( point2d.x, point2d.y);
      ctx.rotate(-Math.PI / 2);
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = this.axisColor;
      ctx.fillText(text, 0, 0);
      ctx.restore();
    } else if (Math.sin(armAngle * 2) < 0) {
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = this.axisColor;
      ctx.fillText(text, point2d.x, point2d.y);
    } else {
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = this.axisColor;
      ctx.fillText(text, point2d.x, point2d.y);
    }
  };

  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {vis.Point3d} point3d
   * @param {string} text
   * @param {number} armAngle
   * @param {number} [yMargin=0]
   */
  Graph3d.prototype.drawAxisLabelYRotate = function (ctx, point3d, text, armAngle, yMargin) {

    var point2d = this._convert3Dto2D(point3d);
    if (Math.cos(armAngle * 2) < 0 ) {
      ctx.save();
      ctx.translate( point2d.x, point2d.y);
      ctx.rotate(-Math.PI / 2);
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = this.axisColor;
      ctx.fillText(text, 0, 0);
      ctx.restore();
    } else if (Math.sin(armAngle * 2) > 0) {
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = this.axisColor;
      ctx.fillText(text, point2d.x, point2d.y);
    } else {
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = this.axisColor;
      ctx.fillText(text, point2d.x, point2d.y);
    }
  };

  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {vis.Point3d} point3d
   * @param {string} text
   * @param {number} [offset=0]
   */
  Graph3d.prototype.drawAxisLabelZRotate = function (ctx, point3d, text, offset) {
    if (offset === undefined) {
      offset = 0;
    }

    var point2d = this._convert3Dto2D(point3d);
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = this.axisColor;
    ctx.fillText(text, point2d.x - offset, point2d.y);
  };

  /**


  /**
   * Draw a line between 2d points 'from' and 'to'.
   *
   * If stroke style specified, set that as well.
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {vis.Point2d} from
   * @param {vis.Point2d} to
   * @param {string} [strokeStyle]
   * @private
   */
  Graph3d.prototype._line3d = function(ctx, from, to, strokeStyle) {
    var from2d = this._convert3Dto2D(from);
    var to2d   = this._convert3Dto2D(to);

    this._line(ctx, from2d, to2d, strokeStyle);
  };


  /**
   * Redraw the axis
   */
  Graph3d.prototype._redrawAxis = function() {
    var ctx = this._getContext(),
      from, to, step, prettyStep,
      text, xText, yText, zText,
      offset, xOffset, yOffset;

    // TODO: get the actual rendered style of the containerElement
    //ctx.font = this.containerElement.style.font;
    //ctx.font = 24 / this.camera.getArmLength() + 'px arial';
    ctx.font = this.axisFontSize / this.camera.getArmLength() + 'px ' + this.axisFontType;

    // calculate the length for the short grid lines
    var gridLenX   = 0.025 / this.scale.x;
    var gridLenY   = 0.025 / this.scale.y;
    var textMargin = 5 / this.camera.getArmLength(); // px
    var armAngle   = this.camera.getArmRotation().horizontal;
    var armVector  = new Point2d_1(Math.cos(armAngle), Math.sin(armAngle));

    var xRange = this.xRange;
    var yRange = this.yRange;
    var zRange = this.zRange;
    var point3d;

    // draw x-grid lines
    ctx.lineWidth = 1;
    prettyStep = (this.defaultXStep === undefined);
    step = new StepNumber_1(xRange.min, xRange.max, this.xStep, prettyStep);
    step.start(true);

    while (!step.end()) {
      var x = step.getCurrent();

      if (this.showGrid) {
        from = new Point3d_1(x, yRange.min, zRange.min);
        to   = new Point3d_1(x, yRange.max, zRange.min);
        this._line3d(ctx, from, to, this.gridColor);
      }
      else if (this.showXAxis) {
        from = new Point3d_1(x, yRange.min, zRange.min);
        to   = new Point3d_1(x, yRange.min+gridLenX, zRange.min);
        this._line3d(ctx, from, to, this.axisColor);

        from = new Point3d_1(x, yRange.max, zRange.min);
        to   = new Point3d_1(x, yRange.max-gridLenX, zRange.min);
        this._line3d(ctx, from, to, this.axisColor);
      }

      if (this.showXAxis) {
        yText       = (armVector.x > 0) ? yRange.min : yRange.max;
        point3d = new Point3d_1(x, yText, zRange.min);
        let msg     = '  ' + this.xValueLabel(x) + '  ';
        this._drawAxisLabelX.call(this, ctx, point3d, msg, armAngle, textMargin);
      }

      step.next();
    }

    // draw y-grid lines
    ctx.lineWidth = 1;
    prettyStep = (this.defaultYStep === undefined);
    step = new StepNumber_1(yRange.min, yRange.max, this.yStep, prettyStep);
    step.start(true);

    while (!step.end()) {
      var y = step.getCurrent();

      if (this.showGrid) {
        from = new Point3d_1(xRange.min, y, zRange.min);
        to   = new Point3d_1(xRange.max, y, zRange.min);
        this._line3d(ctx, from, to, this.gridColor);
      }
      else if (this.showYAxis){
        from = new Point3d_1(xRange.min, y, zRange.min);
        to   = new Point3d_1(xRange.min+gridLenY, y, zRange.min);
        this._line3d(ctx, from, to, this.axisColor);

        from = new Point3d_1(xRange.max, y, zRange.min);
        to   = new Point3d_1(xRange.max-gridLenY, y, zRange.min);
        this._line3d(ctx, from, to, this.axisColor);
      }

      if (this.showYAxis) {
        xText   = (armVector.y > 0) ? xRange.min : xRange.max;
        point3d = new Point3d_1(xText, y, zRange.min);
        let msg = '  ' + this.yValueLabel(y) + '  ';
        this._drawAxisLabelY.call(this, ctx, point3d, msg, armAngle, textMargin);
      }

      step.next();
    }

    // draw z-grid lines and axis
    if (this.showZAxis) {
      ctx.lineWidth = 1;
      prettyStep = (this.defaultZStep === undefined);
      step = new StepNumber_1(zRange.min, zRange.max, this.zStep, prettyStep);
      step.start(true);

      xText = (armVector.x > 0) ? xRange.min : xRange.max;
      yText = (armVector.y < 0) ? yRange.min : yRange.max;

      while (!step.end()) {
        var z = step.getCurrent();

        // TODO: make z-grid lines really 3d?
        var from3d = new Point3d_1(xText, yText, z);
        var from2d = this._convert3Dto2D(from3d);
        to = new Point2d_1(from2d.x - textMargin, from2d.y);
        this._line(ctx, from2d, to, this.axisColor);

        let msg = this.zValueLabel(z) + ' ';
        this._drawAxisLabelZ.call(this, ctx, from3d, msg, 5);

        step.next();
      }

      ctx.lineWidth = 1;
      from = new Point3d_1(xText, yText, zRange.min);
      to   = new Point3d_1(xText, yText, zRange.max);
      this._line3d(ctx, from, to, this.axisColor);
    }

    // draw x-axis
    if (this.showXAxis) {
      var xMin2d;
      var xMax2d;
      ctx.lineWidth = 1;

      // line at yMin
      xMin2d = new Point3d_1(xRange.min, yRange.min, zRange.min);
      xMax2d = new Point3d_1(xRange.max, yRange.min, zRange.min);
      this._line3d(ctx, xMin2d, xMax2d, this.axisColor);
      // line at ymax
      xMin2d = new Point3d_1(xRange.min, yRange.max, zRange.min);
      xMax2d = new Point3d_1(xRange.max, yRange.max, zRange.min);
      this._line3d(ctx, xMin2d, xMax2d, this.axisColor);
    }

    // draw y-axis
    if (this.showYAxis) {
      ctx.lineWidth = 1;
      // line at xMin
      from = new Point3d_1(xRange.min, yRange.min, zRange.min);
      to   = new Point3d_1(xRange.min, yRange.max, zRange.min);
      this._line3d(ctx, from, to, this.axisColor);
      // line at xMax
      from = new Point3d_1(xRange.max, yRange.min, zRange.min);
      to   = new Point3d_1(xRange.max, yRange.max, zRange.min);
      this._line3d(ctx, from, to, this.axisColor);
    }

    // draw x-label
    var xLabel = this.xLabel;
    if (xLabel.length > 0 && this.showXAxis) {
      yOffset = 0.1 / this.scale.y;
      xText   = (xRange.max + 3*xRange.min)/4;
      yText   = (armVector.x > 0) ? yRange.min - yOffset: yRange.max + yOffset;
      text    = new Point3d_1(xText, yText, zRange.min);
      this.drawAxisLabelX(ctx, text, xLabel, armAngle);
    }

    // draw y-label
    var yLabel = this.yLabel;
    if (yLabel.length > 0 && this.showYAxis) {
      xOffset = 0.1 / this.scale.x;
      xText   = (armVector.y > 0) ? xRange.min - xOffset : xRange.max + xOffset;
      yText   = (yRange.max + 3*yRange.min)/4;
      text    = new Point3d_1(xText, yText, zRange.min);

      this.drawAxisLabelY(ctx, text, yLabel, armAngle);
    }

    // draw z-label
    var zLabel = this.zLabel;
    if (zLabel.length > 0 && this.showZAxis) {
      offset = 30;  // pixels.  // TODO: relate to the max width of the values on the z axis?
      xText  = (armVector.x > 0) ? xRange.min : xRange.max;
      yText  = (armVector.y < 0) ? yRange.min : yRange.max;
      zText  = (zRange.max + 3*zRange.min)/4;
      text   = new Point3d_1(xText, yText, zText);

      this.drawAxisLabelZ(ctx, text, zLabel, offset);
    }
  };


  /**
   *
   * @param {vis.Point3d} point
   * @returns {*}
   * @private
   */
  Graph3d.prototype._getStrokeWidth = function(point) {
    if (point !== undefined) {
      if (this.showPerspective) {
        return 1 / -point.trans.z * this.dataColor.strokeWidth;
      }
      else {
        return -(this.eye.z / this.camera.getArmLength()) * this.dataColor.strokeWidth;
      }
    }

    return this.dataColor.strokeWidth;
  };


  // -----------------------------------------------------------------------------
  // Drawing primitives for the graphs
  // -----------------------------------------------------------------------------


  /**
   * Draw a bar element in the view with the given properties.
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {Object} point
   * @param {number} xWidth
   * @param {number} yWidth
   * @param {string} color
   * @param {string} borderColor
   * @private
   */
  Graph3d.prototype._redrawBar = function(ctx, point, xWidth, yWidth, color, borderColor) {
    var surface;

    // calculate all corner points
    var me = this;
    var point3d = point.point;
    var zMin = this.zRange.min;
    var top = [
      {point: new Point3d_1(point3d.x - xWidth, point3d.y - yWidth, point3d.z)},
      {point: new Point3d_1(point3d.x + xWidth, point3d.y - yWidth, point3d.z)},
      {point: new Point3d_1(point3d.x + xWidth, point3d.y + yWidth, point3d.z)},
      {point: new Point3d_1(point3d.x - xWidth, point3d.y + yWidth, point3d.z)}
    ];
    var bottom = [
      {point: new Point3d_1(point3d.x - xWidth, point3d.y - yWidth, zMin)},
      {point: new Point3d_1(point3d.x + xWidth, point3d.y - yWidth, zMin)},
      {point: new Point3d_1(point3d.x + xWidth, point3d.y + yWidth, zMin)},
      {point: new Point3d_1(point3d.x - xWidth, point3d.y + yWidth, zMin)}
    ];

    // calculate screen location of the points
    top.forEach(function (obj) {
      obj.screen = me._convert3Dto2D(obj.point);
    });
    bottom.forEach(function (obj) {
      obj.screen = me._convert3Dto2D(obj.point);
    });

    // create five sides, calculate both corner points and center points
    var surfaces = [
      {corners: top, center: Point3d_1.avg(bottom[0].point, bottom[2].point)},
      {corners: [top[0], top[1], bottom[1], bottom[0]], center: Point3d_1.avg(bottom[1].point, bottom[0].point)},
      {corners: [top[1], top[2], bottom[2], bottom[1]], center: Point3d_1.avg(bottom[2].point, bottom[1].point)},
      {corners: [top[2], top[3], bottom[3], bottom[2]], center: Point3d_1.avg(bottom[3].point, bottom[2].point)},
      {corners: [top[3], top[0], bottom[0], bottom[3]], center: Point3d_1.avg(bottom[0].point, bottom[3].point)}
    ];
    point.surfaces = surfaces;

    // calculate the distance of each of the surface centers to the camera
    for (let j = 0; j < surfaces.length; j++) {
      surface = surfaces[j];
      var transCenter = this._convertPointToTranslation(surface.center);
      surface.dist = this.showPerspective ? transCenter.length() : -transCenter.z;
      // TODO: this dept calculation doesn't work 100% of the cases due to perspective,
      //     but the current solution is fast/simple and works in 99.9% of all cases
      //     the issue is visible in example 14, with graph.setCameraPosition({horizontal: 2.97, vertical: 0.5, distance: 0.9})
    }

    // order the surfaces by their (translated) depth
    surfaces.sort(function (a, b) {
      var diff = b.dist - a.dist;
      if (diff) return diff;

      // if equal depth, sort the top surface last
      if (a.corners === top) return 1;
      if (b.corners === top) return -1;

      // both are equal
      return 0;
    });

    // draw the ordered surfaces
    ctx.lineWidth = this._getStrokeWidth(point);
    ctx.strokeStyle = borderColor;
    ctx.fillStyle = color;
    // NOTE: we start at j=2 instead of j=0 as we don't need to draw the two surfaces at the backside
    for (let j = 2; j < surfaces.length; j++) {
      surface = surfaces[j];
      this._polygon(ctx, surface.corners);
    }
  };


  /**
   * Draw a polygon using the passed points and fill it with the passed style and stroke.
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {Array.<vis.Point3d>} points      an array of points.
   * @param {string} [fillStyle] the fill style to set
   * @param {string} [strokeStyle] the stroke style to set
   */
  Graph3d.prototype._polygon = function(ctx, points, fillStyle, strokeStyle) {
    if (points.length < 2) {
      return;
    }

    if (fillStyle !== undefined) {
      ctx.fillStyle   = fillStyle;
    }
    if (strokeStyle !== undefined) {
      ctx.strokeStyle = strokeStyle;
    }
    ctx.beginPath();
    ctx.moveTo(points[0].screen.x, points[0].screen.y);

    for (var i = 1; i < points.length; ++i) {
      var point = points[i];
      ctx.lineTo(point.screen.x, point.screen.y);
    }

    ctx.closePath();
    ctx.fill();
    ctx.stroke(); // TODO: only draw stroke when strokeWidth > 0
  };


  /**
   * @param {CanvasRenderingContext2D} ctx
   * @param {object} point
   * @param {string} color
   * @param {string} borderColor
   * @param {number} [size=this._dotSize()]
   * @private
   */
  Graph3d.prototype._drawCircle = function(ctx, point, color, borderColor, size) {
    var radius = this._calcRadius(point, size);

    ctx.lineWidth   = this._getStrokeWidth(point);
    ctx.strokeStyle = borderColor;
    ctx.fillStyle   = color;
    ctx.beginPath();
    ctx.arc(point.screen.x, point.screen.y, radius, 0, Math.PI*2, true);
    ctx.fill();
    ctx.stroke();
  };


  /**
   * Determine the colors for the 'regular' graph styles.
   *
   * @param {object} point
   * @returns {{fill, border}}
   * @private
   */
  Graph3d.prototype._getColorsRegular = function(point) {
    const f           = (point.point.value - this.valueRange.min) * this.scale.value;
    const color       = this._colormap(f, 1);
    const borderColor = this._colormap(f, 0.8);
    return {
      fill  : color,
      border: borderColor
    };
  };


  /**
   * Get the colors for the 'color' graph styles.
   * These styles are currently: 'bar-color' and 'dot-color'
   * Color may be set as a string representation of HTML color, like #ff00ff,
   * or calculated from a number, for example, distance from this point
   * The first option is useful when we have some pre-given legend, to which we have to adjust ourselves
   * The second option is useful when we are interested in automatically setting the color, from some value,
   * using some color scale
   * @param {object} point
   * @returns {{fill: *, border: *}}
   * @private
   */
  Graph3d.prototype._getColorsColor = function(point) {
    // calculate the color based on the value
    var color, borderColor, pointStyle;
     if (point && point.point && point.point.data && point.point.data.style) {
      pointStyle = point.point.data.style;
    }
    if (pointStyle && typeof pointStyle === 'object' &&
        pointStyle.fill && pointStyle.stroke ) {
      return {
        fill: pointStyle.fill,
        border: pointStyle.stroke
      }
    }

    if (typeof point.point.value === "string") {
      color = point.point.value;
      borderColor = point.point.value;
    }
    else {
      const f     = (point.point.value - this.valueRange.min) * this.scale.value;
      color       = this._colormap(f, 1);
      borderColor = this._colormap(f, 0.8);
    }
    return {
      fill   : color,
      border : borderColor
    };
  };


  /**
   * Get the colors for the 'size' graph styles.
   * These styles are currently: 'bar-size' and 'dot-size'
   *
   * @returns {{fill: *, border: (string|colorOptions.stroke|{string, undefined}|string|colorOptions.stroke|{string}|*)}}
   * @private
   */
  Graph3d.prototype._getColorsSize = function() {
    return {
      fill   : this.dataColor.fill,
      border : this.dataColor.stroke
    };
  };


  /**
   * Determine the color corresponding to a given value on the color scale.
   *
   * @param {number} [x] the data value to be mapped running from 0 to 1
   * @param {number} [v] scale factor between 0 and 1 for the color brightness
   * @returns {string}
   * @private
   */
  Graph3d.prototype._colormap = function(x, v=1) {

    let r, g, b, a;
    const colormap = this.colormap;
    if (Array.isArray(colormap)) {
      const maxIndex = colormap.length - 1;
      const startIndex = Math.max(Math.floor(x * maxIndex), 0);
      const endIndex = Math.min(startIndex + 1, maxIndex);
      const innerRatio = x * maxIndex - startIndex;
      const min = colormap[startIndex];
      const max = colormap[endIndex];
      r = min.r + innerRatio*(max.r - min.r);
      g = min.g + innerRatio*(max.g - min.g);
      b = min.b + innerRatio*(max.b - min.b);
    } else if (typeof colormap === 'function') {
      ({r, g, b, a} = colormap(x));
    } else {
      const hue = (1 - x) * 240;
      ({r, g, b} = util.HSVToRGB(hue/360, 1, 1));
    }
    if (typeof a === 'number' && !Number.isNaN(a)) {
      return `RGBA(${Math.round(r*v)}, ${Math.round(g*v)}, ${Math.round(b*v)}, ${a})`;
    } else {
      return `RGB(${Math.round(r*v)}, ${Math.round(g*v)}, ${Math.round(b*v)})`;
    }
  };


  /**
   * Determine the size of a point on-screen, as determined by the
   * distance to the camera.
   *
   * @param {Object} point
   * @param {number} [size=this._dotSize()] the size that needs to be translated to screen coordinates.
   *             optional; if not passed, use the default point size.
   * @returns {number}
   * @private
   */
  Graph3d.prototype._calcRadius = function(point, size) {
    if (size === undefined) {
      size = this._dotSize();
    }

    var radius;
    if (this.showPerspective) {
      radius = size / -point.trans.z;
    }
    else {
      radius = size * -(this.eye.z / this.camera.getArmLength());
    }
    if (radius < 0) {
      radius = 0;
    }

    return radius;
  };


  // -----------------------------------------------------------------------------
  // Methods for drawing points per graph style.
  // -----------------------------------------------------------------------------


  /**
   * Draw single datapoint for graph style 'bar'.
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {Object} point
   * @private
   */
  Graph3d.prototype._redrawBarGraphPoint = function(ctx, point) {
    var xWidth = this.xBarWidth / 2;
    var yWidth = this.yBarWidth / 2;
    var colors = this._getColorsRegular(point);

    this._redrawBar(ctx, point, xWidth, yWidth, colors.fill, colors.border);
  };


  /**
   * Draw single datapoint for graph style 'bar-color'.
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {Object} point
   * @private
   */
  Graph3d.prototype._redrawBarColorGraphPoint = function(ctx, point) {
    var xWidth = this.xBarWidth / 2;
    var yWidth = this.yBarWidth / 2;
    var colors = this._getColorsColor(point);

    this._redrawBar(ctx, point, xWidth, yWidth, colors.fill, colors.border);
  };


  /**
   * Draw single datapoint for graph style 'bar-size'.
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {Object} point
   * @private
   */
  Graph3d.prototype._redrawBarSizeGraphPoint = function(ctx, point) {
    // calculate size for the bar
    var fraction = (point.point.value - this.valueRange.min) / this.valueRange.range();
    var xWidth   = (this.xBarWidth / 2) * (fraction * 0.8 + 0.2);
    var yWidth   = (this.yBarWidth / 2) * (fraction * 0.8 + 0.2);

    var colors   = this._getColorsSize();

    this._redrawBar(ctx, point, xWidth, yWidth, colors.fill, colors.border);
  };


  /**
   * Draw single datapoint for graph style 'dot'.
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {Object} point
   * @private
   */
  Graph3d.prototype._redrawDotGraphPoint = function(ctx, point) {
    var colors = this._getColorsRegular(point);

    this._drawCircle(ctx, point, colors.fill, colors.border);
  };


  /**
   * Draw single datapoint for graph style 'dot-line'.
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {Object} point
   * @private
   */
  Graph3d.prototype._redrawDotLineGraphPoint = function(ctx, point) {
    // draw a vertical line from the XY-plane to the graph value
    var from = this._convert3Dto2D(point.bottom);
    ctx.lineWidth = 1;
    this._line(ctx, from, point.screen, this.gridColor);

    this._redrawDotGraphPoint(ctx, point);
  };


  /**
   * Draw single datapoint for graph style 'dot-color'.
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {Object} point
   * @private
   */
  Graph3d.prototype._redrawDotColorGraphPoint = function(ctx, point) {
    var colors = this._getColorsColor(point);

    this._drawCircle(ctx, point, colors.fill, colors.border);
  };


  /**
   * Draw single datapoint for graph style 'dot-size'.
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {Object} point
   * @private
   */
  Graph3d.prototype._redrawDotSizeGraphPoint = function(ctx, point) {
    var dotSize   = this._dotSize();
    var fraction  = (point.point.value - this.valueRange.min) / this.valueRange.range();

    var sizeMin   = dotSize*this.dotSizeMinFraction;
    var sizeRange = dotSize*this.dotSizeMaxFraction - sizeMin;
    var size      = sizeMin + sizeRange*fraction;

    var colors    = this._getColorsSize();

    this._drawCircle(ctx, point, colors.fill, colors.border, size);
  };


  /**
   * Draw single datapoint for graph style 'surface'.
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {Object} point
   * @private
   */
  Graph3d.prototype._redrawSurfaceGraphPoint = function(ctx, point) {
    var right = point.pointRight;
    var top   = point.pointTop;
    var cross = point.pointCross;

    if (point === undefined || right === undefined || top === undefined || cross === undefined) {
      return;
    }

    var topSideVisible = true;
    var fillStyle;
    var strokeStyle;
    var cosViewAngle;

    if (this.showGrayBottom || this.showShadow) {
      // calculate the cross product of the two vectors from center
      // to left and right, in order to know whether we are looking at the
      // bottom or at the top side. We can also use the cross product
      // for calculating light intensity
      var aDiff = Point3d_1.subtract(cross.trans, point.trans);
      var bDiff = Point3d_1.subtract(top.trans, right.trans);
      var surfaceNormal = Point3d_1.crossProduct(aDiff, bDiff);

      if (this.showPerspective) {
        let surfacePosition = Point3d_1.avg(
          Point3d_1.avg(point.trans, cross.trans),
          Point3d_1.avg(right.trans, top.trans));
        // This corresponds to diffuse lighting with light source at (0, 0, 0).
        // More generally, we would need `surfacePosition - lightPosition`:
        cosViewAngle = -Point3d_1.dotProduct(
          surfaceNormal.normalize(),
          surfacePosition.normalize());
      }
      else {
        cosViewAngle = surfaceNormal.z / surfaceNormal.length();
      }
      topSideVisible = cosViewAngle > 0;
    }

    if (topSideVisible || !this.showGrayBottom) {
      const vAvg = (point.point.value + right.point.value + top.point.value + cross.point.value) / 4;
      const ratio = (vAvg - this.valueRange.min) * this.scale.value;
      // lighting factor. TODO: let user specify lighting model as function(?)
      const v = this.showShadow ? (1 + cosViewAngle) / 2 : 1;
      fillStyle = this._colormap(ratio, v);
    }
    else {
      fillStyle = 'gray';
    }

    if (this.showSurfaceGrid) {
      strokeStyle = this.axisColor; // TODO: should be customizable
    }
    else {
      strokeStyle = fillStyle;
    }

    ctx.lineWidth = this._getStrokeWidth(point);
    // TODO: only draw stroke when strokeWidth > 0

    var points = [point, right, cross, top];
    this._polygon(ctx, points, fillStyle, strokeStyle);
  };


  /**
   * Helper method for _redrawGridGraphPoint()
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {Object} from
   * @param {Object} to
   * @private
   */
  Graph3d.prototype._drawGridLine = function(ctx, from, to) {
    if (from === undefined || to === undefined) {
       return;
    }

    const vAvg = (from.point.value + to.point.value) / 2;
    const f    = (vAvg - this.valueRange.min) * this.scale.value;

    ctx.lineWidth   = this._getStrokeWidth(from) * 2;
    ctx.strokeStyle = this._colormap(f, 1);
    this._line(ctx, from.screen, to.screen);
  };


  /**
   * Draw single datapoint for graph style 'Grid'.
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {Object} point
   * @private
   */
  Graph3d.prototype._redrawGridGraphPoint = function(ctx, point) {
    this._drawGridLine(ctx, point, point.pointRight);
    this._drawGridLine(ctx, point, point.pointTop);
  };


  /**
   * Draw single datapoint for graph style 'line'.
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {Object} point
   * @private
   */
  Graph3d.prototype._redrawLineGraphPoint = function(ctx, point) {
    if (point.pointNext === undefined) {
      return;
    }

    ctx.lineWidth   = this._getStrokeWidth(point);
    ctx.strokeStyle = this.dataColor.stroke;

    this._line(ctx, point.screen, point.pointNext.screen);
  };


  /**
   * Draw all datapoints for currently selected graph style.
   *
   */
  Graph3d.prototype._redrawDataGraph = function() {
    var ctx = this._getContext();
    var i;

    if (this.dataPoints === undefined || this.dataPoints.length <= 0)
      return;  // TODO: throw exception?

    this._calcTranslations(this.dataPoints);

    for (i = 0; i < this.dataPoints.length; i++) {
      var point = this.dataPoints[i];

      // Using call() ensures that the correct context is used
      this._pointDrawingMethod.call(this, ctx, point);
    }
  };


  // -----------------------------------------------------------------------------
  // End methods for drawing points per graph style.
  // -----------------------------------------------------------------------------

  /**
   * Store startX, startY and startOffset for mouse operations
   *
   * @param {Event}     event     The event that occurred
   */
  Graph3d.prototype._storeMousePosition = function(event) {
    // get mouse position (different code for IE and all other browsers)
    this.startMouseX = getMouseX(event);
    this.startMouseY = getMouseY(event);

    this._startCameraOffset = this.camera.getOffset();
  };


  /**
   * Start a moving operation inside the provided parent element
   * @param {Event}     event     The event that occurred (required for
   *                  retrieving the  mouse position)
   */
  Graph3d.prototype._onMouseDown = function(event) {
    event = event || window.event;

    // check if mouse is still down (may be up when focus is lost for example
    // in an iframe)
    if (this.leftButtonDown) {
      this._onMouseUp(event);
    }

    // only react on left mouse button down
    this.leftButtonDown = event.which ? (event.which === 1) : (event.button === 1);
    if (!this.leftButtonDown && !this.touchDown) return;

    this._storeMousePosition(event);

    this.startStart = new Date(this.start);
    this.startEnd = new Date(this.end);
    this.startArmRotation = this.camera.getArmRotation();

    this.frame.style.cursor = 'move';

    // add event listeners to handle moving the contents
    // we store the function onmousemove and onmouseup in the graph, so we can
    // remove the eventlisteners lateron in the function mouseUp()
    var me = this;
    this.onmousemove = function (event) {me._onMouseMove(event);};
    this.onmouseup   = function (event) {me._onMouseUp(event);};
    util.addEventListener(document, 'mousemove', me.onmousemove);
    util.addEventListener(document, 'mouseup', me.onmouseup);
    util.preventDefault(event);
  };


  /**
   * Perform moving operating.
   * This function activated from within the funcion Graph.mouseDown().
   * @param {Event}   event  Well, eehh, the event
   */
  Graph3d.prototype._onMouseMove = function (event) {
    this.moving = true;
    event = event || window.event;

    // calculate change in mouse position
    var diffX = parseFloat(getMouseX(event)) - this.startMouseX;
    var diffY = parseFloat(getMouseY(event)) - this.startMouseY;

    // move with ctrl or rotate by other
    if (event && event.ctrlKey === true) {
        // calculate change in mouse position
        var scaleX = this.frame.clientWidth  * 0.5;
        var scaleY = this.frame.clientHeight * 0.5;

        var offXNew = (this._startCameraOffset.x || 0) - ((diffX / scaleX) * this.camera.armLength) * 0.8;
        var offYNew = (this._startCameraOffset.y || 0) + ((diffY / scaleY) * this.camera.armLength) * 0.8;

        this.camera.setOffset(offXNew, offYNew);
        this._storeMousePosition(event);
      } else {
        var horizontalNew = this.startArmRotation.horizontal + diffX / 200;
        var verticalNew   = this.startArmRotation.vertical   + diffY / 200;

        var snapAngle = 4; // degrees
        var snapValue = Math.sin(snapAngle / 360 * 2 * Math.PI);

        // snap horizontally to nice angles at 0pi, 0.5pi, 1pi, 1.5pi, etc...
        // the -0.001 is to take care that the vertical axis is always drawn at the left front corner
        if (Math.abs(Math.sin(horizontalNew)) < snapValue) {
            horizontalNew = Math.round(horizontalNew / Math.PI) * Math.PI - 0.001;
        }
        if (Math.abs(Math.cos(horizontalNew)) < snapValue) {
            horizontalNew = (Math.round(horizontalNew / Math.PI - 0.5) + 0.5) * Math.PI - 0.001;
        }

        // snap vertically to nice angles
        if (Math.abs(Math.sin(verticalNew)) < snapValue) {
            verticalNew = Math.round(verticalNew / Math.PI) * Math.PI;
        }
        if (Math.abs(Math.cos(verticalNew)) < snapValue) {
            verticalNew = (Math.round(verticalNew / Math.PI - 0.5) + 0.5) * Math.PI;
        }
        this.camera.setArmRotation(horizontalNew, verticalNew);
    }

    this.redraw();

    // fire a cameraPositionChange event
    var parameters = this.getCameraPosition();
    this.emit('cameraPositionChange', parameters);

    util.preventDefault(event);
  };


  /**
   * Stop moving operating.
   * This function activated from within the funcion Graph.mouseDown().
   * @param {Event}  event   The event
   */
  Graph3d.prototype._onMouseUp = function (event) {
    this.frame.style.cursor = 'auto';
    this.leftButtonDown = false;

    // remove event listeners here
    util.removeEventListener(document, 'mousemove', this.onmousemove);
    util.removeEventListener(document, 'mouseup',   this.onmouseup);
    util.preventDefault(event);
  };

  /**
   * @param {Event}  event   The event
   */
  Graph3d.prototype._onClick = function (event) {
    // NOTE: onclick_callback is deprecated and may be removed in a future version.
    if (!this.onclick_callback && !this.hasListeners('click'))
      return;
    if (!this.moving) {
      var boundingRect = this.frame.getBoundingClientRect();
      var mouseX = getMouseX(event) - boundingRect.left;
      var mouseY = getMouseY(event) - boundingRect.top;
      var dataPoint = this._dataPointFromXY(mouseX, mouseY);
      if (dataPoint) {
        if (this.onclick_callback)
          this.onclick_callback(dataPoint.point.data);
        this.emit('click', dataPoint.point.data);
      }
    }
    else { // disable onclick callback, if it came immediately after rotate/pan
      this.moving = false;
    }
    util.preventDefault(event);
  };

  /**
   * After having moved the mouse, a tooltip should pop up when the mouse is resting on a data point
   * @param {Event}  event   A mouse move event
   */
  Graph3d.prototype._onTooltip = function (event) {
    var delay = this.tooltipDelay; // ms
    var boundingRect = this.frame.getBoundingClientRect();
    var mouseX = getMouseX(event) - boundingRect.left;
    var mouseY = getMouseY(event) - boundingRect.top;

    if (!this.showTooltip) {
      return;
    }

    if (this.tooltipTimeout) {
      clearTimeout(this.tooltipTimeout);
    }

    // (delayed) display of a tooltip only if no mouse button is down
    if (this.leftButtonDown) {
      this._hideTooltip();
      return;
    }

    if (this.tooltip && this.tooltip.dataPoint) {
      // tooltip is currently visible
      var dataPoint = this._dataPointFromXY(mouseX, mouseY);
      if (dataPoint !== this.tooltip.dataPoint) {
        // datapoint changed
        if (dataPoint) {
          this._showTooltip(dataPoint);
        }
        else {
          this._hideTooltip();
        }
      }
    }
    else {
      // tooltip is currently not visible
      var me = this;
      this.tooltipTimeout = setTimeout(function () {
        me.tooltipTimeout = null;

        // show a tooltip if we have a data point
        var dataPoint = me._dataPointFromXY(mouseX, mouseY);
        if (dataPoint) {
          me._showTooltip(dataPoint);
        }
      }, delay);
    }
  };

  /**
   * Event handler for touchstart event on mobile devices
   * @param {Event}  event   The event
   */
  Graph3d.prototype._onTouchStart = function(event) {
    this.touchDown = true;

    var me = this;
    this.ontouchmove = function (event) {me._onTouchMove(event);};
    this.ontouchend  = function (event) {me._onTouchEnd(event);};
    util.addEventListener(document, 'touchmove', me.ontouchmove);
    util.addEventListener(document, 'touchend', me.ontouchend);

    this._onMouseDown(event);
  };

  /**
   * Event handler for touchmove event on mobile devices
   * @param {Event}  event   The event
   */
  Graph3d.prototype._onTouchMove = function(event) {
    this._onMouseMove(event);
  };

  /**
   * Event handler for touchend event on mobile devices
   * @param {Event}  event   The event
   */
  Graph3d.prototype._onTouchEnd = function(event) {
    this.touchDown = false;

    util.removeEventListener(document, 'touchmove', this.ontouchmove);
    util.removeEventListener(document, 'touchend',   this.ontouchend);

    this._onMouseUp(event);
  };


  /**
   * Event handler for mouse wheel event, used to zoom the graph
   * Code from http://adomas.org/javascript-mouse-wheel/
   * @param {Event}  event   The event
   */
  Graph3d.prototype._onWheel = function(event) {
    if (!event) /* For IE. */
      event = window.event;
    if (this.zoomable && (!this.ctrlToZoom || event.ctrlKey)) {

      // retrieve delta
      var delta = 0;
      if (event.wheelDelta) { /* IE/Opera. */
        delta = event.wheelDelta/120;
      } else if (event.detail) { /* Mozilla case. */
        // In Mozilla, sign of delta is different than in IE.
        // Also, delta is multiple of 3.
        delta = -event.detail/3;
      }

      // If delta is nonzero, handle it.
      // Basically, delta is now positive if wheel was scrolled up,
      // and negative, if wheel was scrolled down.
      if (delta) {
        var oldLength = this.camera.getArmLength();
        var newLength = oldLength * (1 - delta / 10);

        this.camera.setArmLength(newLength);
        this.redraw();

        this._hideTooltip();
      }

      // fire a cameraPositionChange event
      var parameters = this.getCameraPosition();
      this.emit('cameraPositionChange', parameters);

      // Prevent default actions caused by mouse wheel.
      // That might be ugly, but we handle scrolls somehow
      // anyway, so don't bother here..
      util.preventDefault(event);
    }
  };

  /**
   * Test whether a point lies inside given 2D triangle
   *
   * @param   {vis.Point2d}   point
   * @param   {vis.Point2d[]} triangle
   * @returns {boolean}   true if given point lies inside or on the edge of the
   *                      triangle, false otherwise
   * @private
   */
  Graph3d.prototype._insideTriangle = function (point, triangle) {
    var a = triangle[0],
      b = triangle[1],
      c = triangle[2];

    /**
     *
     * @param {number} x
     * @returns {number}
     */
    function sign (x) {
      return x > 0 ? 1 : x < 0 ? -1 : 0;
    }

    var as = sign((b.x - a.x) * (point.y - a.y) - (b.y - a.y) * (point.x - a.x));
    var bs = sign((c.x - b.x) * (point.y - b.y) - (c.y - b.y) * (point.x - b.x));
    var cs = sign((a.x - c.x) * (point.y - c.y) - (a.y - c.y) * (point.x - c.x));

    // each of the three signs must be either equal to each other or zero
    return (as == 0 || bs == 0 || as == bs) &&
      (bs == 0 || cs == 0 || bs == cs) &&
      (as == 0 || cs == 0 || as == cs);
  };

  /**
   * Find a data point close to given screen position (x, y)
   *
   * @param   {number} x
   * @param   {number} y
   * @returns {Object | null} The closest data point or null if not close to any
   *                          data point
   * @private
   */
  Graph3d.prototype._dataPointFromXY = function (x, y) {
    var i,
      distMax = 100, // px
      dataPoint = null,
      closestDataPoint = null,
      closestDist = null,
      center = new Point2d_1(x, y);

    if (this.style === Graph3d.STYLE.BAR ||
      this.style === Graph3d.STYLE.BARCOLOR ||
      this.style === Graph3d.STYLE.BARSIZE) {
      // the data points are ordered from far away to closest
      for (i = this.dataPoints.length - 1; i >= 0; i--) {
        dataPoint = this.dataPoints[i];
        var surfaces  = dataPoint.surfaces;
        if (surfaces) {
          for (var s = surfaces.length - 1; s >= 0; s--) {
            // split each surface in two triangles, and see if the center point is inside one of these
            var surface = surfaces[s];
            var corners = surface.corners;
            var triangle1 = [corners[0].screen, corners[1].screen, corners[2].screen];
            var triangle2 = [corners[2].screen, corners[3].screen, corners[0].screen];
            if (this._insideTriangle(center, triangle1) ||
              this._insideTriangle(center, triangle2)) {
              // return immediately at the first hit
              return dataPoint;
            }
          }
        }
      }
    }
    else {
      // find the closest data point, using distance to the center of the point on 2d screen
      for (i = 0; i < this.dataPoints.length; i++) {
        dataPoint = this.dataPoints[i];
        var point = dataPoint.screen;
        if (point) {
          var distX = Math.abs(x - point.x);
          var distY = Math.abs(y - point.y);
          var dist  = Math.sqrt(distX * distX + distY * distY);

          if ((closestDist === null || dist < closestDist) && dist < distMax) {
            closestDist = dist;
            closestDataPoint = dataPoint;
          }
        }
      }
    }


    return closestDataPoint;
  };


  /**
   * Determine if the given style has bars
   *
   * @param   {number} style the style to check
   * @returns {boolean} true if bar style, false otherwise
   */
  Graph3d.prototype.hasBars = function(style) {
    return style == Graph3d.STYLE.BAR      ||
           style == Graph3d.STYLE.BARCOLOR ||
           style == Graph3d.STYLE.BARSIZE;
  };


  /**
   * Display a tooltip for given data point
   * @param {Object} dataPoint
   * @private
   */
  Graph3d.prototype._showTooltip = function (dataPoint) {
    var content, line, dot;

    if (!this.tooltip) {
      content = document.createElement('div');
      Object.assign(content.style, {}, this.tooltipStyle.content);
      content.style.position = 'absolute';
      
      line = document.createElement('div');
      Object.assign(line.style, {}, this.tooltipStyle.line);
      line.style.position = 'absolute';

      dot = document.createElement('div');
      Object.assign(dot.style, {}, this.tooltipStyle.dot);
      dot.style.position = 'absolute';

      this.tooltip = {
        dataPoint: null,
        dom: {
          content: content,
          line: line,
          dot: dot
        }
      };
    }
    else {
      content = this.tooltip.dom.content;
      line  = this.tooltip.dom.line;
      dot   = this.tooltip.dom.dot;
    }

    this._hideTooltip();

    this.tooltip.dataPoint = dataPoint;
    if (typeof this.showTooltip === 'function') {
      content.innerHTML = this.showTooltip(dataPoint.point);
    }
    else {
      content.innerHTML = '<table>' +
        '<tr><td>' + this.xLabel + ':</td><td>' + dataPoint.point.x + '</td></tr>' +
        '<tr><td>' + this.yLabel + ':</td><td>' + dataPoint.point.y + '</td></tr>' +
        '<tr><td>' + this.zLabel + ':</td><td>' + dataPoint.point.z + '</td></tr>' +
        '</table>';
    }

    content.style.left  = '0';
    content.style.top   = '0';
    this.frame.appendChild(content);
    this.frame.appendChild(line);
    this.frame.appendChild(dot);

    // calculate sizes
    var contentWidth  = content.offsetWidth;
    var contentHeight   = content.offsetHeight;
    var lineHeight    = line.offsetHeight;
    var dotWidth    = dot.offsetWidth;
    var dotHeight     = dot.offsetHeight;

    var left = dataPoint.screen.x - contentWidth / 2;
    left = Math.min(Math.max(left, 10), this.frame.clientWidth - 10 - contentWidth);

    line.style.left   = dataPoint.screen.x + 'px';
    line.style.top    = (dataPoint.screen.y - lineHeight) + 'px';
    content.style.left  = left + 'px';
    content.style.top   = (dataPoint.screen.y - lineHeight - contentHeight) + 'px';
    dot.style.left    = (dataPoint.screen.x - dotWidth / 2) + 'px';
    dot.style.top     = (dataPoint.screen.y - dotHeight / 2) + 'px';
  };

  /**
   * Hide the tooltip when displayed
   * @private
   */
  Graph3d.prototype._hideTooltip = function () {
    if (this.tooltip) {
      this.tooltip.dataPoint = null;

      for (var prop in this.tooltip.dom) {
        if (this.tooltip.dom.hasOwnProperty(prop)) {
          var elem = this.tooltip.dom[prop];
          if (elem && elem.parentNode) {
            elem.parentNode.removeChild(elem);
          }
        }
      }
    }
  };

  /**--------------------------------------------------------------------------**/


  /**
   * Get the horizontal mouse position from a mouse event
   *
   * @param   {Event}  event
   * @returns {number} mouse x
   */
  function getMouseX (event) {
    if ('clientX' in event) return event.clientX;
    return event.targetTouches[0] && event.targetTouches[0].clientX || 0;
  }

  /**
   * Get the vertical mouse position from a mouse event
   *
   * @param   {Event}  event
   * @returns {number} mouse y
   */
  function getMouseY (event) {
    if ('clientY' in event) return event.clientY;
    return event.targetTouches[0] && event.targetTouches[0].clientY || 0;
  }


  // -----------------------------------------------------------------------------
  //  Public methods for specific settings
  // -----------------------------------------------------------------------------

  /**
   * Set the rotation and distance of the camera
   *
   * @param {Object}  pos            An object with the camera position
   * @param {number} [pos.horizontal] The horizontal rotation, between 0 and 2*PI.
   *                                 Optional, can be left undefined.
   * @param {number} [pos.vertical]  The vertical rotation, between 0 and 0.5*PI.
   *                                 if vertical=0.5*PI, the graph is shown from
   *                                 the top. Optional, can be left undefined.
   * @param {number} [pos.distance]  The (normalized) distance of the camera to the
   *                                 center of the graph, a value between 0.71 and
   *                                 5.0. Optional, can be left undefined.
   */
  Graph3d.prototype.setCameraPosition = function(pos) {
    setCameraPosition(pos, this);
    this.redraw();
  };


  /**
   * Set a new size for the graph
   *
   * @param {string} width  Width in pixels or percentage (for example '800px'
   *                        or '50%')
   * @param {string} height Height in pixels or percentage  (for example '400px'
   *                        or '30%')
   */
  Graph3d.prototype.setSize = function(width, height) {
  	this._setSize(width, height);
  	this.redraw();
  };

  exports.Graph3d = Graph3d;
  exports.Graph3dCamera = Camera;
  exports.Graph3dFilter = Filter;
  exports.Graph3dPoint2d = Point2d_1;
  exports.Graph3dPoint3d = Point3d_1;
  exports.Graph3dSlider = Slider;
  exports.Graph3dStepNumber = StepNumber_1;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=vis-graph3d.js.map
