import Emitter from "component-emitter";
import * as util from "vis-util/esnext";
import Point3d from "./Point3d";
import Point2d from "./Point2d";
import Slider from "./Slider";
import StepNumber from "./StepNumber";
import { STYLE, setCameraPosition, setDefaults, setOptions } from "./Settings";
import { VALIDATOR_PRINT_STYLE, Validator } from "vis-util/esnext";
import { allOptions } from "./options.js";
import DataGroup from "./DataGroup";

/// enumerate the available styles
Graph3d.STYLE = STYLE;

/**
 * Following label is used in the settings to describe values which should be
 * determined by the code while running, from the current data and graph style.
 *
 * Using 'undefined' directly achieves the same thing, but this is more
 * descriptive by describing the intent.
 */
const autoByDefault = undefined;

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
  width: "400px",
  height: "400px",
  filterLabel: "time",
  legendLabel: "value",
  xLabel: "x",
  yLabel: "y",
  zLabel: "z",
  xValueLabel: function (v) {
    return v;
  },
  yValueLabel: function (v) {
    return v;
  },
  zValueLabel: function (v) {
    return v;
  },
  showXAxis: true,
  showYAxis: true,
  showZAxis: true,
  showGrayBottom: false,
  showGrid: true,
  showPerspective: true,
  showShadow: false,
  showSurfaceGrid: true,
  keepAspectRatio: true,
  rotateAxisLabels: true,
  verticalRatio: 0.5, // 0.1 to 1.0, where 1.0 results in a 'cube'

  dotSizeRatio: 0.02, // size of the dots as a fraction of the graph width
  dotSizeMinFraction: 0.5, // size of min-value dot as a fraction of dotSizeRatio
  dotSizeMaxFraction: 2.5, // size of max-value dot as a fraction of dotSizeRatio

  showAnimationControls: autoByDefault,
  animationInterval: 1000, // milliseconds
  animationPreload: false,
  animationAutoStart: autoByDefault,

  axisFontSize: 14,
  axisFontType: "arial",
  axisColor: "#4D4D4D",
  gridColor: "#D3D3D3",
  xCenter: "55%",
  yCenter: "50%",

  style: Graph3d.STYLE.DOT,
  tooltip: false,
  tooltipDelay: 300, // milliseconds

  tooltipStyle: {
    content: {
      padding: "10px",
      border: "1px solid #4d4d4d",
      color: "#1a1a1a",
      background: "rgba(255,255,255,0.7)",
      borderRadius: "2px",
      boxShadow: "5px 5px 10px rgba(128,128,128,0.5)",
    },
    line: {
      height: "40px",
      width: "0",
      borderLeft: "1px solid #4d4d4d",
      pointerEvents: "none",
    },
    dot: {
      height: "0",
      width: "0",
      border: "5px solid #4d4d4d",
      borderRadius: "5px",
      pointerEvents: "none",
    },
  },

  dataColor: {
    fill: "#7DC1FF",
    stroke: "#3267D2",
    strokeWidth: 1, // px
  },

  surfaceColors: autoByDefault,
  colormap: autoByDefault,

  cameraPosition: {
    horizontal: 1.0,
    vertical: 0.5,
    distance: 1.7,
  },

  zoomable: true,
  ctrlToZoom: false,

  /*
  The following fields are 'auto by default', see above.
 */
  showLegend: autoByDefault, // determined by graph style
  backgroundColor: autoByDefault,

  xBarWidth: autoByDefault,
  yBarWidth: autoByDefault,
  valueMin: autoByDefault,
  valueMax: autoByDefault,
  xMin: autoByDefault,
  xMax: autoByDefault,
  xStep: autoByDefault,
  yMin: autoByDefault,
  yMax: autoByDefault,
  yStep: autoByDefault,
  zMin: autoByDefault,
  zMax: autoByDefault,
  zStep: autoByDefault,
};

// -----------------------------------------------------------------------------
// Class Graph3d
// -----------------------------------------------------------------------------

/**
 * Graph3d displays data in 3d.
 *
 * Graph3d is developed in javascript as a Google Visualization Chart.
 *
 * @function Object() { [native code] } Graph3d
 * @param {Element} container   The DOM element in which the Graph3d will
 *                              be created. Normally a div element.
 * @param {DataSet | DataView | Array} [data]
 * @param {object} [options]
 */
function Graph3d(container, data, options) {
  if (!(this instanceof Graph3d)) {
    throw new SyntaxError("Constructor must be called with the new operator");
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
Emitter(Graph3d.prototype);

/**
 * Calculate the scaling values, dependent on the range in x, y, and z direction
 */
Graph3d.prototype._setScale = function () {
  this.scale = new Point3d(
    1 / this.xRange.range(),
    1 / this.yRange.range(),
    1 / this.zRange.range()
  );

  // keep aspect ration between x and y scale if desired
  if (this.keepAspectRatio) {
    if (this.scale.x < this.scale.y) {
      //noinspection JSSuspiciousNameCombination
      this.scale.y = this.scale.x;
    } else {
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
  const xCenter = this.xRange.center() * this.scale.x;
  const yCenter = this.yRange.center() * this.scale.y;
  const zCenter = this.zRange.center() * this.scale.z;
  this.camera.setArmLocation(xCenter, yCenter, zCenter);
};

/**
 * Convert a 3D location to a 2D location on screen
 * Source: ttp://en.wikipedia.org/wiki/3D_projection
 *
 * @param   {Point3d} point3d  A 3D point with parameters x, y, z
 * @returns {Point2d} point2d  A 2D point with parameters x, y
 */
Graph3d.prototype._convert3Dto2D = function (point3d) {
  const translation = this._convertPointToTranslation(point3d);
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
Graph3d.prototype._convertPointToTranslation = function (point3d) {
  const cameraLocation = this.camera.getCameraLocation(),
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
    dy =
      sinTx *
        (cosTy * (az - cz) + sinTy * (sinTz * (ay - cy) + cosTz * (ax - cx))) +
      cosTx * (cosTz * (ay - cy) - sinTz * (ax - cx)),
    dz =
      cosTx *
        (cosTy * (az - cz) + sinTy * (sinTz * (ay - cy) + cosTz * (ax - cx))) -
      sinTx * (cosTz * (ay - cy) - sinTz * (ax - cx));

  return new Point3d(dx, dy, dz);
};

/**
 * Convert a translation point to a point on the screen
 *
 * @param   {Point3d} translation A 3D point with parameters x, y, z This is
 *                                the translation of the point, seen from the
 *                                camera.
 * @returns {Point2d} point2d     A 2D point with parameters x, y
 */
Graph3d.prototype._convertTranslationToScreen = function (translation) {
  const ex = this.eye.x,
    ey = this.eye.y,
    ez = this.eye.z,
    dx = translation.x,
    dy = translation.y,
    dz = translation.z;

  // calculate position on screen from translation
  let bx;
  let by;
  if (this.showPerspective) {
    bx = (dx - ex) * (ez / dz);
    by = (dy - ey) * (ez / dz);
  } else {
    bx = dx * -(ez / this.camera.getArmLength());
    by = dy * -(ez / this.camera.getArmLength());
  }

  // shift and scale the point to the center of the screen
  // use the width of the graph to scale both horizontally and vertically.
  return new Point2d(
    this.currentXCenter + bx * this.frame.canvas.clientWidth,
    this.currentYCenter - by * this.frame.canvas.clientWidth
  );
};

/**
 * Calculate the translations and screen positions of all points
 *
 * @param {Array.<Point3d>} points
 * @private
 */
Graph3d.prototype._calcTranslations = function (points) {
  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    point.trans = this._convertPointToTranslation(point.point);
    point.screen = this._convertTranslationToScreen(point.trans);

    // calculate the translation of the point at the bottom (needed for sorting)
    const transBottom = this._convertPointToTranslation(point.bottom);
    point.dist = this.showPerspective ? transBottom.length() : -transBottom.z;
  }

  // sort the points on depth of their (x,y) position (not on z)
  const sortDepth = function (a, b) {
    return b.dist - a.dist;
  };
  points.sort(sortDepth);
};

/**
 * Transfer min/max values to the Graph3d instance.
 */
Graph3d.prototype._initializeRanges = function () {
  // TODO: later on, all min/maxes of all datagroups will be combined here
  const dg = this.dataGroup;
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
 * @returns {Array.<object>}
 */
Graph3d.prototype.getDataPoints = function (data) {
  const dataPoints = [];

  for (let i = 0; i < data.length; i++) {
    const point = new Point3d();
    point.x = data[i][this.colX] || 0;
    point.y = data[i][this.colY] || 0;
    point.z = data[i][this.colZ] || 0;
    point.data = data[i];
    point.value = data[i][this.colValue] || 0;

    const obj = {};
    obj.point = point;
    obj.bottom = new Point3d(point.x, point.y, this.zRange.min);
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
  let x, y, i, obj;

  let dataPoints = [];

  if (
    this.style === Graph3d.STYLE.GRID ||
    this.style === Graph3d.STYLE.SURFACE
  ) {
    // copy all values from the data table to a matrix
    // the provided values are supposed to form a grid of (x,y) positions

    // create two lists with all present x and y values
    const dataX = this.dataGroup.getDistinctValues(this.colX, data);
    const dataY = this.dataGroup.getDistinctValues(this.colY, data);

    dataPoints = this.getDataPoints(data);

    // create a grid, a 2d matrix, with all values.
    const dataMatrix = []; // temporary data matrix
    for (i = 0; i < dataPoints.length; i++) {
      obj = dataPoints[i];

      // TODO: implement Array().indexOf() for Internet Explorer
      const xIndex = dataX.indexOf(obj.point.x);
      const yIndex = dataY.indexOf(obj.point.y);

      if (dataMatrix[xIndex] === undefined) {
        dataMatrix[xIndex] = [];
      }

      dataMatrix[xIndex][yIndex] = obj;
    }

    // fill in the pointers to the neighbors.
    for (x = 0; x < dataMatrix.length; x++) {
      for (y = 0; y < dataMatrix[x].length; y++) {
        if (dataMatrix[x][y]) {
          dataMatrix[x][y].pointRight =
            x < dataMatrix.length - 1 ? dataMatrix[x + 1][y] : undefined;
          dataMatrix[x][y].pointTop =
            y < dataMatrix[x].length - 1 ? dataMatrix[x][y + 1] : undefined;
          dataMatrix[x][y].pointCross =
            x < dataMatrix.length - 1 && y < dataMatrix[x].length - 1
              ? dataMatrix[x + 1][y + 1]
              : undefined;
        }
      }
    }
  } else {
    // 'dot', 'dot-line', etc.
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

  this.frame = document.createElement("div");
  this.frame.style.position = "relative";
  this.frame.style.overflow = "hidden";

  // create the graph canvas (HTML canvas element)
  this.frame.canvas = document.createElement("canvas");
  this.frame.canvas.style.position = "relative";
  this.frame.appendChild(this.frame.canvas);
  //if (!this.frame.canvas.getContext) {
  {
    const noCanvas = document.createElement("DIV");
    noCanvas.style.color = "red";
    noCanvas.style.fontWeight = "bold";
    noCanvas.style.padding = "10px";
    noCanvas.innerHTML = "Error: your browser does not support HTML canvas";
    this.frame.canvas.appendChild(noCanvas);
  }

  this.frame.filter = document.createElement("div");
  this.frame.filter.style.position = "absolute";
  this.frame.filter.style.bottom = "0px";
  this.frame.filter.style.left = "0px";
  this.frame.filter.style.width = "100%";
  this.frame.appendChild(this.frame.filter);

  // add event listeners to handle moving and zooming the contents
  const me = this;
  const onmousedown = function (event) {
    me._onMouseDown(event);
  };
  const ontouchstart = function (event) {
    me._onTouchStart(event);
  };
  const onmousewheel = function (event) {
    me._onWheel(event);
  };
  const ontooltip = function (event) {
    me._onTooltip(event);
  };
  const onclick = function (event) {
    me._onClick(event);
  };
  // TODO: these events are never cleaned up... can give a 'memory leakage'

  this.frame.canvas.addEventListener("mousedown", onmousedown);
  this.frame.canvas.addEventListener("touchstart", ontouchstart);
  this.frame.canvas.addEventListener("mousewheel", onmousewheel);
  this.frame.canvas.addEventListener("mousemove", ontooltip);
  this.frame.canvas.addEventListener("click", onclick);

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
Graph3d.prototype._setSize = function (width, height) {
  this.frame.style.width = width;
  this.frame.style.height = height;

  this._resizeCanvas();
};

/**
 * Resize the canvas to the current size of the frame
 */
Graph3d.prototype._resizeCanvas = function () {
  this.frame.canvas.style.width = "100%";
  this.frame.canvas.style.height = "100%";

  this.frame.canvas.width = this.frame.canvas.clientWidth;
  this.frame.canvas.height = this.frame.canvas.clientHeight;

  // adjust with for margin
  this.frame.filter.style.width = this.frame.canvas.clientWidth - 2 * 10 + "px";
};

/**
 * Start playing the animation, if requested and filter present. Only applicable
 * when animation data is available.
 */
Graph3d.prototype.animationStart = function () {
  // start animation when option is true
  if (!this.animationAutoStart || !this.dataGroup.dataFilter) return;

  if (!this.frame.filter || !this.frame.filter.slider)
    throw new Error("No animation available");

  this.frame.filter.slider.play();
};

/**
 * Stop animation
 */
Graph3d.prototype.animationStop = function () {
  if (!this.frame.filter || !this.frame.filter.slider) return;

  this.frame.filter.slider.stop();
};

/**
 * Resize the center position based on the current values in this.xCenter
 * and this.yCenter (which are strings with a percentage or a value
 * in pixels). The center positions are the variables this.currentXCenter
 * and this.currentYCenter
 */
Graph3d.prototype._resizeCenter = function () {
  // calculate the horizontal center position
  if (this.xCenter.charAt(this.xCenter.length - 1) === "%") {
    this.currentXCenter =
      (parseFloat(this.xCenter) / 100) * this.frame.canvas.clientWidth;
  } else {
    this.currentXCenter = parseFloat(this.xCenter); // supposed to be in px
  }

  // calculate the vertical center position
  if (this.yCenter.charAt(this.yCenter.length - 1) === "%") {
    this.currentYCenter =
      (parseFloat(this.yCenter) / 100) *
      (this.frame.canvas.clientHeight - this.frame.filter.clientHeight);
  } else {
    this.currentYCenter = parseFloat(this.yCenter); // supposed to be in px
  }
};

/**
 * Retrieve the current camera rotation
 *
 * @returns {object} An object with parameters horizontal, vertical, and
 *                   distance
 */
Graph3d.prototype.getCameraPosition = function () {
  const pos = this.camera.getArmRotation();
  pos.distance = this.camera.getArmLength();
  return pos;
};

/**
 * Load data into the 3D Graph
 *
 * @param {vis.DataSet} data
 * @private
 */
Graph3d.prototype._readData = function (data) {
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
 * @param {object} options
 */
Graph3d.prototype.setOptions = function (options) {
  if (options === undefined) return;

  const errorFound = Validator.validate(options, allOptions);
  if (errorFound === true) {
    console.error(
      "%cErrors have been found in the supplied options object.",
      VALIDATOR_PRINT_STYLE
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
Graph3d.prototype.setPointDrawingMethod = function () {
  let method = undefined;

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
      throw new Error(
        "Can not determine point drawing method " +
          "for graph style '" +
          this.style +
          "'"
      );
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
Graph3d.prototype.redraw = function () {
  if (this.dataPoints === undefined) {
    throw new Error("Graph data not initialized");
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
Graph3d.prototype._getContext = function () {
  const canvas = this.frame.canvas;
  const ctx = canvas.getContext("2d");

  ctx.lineJoin = "round";
  ctx.lineCap = "round";

  return ctx;
};

/**
 * Clear the canvas before redrawing
 */
Graph3d.prototype._redrawClear = function () {
  const canvas = this.frame.canvas;
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

Graph3d.prototype._dotSize = function () {
  return this.frame.clientWidth * this.dotSizeRatio;
};

/**
 * Get legend width
 *
 * @returns {*}
 * @private
 */
Graph3d.prototype._getLegendWidth = function () {
  let width;

  if (this.style === Graph3d.STYLE.DOTSIZE) {
    const dotSize = this._dotSize();
    //width =  dotSize / 2 + dotSize * 2;
    width = dotSize * this.dotSizeMaxFraction;
  } else if (this.style === Graph3d.STYLE.BARSIZE) {
    width = this.xBarWidth;
  } else {
    width = 20;
  }
  return width;
};

/**
 * Redraw the legend based on size, dot color, or surface height
 */
Graph3d.prototype._redrawLegend = function () {
  //Return without drawing anything, if no legend is specified
  if (this.showLegend !== true) {
    return;
  }

  // Do not draw legend when graph style does not support
  if (
    this.style === Graph3d.STYLE.LINE ||
    this.style === Graph3d.STYLE.BARSIZE //TODO add legend support for BARSIZE
  ) {
    return;
  }

  // Legend types - size and color. Determine if size legend.
  const isSizeLegend =
    this.style === Graph3d.STYLE.BARSIZE ||
    this.style === Graph3d.STYLE.DOTSIZE;

  // Legend is either tracking z values or style values. This flag if false means use z values.
  const isValueLegend =
    this.style === Graph3d.STYLE.DOTSIZE ||
    this.style === Graph3d.STYLE.DOTCOLOR ||
    this.style === Graph3d.STYLE.SURFACE ||
    this.style === Graph3d.STYLE.BARCOLOR;

  const height = Math.max(this.frame.clientHeight * 0.25, 100);
  const top = this.margin;
  const width = this._getLegendWidth(); // px - overwritten by size legend
  const right = this.frame.clientWidth - this.margin;
  const left = right - width;
  const bottom = top + height;

  const ctx = this._getContext();
  ctx.lineWidth = 1;
  ctx.font = "14px arial"; // TODO: put in options

  if (isSizeLegend === false) {
    // draw the color bar
    const ymin = 0;
    const ymax = height; // Todo: make height customizable
    let y;

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
    ctx.strokeStyle = this.axisColor;
    ctx.strokeRect(left, top, width, height);
  } else {
    // draw the size legend box
    let widthMin;
    if (this.style === Graph3d.STYLE.DOTSIZE) {
      // Get the proportion to max and min right
      widthMin = width * (this.dotSizeMinFraction / this.dotSizeMaxFraction);
    } else if (this.style === Graph3d.STYLE.BARSIZE) {
      //widthMin = this.xBarWidth * 0.2 this is wrong - barwidth measures in terms of xvalues
    }
    ctx.strokeStyle = this.axisColor;
    ctx.fillStyle = this.dataColor.fill;
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
  const gridLineLen = 5; // px

  const legendMin = isValueLegend ? this.valueRange.min : this.zRange.min;
  const legendMax = isValueLegend ? this.valueRange.max : this.zRange.max;
  const step = new StepNumber(
    legendMin,
    legendMax,
    (legendMax - legendMin) / 5,
    true
  );
  step.start(true);

  while (!step.end()) {
    const y =
      bottom -
      ((step.getCurrent() - legendMin) / (legendMax - legendMin)) * height;
    const from = new Point2d(left - gridLineLen, y);
    const to = new Point2d(left, y);
    this._line(ctx, from, to);

    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillStyle = this.axisColor;
    ctx.fillText(step.getCurrent(), left - 2 * gridLineLen, y);

    step.next();
  }

  ctx.textAlign = "right";
  ctx.textBaseline = "top";
  const label = this.legendLabel;
  ctx.fillText(label, right, bottom + this.margin);
};

/**
 * Redraw the filter
 */
Graph3d.prototype._redrawFilter = function () {
  const dataFilter = this.dataGroup.dataFilter;
  const filter = this.frame.filter;
  filter.innerHTML = "";

  if (!dataFilter) {
    filter.slider = undefined;
    return;
  }

  const options = {
    visible: this.showAnimationControls,
  };
  const slider = new Slider(filter, options);
  filter.slider = slider;

  // TODO: css here is not nice here...
  filter.style.padding = "10px";
  //this.frame.filter.style.backgroundColor = '#EFEFEF';

  slider.setValues(dataFilter.values);
  slider.setPlayInterval(this.animationInterval);

  // create an event handler
  const me = this;
  const onchange = function () {
    const dataFilter = me.dataGroup.dataFilter;
    const index = slider.getIndex();

    dataFilter.selectValue(index);
    me.dataPoints = dataFilter._getDataPoints();

    me.redraw();
  };

  slider.setOnChangeCallback(onchange);
};

/**
 * Redraw the slider
 */
Graph3d.prototype._redrawSlider = function () {
  if (this.frame.filter.slider !== undefined) {
    this.frame.filter.slider.redraw();
  }
};

/**
 * Redraw common information
 */
Graph3d.prototype._redrawInfo = function () {
  const info = this.dataGroup.getInfo();
  if (info === undefined) return;

  const ctx = this._getContext();

  ctx.font = "14px arial"; // TODO: put in options
  ctx.lineStyle = "gray";
  ctx.fillStyle = "gray";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";

  const x = this.margin;
  const y = this.margin;
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
Graph3d.prototype._line = function (ctx, from, to, strokeStyle) {
  if (strokeStyle !== undefined) {
    ctx.strokeStyle = strokeStyle;
  }

  ctx.beginPath();
  ctx.moveTo(from.x, from.y);
  ctx.lineTo(to.x, to.y);
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
Graph3d.prototype.drawAxisLabelX = function (
  ctx,
  point3d,
  text,
  armAngle,
  yMargin
) {
  if (yMargin === undefined) {
    yMargin = 0;
  }

  const point2d = this._convert3Dto2D(point3d);

  if (Math.cos(armAngle * 2) > 0) {
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    point2d.y += yMargin;
  } else if (Math.sin(armAngle * 2) < 0) {
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
  } else {
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
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
Graph3d.prototype.drawAxisLabelY = function (
  ctx,
  point3d,
  text,
  armAngle,
  yMargin
) {
  if (yMargin === undefined) {
    yMargin = 0;
  }

  const point2d = this._convert3Dto2D(point3d);

  if (Math.cos(armAngle * 2) < 0) {
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    point2d.y += yMargin;
  } else if (Math.sin(armAngle * 2) > 0) {
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
  } else {
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
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
Graph3d.prototype.drawAxisLabelZ = function (ctx, point3d, text, offset) {
  if (offset === undefined) {
    offset = 0;
  }

  const point2d = this._convert3Dto2D(point3d);
  ctx.textAlign = "right";
  ctx.textBaseline = "middle";
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
Graph3d.prototype.drawAxisLabelXRotate = function (
  ctx,
  point3d,
  text,
  armAngle,
  yMargin
) {
  if (yMargin === undefined) {
    yMargin = 0;
  }

  const point2d = this._convert3Dto2D(point3d);
  if (Math.cos(armAngle * 2) > 0) {
    ctx.save();
    ctx.translate(point2d.x, point2d.y);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillStyle = this.axisColor;
    ctx.fillText(text, 0, 0);
    ctx.restore();
  } else if (Math.sin(armAngle * 2) < 0) {
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillStyle = this.axisColor;
    ctx.fillText(text, point2d.x, point2d.y);
  } else {
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
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
Graph3d.prototype.drawAxisLabelYRotate = function (
  ctx,
  point3d,
  text,
  armAngle,
  yMargin
) {
  if (yMargin === undefined) {
    yMargin = 0;
  }

  const point2d = this._convert3Dto2D(point3d);
  if (Math.cos(armAngle * 2) < 0) {
    ctx.save();
    ctx.translate(point2d.x, point2d.y);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillStyle = this.axisColor;
    ctx.fillText(text, 0, 0);
    ctx.restore();
  } else if (Math.sin(armAngle * 2) > 0) {
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillStyle = this.axisColor;
    ctx.fillText(text, point2d.x, point2d.y);
  } else {
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
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

  const point2d = this._convert3Dto2D(point3d);
  ctx.textAlign = "right";
  ctx.textBaseline = "middle";
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
Graph3d.prototype._line3d = function (ctx, from, to, strokeStyle) {
  const from2d = this._convert3Dto2D(from);
  const to2d = this._convert3Dto2D(to);

  this._line(ctx, from2d, to2d, strokeStyle);
};

/**
 * Redraw the axis
 */
Graph3d.prototype._redrawAxis = function () {
  const ctx = this._getContext();
  let from,
    to,
    step,
    prettyStep,
    text,
    xText,
    yText,
    zText,
    offset,
    xOffset,
    yOffset;

  // TODO: get the actual rendered style of the containerElement
  //ctx.font = this.containerElement.style.font;
  //ctx.font = 24 / this.camera.getArmLength() + 'px arial';
  ctx.font =
    this.axisFontSize / this.camera.getArmLength() + "px " + this.axisFontType;

  // calculate the length for the short grid lines
  const gridLenX = 0.025 / this.scale.x;
  const gridLenY = 0.025 / this.scale.y;
  const textMargin = 5 / this.camera.getArmLength(); // px
  const armAngle = this.camera.getArmRotation().horizontal;
  const armVector = new Point2d(Math.cos(armAngle), Math.sin(armAngle));

  const xRange = this.xRange;
  const yRange = this.yRange;
  const zRange = this.zRange;
  let point3d;

  // draw x-grid lines
  ctx.lineWidth = 1;
  prettyStep = this.defaultXStep === undefined;
  step = new StepNumber(xRange.min, xRange.max, this.xStep, prettyStep);
  step.start(true);

  while (!step.end()) {
    const x = step.getCurrent();

    if (this.showGrid) {
      from = new Point3d(x, yRange.min, zRange.min);
      to = new Point3d(x, yRange.max, zRange.min);
      this._line3d(ctx, from, to, this.gridColor);
    } else if (this.showXAxis) {
      from = new Point3d(x, yRange.min, zRange.min);
      to = new Point3d(x, yRange.min + gridLenX, zRange.min);
      this._line3d(ctx, from, to, this.axisColor);

      from = new Point3d(x, yRange.max, zRange.min);
      to = new Point3d(x, yRange.max - gridLenX, zRange.min);
      this._line3d(ctx, from, to, this.axisColor);
    }

    if (this.showXAxis) {
      yText = armVector.x > 0 ? yRange.min : yRange.max;
      point3d = new Point3d(x, yText, zRange.min);
      const msg = "  " + this.xValueLabel(x) + "  ";
      this._drawAxisLabelX.call(this, ctx, point3d, msg, armAngle, textMargin);
    }

    step.next();
  }

  // draw y-grid lines
  ctx.lineWidth = 1;
  prettyStep = this.defaultYStep === undefined;
  step = new StepNumber(yRange.min, yRange.max, this.yStep, prettyStep);
  step.start(true);

  while (!step.end()) {
    const y = step.getCurrent();

    if (this.showGrid) {
      from = new Point3d(xRange.min, y, zRange.min);
      to = new Point3d(xRange.max, y, zRange.min);
      this._line3d(ctx, from, to, this.gridColor);
    } else if (this.showYAxis) {
      from = new Point3d(xRange.min, y, zRange.min);
      to = new Point3d(xRange.min + gridLenY, y, zRange.min);
      this._line3d(ctx, from, to, this.axisColor);

      from = new Point3d(xRange.max, y, zRange.min);
      to = new Point3d(xRange.max - gridLenY, y, zRange.min);
      this._line3d(ctx, from, to, this.axisColor);
    }

    if (this.showYAxis) {
      xText = armVector.y > 0 ? xRange.min : xRange.max;
      point3d = new Point3d(xText, y, zRange.min);
      const msg = "  " + this.yValueLabel(y) + "  ";
      this._drawAxisLabelY.call(this, ctx, point3d, msg, armAngle, textMargin);
    }

    step.next();
  }

  // draw z-grid lines and axis
  if (this.showZAxis) {
    ctx.lineWidth = 1;
    prettyStep = this.defaultZStep === undefined;
    step = new StepNumber(zRange.min, zRange.max, this.zStep, prettyStep);
    step.start(true);

    xText = armVector.x > 0 ? xRange.min : xRange.max;
    yText = armVector.y < 0 ? yRange.min : yRange.max;

    while (!step.end()) {
      const z = step.getCurrent();

      // TODO: make z-grid lines really 3d?
      const from3d = new Point3d(xText, yText, z);
      const from2d = this._convert3Dto2D(from3d);
      to = new Point2d(from2d.x - textMargin, from2d.y);
      this._line(ctx, from2d, to, this.axisColor);

      const msg = this.zValueLabel(z) + " ";
      this._drawAxisLabelZ.call(this, ctx, from3d, msg, 5);

      step.next();
    }

    ctx.lineWidth = 1;
    from = new Point3d(xText, yText, zRange.min);
    to = new Point3d(xText, yText, zRange.max);
    this._line3d(ctx, from, to, this.axisColor);
  }

  // draw x-axis
  if (this.showXAxis) {
    let xMin2d;
    let xMax2d;
    ctx.lineWidth = 1;

    // line at yMin
    xMin2d = new Point3d(xRange.min, yRange.min, zRange.min);
    xMax2d = new Point3d(xRange.max, yRange.min, zRange.min);
    this._line3d(ctx, xMin2d, xMax2d, this.axisColor);
    // line at ymax
    xMin2d = new Point3d(xRange.min, yRange.max, zRange.min);
    xMax2d = new Point3d(xRange.max, yRange.max, zRange.min);
    this._line3d(ctx, xMin2d, xMax2d, this.axisColor);
  }

  // draw y-axis
  if (this.showYAxis) {
    ctx.lineWidth = 1;
    // line at xMin
    from = new Point3d(xRange.min, yRange.min, zRange.min);
    to = new Point3d(xRange.min, yRange.max, zRange.min);
    this._line3d(ctx, from, to, this.axisColor);
    // line at xMax
    from = new Point3d(xRange.max, yRange.min, zRange.min);
    to = new Point3d(xRange.max, yRange.max, zRange.min);
    this._line3d(ctx, from, to, this.axisColor);
  }

  // draw x-label
  const xLabel = this.xLabel;
  if (xLabel.length > 0 && this.showXAxis) {
    yOffset = 0.1 / this.scale.y;
    xText = (xRange.max + 3 * xRange.min) / 4;
    yText = armVector.x > 0 ? yRange.min - yOffset : yRange.max + yOffset;
    text = new Point3d(xText, yText, zRange.min);
    this.drawAxisLabelX(ctx, text, xLabel, armAngle);
  }

  // draw y-label
  const yLabel = this.yLabel;
  if (yLabel.length > 0 && this.showYAxis) {
    xOffset = 0.1 / this.scale.x;
    xText = armVector.y > 0 ? xRange.min - xOffset : xRange.max + xOffset;
    yText = (yRange.max + 3 * yRange.min) / 4;
    text = new Point3d(xText, yText, zRange.min);

    this.drawAxisLabelY(ctx, text, yLabel, armAngle);
  }

  // draw z-label
  const zLabel = this.zLabel;
  if (zLabel.length > 0 && this.showZAxis) {
    offset = 30; // pixels.  // TODO: relate to the max width of the values on the z axis?
    xText = armVector.x > 0 ? xRange.min : xRange.max;
    yText = armVector.y < 0 ? yRange.min : yRange.max;
    zText = (zRange.max + 3 * zRange.min) / 4;
    text = new Point3d(xText, yText, zText);

    this.drawAxisLabelZ(ctx, text, zLabel, offset);
  }
};

/**
 *
 * @param {vis.Point3d} point
 * @returns {*}
 * @private
 */
Graph3d.prototype._getStrokeWidth = function (point) {
  if (point !== undefined) {
    if (this.showPerspective) {
      return (1 / -point.trans.z) * this.dataColor.strokeWidth;
    } else {
      return (
        -(this.eye.z / this.camera.getArmLength()) * this.dataColor.strokeWidth
      );
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
 * @param {object} point
 * @param {number} xWidth
 * @param {number} yWidth
 * @param {string} color
 * @param {string} borderColor
 * @private
 */
Graph3d.prototype._redrawBar = function (
  ctx,
  point,
  xWidth,
  yWidth,
  color,
  borderColor
) {
  let surface;

  // calculate all corner points
  const me = this;
  const point3d = point.point;
  const zMin = this.zRange.min;
  const top = [
    { point: new Point3d(point3d.x - xWidth, point3d.y - yWidth, point3d.z) },
    { point: new Point3d(point3d.x + xWidth, point3d.y - yWidth, point3d.z) },
    { point: new Point3d(point3d.x + xWidth, point3d.y + yWidth, point3d.z) },
    { point: new Point3d(point3d.x - xWidth, point3d.y + yWidth, point3d.z) },
  ];
  const bottom = [
    { point: new Point3d(point3d.x - xWidth, point3d.y - yWidth, zMin) },
    { point: new Point3d(point3d.x + xWidth, point3d.y - yWidth, zMin) },
    { point: new Point3d(point3d.x + xWidth, point3d.y + yWidth, zMin) },
    { point: new Point3d(point3d.x - xWidth, point3d.y + yWidth, zMin) },
  ];

  // calculate screen location of the points
  top.forEach(function (obj) {
    obj.screen = me._convert3Dto2D(obj.point);
  });
  bottom.forEach(function (obj) {
    obj.screen = me._convert3Dto2D(obj.point);
  });

  // create five sides, calculate both corner points and center points
  const surfaces = [
    { corners: top, center: Point3d.avg(bottom[0].point, bottom[2].point) },
    {
      corners: [top[0], top[1], bottom[1], bottom[0]],
      center: Point3d.avg(bottom[1].point, bottom[0].point),
    },
    {
      corners: [top[1], top[2], bottom[2], bottom[1]],
      center: Point3d.avg(bottom[2].point, bottom[1].point),
    },
    {
      corners: [top[2], top[3], bottom[3], bottom[2]],
      center: Point3d.avg(bottom[3].point, bottom[2].point),
    },
    {
      corners: [top[3], top[0], bottom[0], bottom[3]],
      center: Point3d.avg(bottom[0].point, bottom[3].point),
    },
  ];
  point.surfaces = surfaces;

  // calculate the distance of each of the surface centers to the camera
  for (let j = 0; j < surfaces.length; j++) {
    surface = surfaces[j];
    const transCenter = this._convertPointToTranslation(surface.center);
    surface.dist = this.showPerspective ? transCenter.length() : -transCenter.z;
    // TODO: this dept calculation doesn't work 100% of the cases due to perspective,
    //     but the current solution is fast/simple and works in 99.9% of all cases
    //     the issue is visible in example 14, with graph.setCameraPosition({horizontal: 2.97, vertical: 0.5, distance: 0.9})
  }

  // order the surfaces by their (translated) depth
  surfaces.sort(function (a, b) {
    const diff = b.dist - a.dist;
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
Graph3d.prototype._polygon = function (ctx, points, fillStyle, strokeStyle) {
  if (points.length < 2) {
    return;
  }

  if (fillStyle !== undefined) {
    ctx.fillStyle = fillStyle;
  }
  if (strokeStyle !== undefined) {
    ctx.strokeStyle = strokeStyle;
  }
  ctx.beginPath();
  ctx.moveTo(points[0].screen.x, points[0].screen.y);

  for (let i = 1; i < points.length; ++i) {
    const point = points[i];
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
Graph3d.prototype._drawCircle = function (
  ctx,
  point,
  color,
  borderColor,
  size
) {
  const radius = this._calcRadius(point, size);

  ctx.lineWidth = this._getStrokeWidth(point);
  ctx.strokeStyle = borderColor;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(point.screen.x, point.screen.y, radius, 0, Math.PI * 2, true);
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
Graph3d.prototype._getColorsRegular = function (point) {
  const f = (point.point.value - this.valueRange.min) * this.scale.value;
  const color = this._colormap(f, 1);
  const borderColor = this._colormap(f, 0.8);
  return {
    fill: color,
    border: borderColor,
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
 *
 * @param {object} point
 * @returns {{fill: *, border: *}}
 * @private
 */
Graph3d.prototype._getColorsColor = function (point) {
  // calculate the color based on the value
  let color, borderColor, pointStyle;
  if (point && point.point && point.point.data && point.point.data.style) {
    pointStyle = point.point.data.style;
  }
  if (
    pointStyle &&
    typeof pointStyle === "object" &&
    pointStyle.fill &&
    pointStyle.stroke
  ) {
    return {
      fill: pointStyle.fill,
      border: pointStyle.stroke,
    };
  }

  if (typeof point.point.value === "string") {
    color = point.point.value;
    borderColor = point.point.value;
  } else {
    const f = (point.point.value - this.valueRange.min) * this.scale.value;
    color = this._colormap(f, 1);
    borderColor = this._colormap(f, 0.8);
  }
  return {
    fill: color,
    border: borderColor,
  };
};

/**
 * Get the colors for the 'size' graph styles.
 * These styles are currently: 'bar-size' and 'dot-size'
 *
 * @returns {{fill: *, border: (string|colorOptions.stroke|{string, undefined}|string|colorOptions.stroke|{string}|*)}}
 * @private
 */
Graph3d.prototype._getColorsSize = function () {
  return {
    fill: this.dataColor.fill,
    border: this.dataColor.stroke,
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
Graph3d.prototype._colormap = function (x, v = 1) {
  let r, g, b, a;
  const colormap = this.colormap;
  if (Array.isArray(colormap)) {
    const maxIndex = colormap.length - 1;
    const startIndex = Math.max(Math.floor(x * maxIndex), 0);
    const endIndex = Math.min(startIndex + 1, maxIndex);
    const innerRatio = x * maxIndex - startIndex;
    const min = colormap[startIndex];
    const max = colormap[endIndex];
    r = min.r + innerRatio * (max.r - min.r);
    g = min.g + innerRatio * (max.g - min.g);
    b = min.b + innerRatio * (max.b - min.b);
  } else if (typeof colormap === "function") {
    ({ r, g, b, a } = colormap(x));
  } else {
    const hue = (1 - x) * 240;
    ({ r, g, b } = util.HSVToRGB(hue / 360, 1, 1));
  }
  if (typeof a === "number" && !Number.isNaN(a)) {
    return `RGBA(${Math.round(r * v)}, ${Math.round(g * v)}, ${Math.round(
      b * v
    )}, ${a})`;
  } else {
    return `RGB(${Math.round(r * v)}, ${Math.round(g * v)}, ${Math.round(
      b * v
    )})`;
  }
};

/**
 * Determine the size of a point on-screen, as determined by the
 * distance to the camera.
 *
 * @param {object} point
 * @param {number} [size=this._dotSize()] the size that needs to be translated to screen coordinates.
 *             optional; if not passed, use the default point size.
 * @returns {number}
 * @private
 */
Graph3d.prototype._calcRadius = function (point, size) {
  if (size === undefined) {
    size = this._dotSize();
  }

  let radius;
  if (this.showPerspective) {
    radius = size / -point.trans.z;
  } else {
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
 * @param {object} point
 * @private
 */
Graph3d.prototype._redrawBarGraphPoint = function (ctx, point) {
  const xWidth = this.xBarWidth / 2;
  const yWidth = this.yBarWidth / 2;
  const colors = this._getColorsRegular(point);

  this._redrawBar(ctx, point, xWidth, yWidth, colors.fill, colors.border);
};

/**
 * Draw single datapoint for graph style 'bar-color'.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {object} point
 * @private
 */
Graph3d.prototype._redrawBarColorGraphPoint = function (ctx, point) {
  const xWidth = this.xBarWidth / 2;
  const yWidth = this.yBarWidth / 2;
  const colors = this._getColorsColor(point);

  this._redrawBar(ctx, point, xWidth, yWidth, colors.fill, colors.border);
};

/**
 * Draw single datapoint for graph style 'bar-size'.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {object} point
 * @private
 */
Graph3d.prototype._redrawBarSizeGraphPoint = function (ctx, point) {
  // calculate size for the bar
  const fraction =
    (point.point.value - this.valueRange.min) / this.valueRange.range();
  const xWidth = (this.xBarWidth / 2) * (fraction * 0.8 + 0.2);
  const yWidth = (this.yBarWidth / 2) * (fraction * 0.8 + 0.2);

  const colors = this._getColorsSize();

  this._redrawBar(ctx, point, xWidth, yWidth, colors.fill, colors.border);
};

/**
 * Draw single datapoint for graph style 'dot'.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {object} point
 * @private
 */
Graph3d.prototype._redrawDotGraphPoint = function (ctx, point) {
  const colors = this._getColorsRegular(point);

  this._drawCircle(ctx, point, colors.fill, colors.border);
};

/**
 * Draw single datapoint for graph style 'dot-line'.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {object} point
 * @private
 */
Graph3d.prototype._redrawDotLineGraphPoint = function (ctx, point) {
  // draw a vertical line from the XY-plane to the graph value
  const from = this._convert3Dto2D(point.bottom);
  ctx.lineWidth = 1;
  this._line(ctx, from, point.screen, this.gridColor);

  this._redrawDotGraphPoint(ctx, point);
};

/**
 * Draw single datapoint for graph style 'dot-color'.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {object} point
 * @private
 */
Graph3d.prototype._redrawDotColorGraphPoint = function (ctx, point) {
  const colors = this._getColorsColor(point);

  this._drawCircle(ctx, point, colors.fill, colors.border);
};

/**
 * Draw single datapoint for graph style 'dot-size'.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {object} point
 * @private
 */
Graph3d.prototype._redrawDotSizeGraphPoint = function (ctx, point) {
  const dotSize = this._dotSize();
  const fraction =
    (point.point.value - this.valueRange.min) / this.valueRange.range();

  const sizeMin = dotSize * this.dotSizeMinFraction;
  const sizeRange = dotSize * this.dotSizeMaxFraction - sizeMin;
  const size = sizeMin + sizeRange * fraction;

  const colors = this._getColorsSize();

  this._drawCircle(ctx, point, colors.fill, colors.border, size);
};

/**
 * Draw single datapoint for graph style 'surface'.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {object} point
 * @private
 */
Graph3d.prototype._redrawSurfaceGraphPoint = function (ctx, point) {
  const right = point.pointRight;
  const top = point.pointTop;
  const cross = point.pointCross;

  if (
    point === undefined ||
    right === undefined ||
    top === undefined ||
    cross === undefined
  ) {
    return;
  }

  let topSideVisible = true;
  let fillStyle;
  let strokeStyle;
  let cosViewAngle;

  if (this.showGrayBottom || this.showShadow) {
    // calculate the cross product of the two vectors from center
    // to left and right, in order to know whether we are looking at the
    // bottom or at the top side. We can also use the cross product
    // for calculating light intensity
    const aDiff = Point3d.subtract(cross.trans, point.trans);
    const bDiff = Point3d.subtract(top.trans, right.trans);
    const surfaceNormal = Point3d.crossProduct(aDiff, bDiff);

    if (this.showPerspective) {
      const surfacePosition = Point3d.avg(
        Point3d.avg(point.trans, cross.trans),
        Point3d.avg(right.trans, top.trans)
      );
      // This corresponds to diffuse lighting with light source at (0, 0, 0).
      // More generally, we would need `surfacePosition - lightPosition`:
      cosViewAngle = -Point3d.dotProduct(
        surfaceNormal.normalize(),
        surfacePosition.normalize()
      );
    } else {
      cosViewAngle = surfaceNormal.z / surfaceNormal.length();
    }
    topSideVisible = cosViewAngle > 0;
  }

  if (topSideVisible || !this.showGrayBottom) {
    const vAvg =
      (point.point.value +
        right.point.value +
        top.point.value +
        cross.point.value) /
      4;
    const ratio = (vAvg - this.valueRange.min) * this.scale.value;
    // lighting factor. TODO: let user specify lighting model as function(?)
    const v = this.showShadow ? (1 + cosViewAngle) / 2 : 1;
    fillStyle = this._colormap(ratio, v);
  } else {
    fillStyle = "gray";
  }

  if (this.showSurfaceGrid) {
    strokeStyle = this.axisColor; // TODO: should be customizable
  } else {
    strokeStyle = fillStyle;
  }

  ctx.lineWidth = this._getStrokeWidth(point);
  // TODO: only draw stroke when strokeWidth > 0

  const points = [point, right, cross, top];
  this._polygon(ctx, points, fillStyle, strokeStyle);
};

/**
 * Helper method for _redrawGridGraphPoint()
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {object} from
 * @param {object} to
 * @private
 */
Graph3d.prototype._drawGridLine = function (ctx, from, to) {
  if (from === undefined || to === undefined) {
    return;
  }

  const vAvg = (from.point.value + to.point.value) / 2;
  const f = (vAvg - this.valueRange.min) * this.scale.value;

  ctx.lineWidth = this._getStrokeWidth(from) * 2;
  ctx.strokeStyle = this._colormap(f, 1);
  this._line(ctx, from.screen, to.screen);
};

/**
 * Draw single datapoint for graph style 'Grid'.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {object} point
 * @private
 */
Graph3d.prototype._redrawGridGraphPoint = function (ctx, point) {
  this._drawGridLine(ctx, point, point.pointRight);
  this._drawGridLine(ctx, point, point.pointTop);
};

/**
 * Draw single datapoint for graph style 'line'.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {object} point
 * @private
 */
Graph3d.prototype._redrawLineGraphPoint = function (ctx, point) {
  if (point.pointNext === undefined) {
    return;
  }

  ctx.lineWidth = this._getStrokeWidth(point);
  ctx.strokeStyle = this.dataColor.stroke;

  this._line(ctx, point.screen, point.pointNext.screen);
};

/**
 * Draw all datapoints for currently selected graph style.
 *
 */
Graph3d.prototype._redrawDataGraph = function () {
  const ctx = this._getContext();
  let i;

  if (this.dataPoints === undefined || this.dataPoints.length <= 0) return; // TODO: throw exception?

  this._calcTranslations(this.dataPoints);

  for (i = 0; i < this.dataPoints.length; i++) {
    const point = this.dataPoints[i];

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
Graph3d.prototype._storeMousePosition = function (event) {
  // get mouse position (different code for IE and all other browsers)
  this.startMouseX = getMouseX(event);
  this.startMouseY = getMouseY(event);

  this._startCameraOffset = this.camera.getOffset();
};

/**
 * Start a moving operation inside the provided parent element
 *
 * @param {Event}     event     The event that occurred (required for
 *                  retrieving the  mouse position)
 */
Graph3d.prototype._onMouseDown = function (event) {
  event = event || window.event;

  // check if mouse is still down (may be up when focus is lost for example
  // in an iframe)
  if (this.leftButtonDown) {
    this._onMouseUp(event);
  }

  // only react on left mouse button down
  this.leftButtonDown = event.which ? event.which === 1 : event.button === 1;
  if (!this.leftButtonDown && !this.touchDown) return;

  this._storeMousePosition(event);

  this.startStart = new Date(this.start);
  this.startEnd = new Date(this.end);
  this.startArmRotation = this.camera.getArmRotation();

  this.frame.style.cursor = "move";

  // add event listeners to handle moving the contents
  // we store the function onmousemove and onmouseup in the graph, so we can
  // remove the eventlisteners lateron in the function mouseUp()
  const me = this;
  this.onmousemove = function (event) {
    me._onMouseMove(event);
  };
  this.onmouseup = function (event) {
    me._onMouseUp(event);
  };
  document.addEventListener("mousemove", me.onmousemove);
  document.addEventListener("mouseup", me.onmouseup);
  util.preventDefault(event);
};

/**
 * Perform moving operating.
 * This function activated from within the funcion Graph.mouseDown().
 *
 * @param {Event}   event  Well, eehh, the event
 */
Graph3d.prototype._onMouseMove = function (event) {
  this.moving = true;
  event = event || window.event;

  // calculate change in mouse position
  const diffX = parseFloat(getMouseX(event)) - this.startMouseX;
  const diffY = parseFloat(getMouseY(event)) - this.startMouseY;

  // move with ctrl or rotate by other
  if (event && event.ctrlKey === true) {
    // calculate change in mouse position
    const scaleX = this.frame.clientWidth * 0.5;
    const scaleY = this.frame.clientHeight * 0.5;

    const offXNew =
      (this._startCameraOffset.x || 0) -
      (diffX / scaleX) * this.camera.armLength * 0.8;
    const offYNew =
      (this._startCameraOffset.y || 0) +
      (diffY / scaleY) * this.camera.armLength * 0.8;

    this.camera.setOffset(offXNew, offYNew);
    this._storeMousePosition(event);
  } else {
    let horizontalNew = this.startArmRotation.horizontal + diffX / 200;
    let verticalNew = this.startArmRotation.vertical + diffY / 200;

    const snapAngle = 4; // degrees
    const snapValue = Math.sin((snapAngle / 360) * 2 * Math.PI);

    // snap horizontally to nice angles at 0pi, 0.5pi, 1pi, 1.5pi, etc...
    // the -0.001 is to take care that the vertical axis is always drawn at the left front corner
    if (Math.abs(Math.sin(horizontalNew)) < snapValue) {
      horizontalNew = Math.round(horizontalNew / Math.PI) * Math.PI - 0.001;
    }
    if (Math.abs(Math.cos(horizontalNew)) < snapValue) {
      horizontalNew =
        (Math.round(horizontalNew / Math.PI - 0.5) + 0.5) * Math.PI - 0.001;
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
  const parameters = this.getCameraPosition();
  this.emit("cameraPositionChange", parameters);

  util.preventDefault(event);
};

/**
 * Stop moving operating.
 * This function activated from within the funcion Graph.mouseDown().
 *
 * @param {Event}  event   The event
 */
Graph3d.prototype._onMouseUp = function (event) {
  this.frame.style.cursor = "auto";
  this.leftButtonDown = false;

  // remove event listeners here
  util.removeEventListener(document, "mousemove", this.onmousemove);
  util.removeEventListener(document, "mouseup", this.onmouseup);
  util.preventDefault(event);
};

/**
 * @param {Event}  event   The event
 */
Graph3d.prototype._onClick = function (event) {
  // NOTE: onclick_callback is deprecated and may be removed in a future version.
  if (!this.onclick_callback && !this.hasListeners("click")) return;
  if (!this.moving) {
    const boundingRect = this.frame.getBoundingClientRect();
    const mouseX = getMouseX(event) - boundingRect.left;
    const mouseY = getMouseY(event) - boundingRect.top;
    const dataPoint = this._dataPointFromXY(mouseX, mouseY);
    if (dataPoint) {
      if (this.onclick_callback) this.onclick_callback(dataPoint.point.data);
      this.emit("click", dataPoint.point.data);
    }
  } else {
    // disable onclick callback, if it came immediately after rotate/pan
    this.moving = false;
  }
  util.preventDefault(event);
};

/**
 * After having moved the mouse, a tooltip should pop up when the mouse is resting on a data point
 *
 * @param {Event}  event   A mouse move event
 */
Graph3d.prototype._onTooltip = function (event) {
  const delay = this.tooltipDelay; // ms
  const boundingRect = this.frame.getBoundingClientRect();
  const mouseX = getMouseX(event) - boundingRect.left;
  const mouseY = getMouseY(event) - boundingRect.top;

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
    const dataPoint = this._dataPointFromXY(mouseX, mouseY);
    if (dataPoint !== this.tooltip.dataPoint) {
      // datapoint changed
      if (dataPoint) {
        this._showTooltip(dataPoint);
      } else {
        this._hideTooltip();
      }
    }
  } else {
    // tooltip is currently not visible
    const me = this;
    this.tooltipTimeout = setTimeout(function () {
      me.tooltipTimeout = null;

      // show a tooltip if we have a data point
      const dataPoint = me._dataPointFromXY(mouseX, mouseY);
      if (dataPoint) {
        me._showTooltip(dataPoint);
      }
    }, delay);
  }
};

/**
 * Event handler for touchstart event on mobile devices
 *
 * @param {Event}  event   The event
 */
Graph3d.prototype._onTouchStart = function (event) {
  this.touchDown = true;

  const me = this;
  this.ontouchmove = function (event) {
    me._onTouchMove(event);
  };
  this.ontouchend = function (event) {
    me._onTouchEnd(event);
  };
  document.addEventListener("touchmove", me.ontouchmove);
  document.addEventListener("touchend", me.ontouchend);

  this._onMouseDown(event);
};

/**
 * Event handler for touchmove event on mobile devices
 *
 * @param {Event}  event   The event
 */
Graph3d.prototype._onTouchMove = function (event) {
  this._onMouseMove(event);
};

/**
 * Event handler for touchend event on mobile devices
 *
 * @param {Event}  event   The event
 */
Graph3d.prototype._onTouchEnd = function (event) {
  this.touchDown = false;

  util.removeEventListener(document, "touchmove", this.ontouchmove);
  util.removeEventListener(document, "touchend", this.ontouchend);

  this._onMouseUp(event);
};

/**
 * Event handler for mouse wheel event, used to zoom the graph
 * Code from http://adomas.org/javascript-mouse-wheel/
 *
 * @param {Event}  event   The event
 */
Graph3d.prototype._onWheel = function (event) {
  if (!event) /* For IE. */ event = window.event;
  if (this.zoomable && (!this.ctrlToZoom || event.ctrlKey)) {
    // retrieve delta
    let delta = 0;
    if (event.wheelDelta) {
      /* IE/Opera. */
      delta = event.wheelDelta / 120;
    } else if (event.detail) {
      /* Mozilla case. */
      // In Mozilla, sign of delta is different than in IE.
      // Also, delta is multiple of 3.
      delta = -event.detail / 3;
    }

    // If delta is nonzero, handle it.
    // Basically, delta is now positive if wheel was scrolled up,
    // and negative, if wheel was scrolled down.
    if (delta) {
      const oldLength = this.camera.getArmLength();
      const newLength = oldLength * (1 - delta / 10);

      this.camera.setArmLength(newLength);
      this.redraw();

      this._hideTooltip();
    }

    // fire a cameraPositionChange event
    const parameters = this.getCameraPosition();
    this.emit("cameraPositionChange", parameters);

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
  const a = triangle[0],
    b = triangle[1],
    c = triangle[2];

  /**
   *
   * @param {number} x
   * @returns {number}
   */
  function sign(x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
  }

  const as = sign(
    (b.x - a.x) * (point.y - a.y) - (b.y - a.y) * (point.x - a.x)
  );
  const bs = sign(
    (c.x - b.x) * (point.y - b.y) - (c.y - b.y) * (point.x - b.x)
  );
  const cs = sign(
    (a.x - c.x) * (point.y - c.y) - (a.y - c.y) * (point.x - c.x)
  );

  // each of the three signs must be either equal to each other or zero
  return (
    (as == 0 || bs == 0 || as == bs) &&
    (bs == 0 || cs == 0 || bs == cs) &&
    (as == 0 || cs == 0 || as == cs)
  );
};

/**
 * Find a data point close to given screen position (x, y)
 *
 * @param   {number} x
 * @param   {number} y
 * @returns {object | null} The closest data point or null if not close to any
 *                          data point
 * @private
 */
Graph3d.prototype._dataPointFromXY = function (x, y) {
  const distMax = 100; // px
  const center = new Point2d(x, y);
  let i,
    dataPoint = null,
    closestDataPoint = null,
    closestDist = null;

  if (
    this.style === Graph3d.STYLE.BAR ||
    this.style === Graph3d.STYLE.BARCOLOR ||
    this.style === Graph3d.STYLE.BARSIZE
  ) {
    // the data points are ordered from far away to closest
    for (i = this.dataPoints.length - 1; i >= 0; i--) {
      dataPoint = this.dataPoints[i];
      const surfaces = dataPoint.surfaces;
      if (surfaces) {
        for (let s = surfaces.length - 1; s >= 0; s--) {
          // split each surface in two triangles, and see if the center point is inside one of these
          const surface = surfaces[s];
          const corners = surface.corners;
          const triangle1 = [
            corners[0].screen,
            corners[1].screen,
            corners[2].screen,
          ];
          const triangle2 = [
            corners[2].screen,
            corners[3].screen,
            corners[0].screen,
          ];
          if (
            this._insideTriangle(center, triangle1) ||
            this._insideTriangle(center, triangle2)
          ) {
            // return immediately at the first hit
            return dataPoint;
          }
        }
      }
    }
  } else {
    // find the closest data point, using distance to the center of the point on 2d screen
    for (i = 0; i < this.dataPoints.length; i++) {
      dataPoint = this.dataPoints[i];
      const point = dataPoint.screen;
      if (point) {
        const distX = Math.abs(x - point.x);
        const distY = Math.abs(y - point.y);
        const dist = Math.sqrt(distX * distX + distY * distY);

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
Graph3d.prototype.hasBars = function (style) {
  return (
    style == Graph3d.STYLE.BAR ||
    style == Graph3d.STYLE.BARCOLOR ||
    style == Graph3d.STYLE.BARSIZE
  );
};

/**
 * Display a tooltip for given data point
 *
 * @param {object} dataPoint
 * @private
 */
Graph3d.prototype._showTooltip = function (dataPoint) {
  let content, line, dot;

  if (!this.tooltip) {
    content = document.createElement("div");
    Object.assign(content.style, {}, this.tooltipStyle.content);
    content.style.position = "absolute";

    line = document.createElement("div");
    Object.assign(line.style, {}, this.tooltipStyle.line);
    line.style.position = "absolute";

    dot = document.createElement("div");
    Object.assign(dot.style, {}, this.tooltipStyle.dot);
    dot.style.position = "absolute";

    this.tooltip = {
      dataPoint: null,
      dom: {
        content: content,
        line: line,
        dot: dot,
      },
    };
  } else {
    content = this.tooltip.dom.content;
    line = this.tooltip.dom.line;
    dot = this.tooltip.dom.dot;
  }

  this._hideTooltip();

  this.tooltip.dataPoint = dataPoint;
  if (typeof this.showTooltip === "function") {
    content.innerHTML = this.showTooltip(dataPoint.point);
  } else {
    content.innerHTML =
      "<table>" +
      "<tr><td>" +
      this.xLabel +
      ":</td><td>" +
      dataPoint.point.x +
      "</td></tr>" +
      "<tr><td>" +
      this.yLabel +
      ":</td><td>" +
      dataPoint.point.y +
      "</td></tr>" +
      "<tr><td>" +
      this.zLabel +
      ":</td><td>" +
      dataPoint.point.z +
      "</td></tr>" +
      "</table>";
  }

  content.style.left = "0";
  content.style.top = "0";
  this.frame.appendChild(content);
  this.frame.appendChild(line);
  this.frame.appendChild(dot);

  // calculate sizes
  const contentWidth = content.offsetWidth;
  const contentHeight = content.offsetHeight;
  const lineHeight = line.offsetHeight;
  const dotWidth = dot.offsetWidth;
  const dotHeight = dot.offsetHeight;

  let left = dataPoint.screen.x - contentWidth / 2;
  left = Math.min(
    Math.max(left, 10),
    this.frame.clientWidth - 10 - contentWidth
  );

  line.style.left = dataPoint.screen.x + "px";
  line.style.top = dataPoint.screen.y - lineHeight + "px";
  content.style.left = left + "px";
  content.style.top = dataPoint.screen.y - lineHeight - contentHeight + "px";
  dot.style.left = dataPoint.screen.x - dotWidth / 2 + "px";
  dot.style.top = dataPoint.screen.y - dotHeight / 2 + "px";
};

/**
 * Hide the tooltip when displayed
 *
 * @private
 */
Graph3d.prototype._hideTooltip = function () {
  if (this.tooltip) {
    this.tooltip.dataPoint = null;

    for (const prop in this.tooltip.dom) {
      if (Object.prototype.hasOwnProperty.call(this.tooltip.dom, prop)) {
        const elem = this.tooltip.dom[prop];
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
function getMouseX(event) {
  if ("clientX" in event) return event.clientX;
  return (event.targetTouches[0] && event.targetTouches[0].clientX) || 0;
}

/**
 * Get the vertical mouse position from a mouse event
 *
 * @param   {Event}  event
 * @returns {number} mouse y
 */
function getMouseY(event) {
  if ("clientY" in event) return event.clientY;
  return (event.targetTouches[0] && event.targetTouches[0].clientY) || 0;
}

// -----------------------------------------------------------------------------
//  Public methods for specific settings
// -----------------------------------------------------------------------------

/**
 * Set the rotation and distance of the camera
 *
 * @param {object}  pos            An object with the camera position
 * @param {number} [pos.horizontal] The horizontal rotation, between 0 and 2*PI.
 *                                 Optional, can be left undefined.
 * @param {number} [pos.vertical]  The vertical rotation, between 0 and 0.5*PI.
 *                                 if vertical=0.5*PI, the graph is shown from
 *                                 the top. Optional, can be left undefined.
 * @param {number} [pos.distance]  The (normalized) distance of the camera to the
 *                                 center of the graph, a value between 0.71 and
 *                                 5.0. Optional, can be left undefined.
 */
Graph3d.prototype.setCameraPosition = function (pos) {
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
Graph3d.prototype.setSize = function (width, height) {
  this._setSize(width, height);
  this.redraw();
};

// -----------------------------------------------------------------------------
//  End public methods for specific settings
// -----------------------------------------------------------------------------

export default Graph3d;
