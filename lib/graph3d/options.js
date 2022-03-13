/**
 * This object contains all possible options. It will check if the types are correct, if required if the option is one
 * of the allowed values.
 *
 * __any__ means that the name of the property does not matter.
 * __type__ is a required field for all objects and contains the allowed types of all objects
 */
const string = "string";
const bool = "boolean";
const number = "number";
const object = "object"; // should only be in a __type__ property
const array = "array";
// Following not used here, but useful for reference
//let dom      = 'dom';
//let any      = 'any';

const colorOptions = {
  fill: { string },
  stroke: { string },
  strokeWidth: { number },
  __type__: { string, object, undefined: "undefined" },
};

const surfaceColorsOptions = {
  hue: {
    start: { number },
    end: { number },
    saturation: { number },
    brightness: { number },
    colorStops: { number },
    __type__: { object },
  },
  __type__: { boolean: bool, array, object, undefined: "undefined" },
};

const colormapOptions = {
  hue: {
    start: { number },
    end: { number },
    saturation: { number },
    brightness: { number },
    colorStops: { number },
    __type__: { object },
  },
  __type__: { array, object, function: "function", undefined: "undefined" },
};

/**
 * Order attempted to be alphabetical.
 *   - x/y/z-prefixes ignored in sorting
 *   - __type__ always at end
 *   - globals at end
 */
const allOptions = {
  animationAutoStart: { boolean: bool, undefined: "undefined" },
  animationInterval: { number },
  animationPreload: { boolean: bool },
  axisColor: { string },
  axisFontSize: { number: number },
  axisFontType: { string: string },
  backgroundColor: colorOptions,
  xBarWidth: { number, undefined: "undefined" },
  yBarWidth: { number, undefined: "undefined" },
  cameraPosition: {
    distance: { number },
    horizontal: { number },
    vertical: { number },
    __type__: { object },
  },
  zoomable: { boolean: bool },
  ctrlToZoom: { boolean: bool },
  xCenter: { string },
  yCenter: { string },
  colormap: colormapOptions,
  dataColor: colorOptions,
  dotSizeMinFraction: { number },
  dotSizeMaxFraction: { number },
  dotSizeRatio: { number },
  filterLabel: { string },
  gridColor: { string },
  onclick: { function: "function" },
  keepAspectRatio: { boolean: bool },
  xLabel: { string },
  yLabel: { string },
  zLabel: { string },
  legendLabel: { string },
  xMin: { number, undefined: "undefined" },
  yMin: { number, undefined: "undefined" },
  zMin: { number, undefined: "undefined" },
  xMax: { number, undefined: "undefined" },
  yMax: { number, undefined: "undefined" },
  zMax: { number, undefined: "undefined" },
  showAnimationControls: { boolean: bool, undefined: "undefined" },
  showGrayBottom: { boolean: bool },
  showGrid: { boolean: bool },
  showLegend: { boolean: bool, undefined: "undefined" },
  showPerspective: { boolean: bool },
  showShadow: { boolean: bool },
  showSurfaceGrid: { boolean: bool },
  showXAxis: { boolean: bool },
  showYAxis: { boolean: bool },
  showZAxis: { boolean: bool },
  rotateAxisLabels: { boolean: bool },
  surfaceColors: surfaceColorsOptions,
  xStep: { number, undefined: "undefined" },
  yStep: { number, undefined: "undefined" },
  zStep: { number, undefined: "undefined" },
  style: {
    number, // TODO: either Graph3d.DEFAULT has string, or number allowed in documentation
    string: [
      "bar",
      "bar-color",
      "bar-size",
      "dot",
      "dot-line",
      "dot-color",
      "dot-size",
      "line",
      "grid",
      "surface",
    ],
  },
  tooltip: { boolean: bool, function: "function" },
  tooltipDelay: { number: number },
  tooltipStyle: {
    content: {
      color: { string },
      background: { string },
      border: { string },
      borderRadius: { string },
      boxShadow: { string },
      padding: { string },
      __type__: { object },
    },
    line: {
      borderLeft: { string },
      height: { string },
      width: { string },
      pointerEvents: { string },
      __type__: { object },
    },
    dot: {
      border: { string },
      borderRadius: { string },
      height: { string },
      width: { string },
      pointerEvents: { string },
      __type__: { object },
    },
    __type__: { object },
  },
  xValueLabel: { function: "function" },
  yValueLabel: { function: "function" },
  zValueLabel: { function: "function" },
  valueMax: { number, undefined: "undefined" },
  valueMin: { number, undefined: "undefined" },
  verticalRatio: { number },

  //globals :
  height: { string },
  width: { string },
  __type__: { object },
};

export { allOptions };
