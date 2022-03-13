////////////////////////////////////////////////////////////////////////////////
// This modules handles the options for Graph3d.
//
////////////////////////////////////////////////////////////////////////////////
import * as util from "vis-util/esnext";
import Camera from "./Camera";
import Point3d from "./Point3d";

// enumerate the available styles
const STYLE = {
  BAR: 0,
  BARCOLOR: 1,
  BARSIZE: 2,
  DOT: 3,
  DOTLINE: 4,
  DOTCOLOR: 5,
  DOTSIZE: 6,
  GRID: 7,
  LINE: 8,
  SURFACE: 9,
};

// The string representations of the styles
const STYLENAME = {
  dot: STYLE.DOT,
  "dot-line": STYLE.DOTLINE,
  "dot-color": STYLE.DOTCOLOR,
  "dot-size": STYLE.DOTSIZE,
  line: STYLE.LINE,
  grid: STYLE.GRID,
  surface: STYLE.SURFACE,
  bar: STYLE.BAR,
  "bar-color": STYLE.BARCOLOR,
  "bar-size": STYLE.BARSIZE,
};

/**
 * Field names in the options hash which are of relevance to the user.
 *
 * Specifically, these are the fields which require no special handling,
 * and can be directly copied over.
 */
const OPTIONKEYS = [
  "width",
  "height",
  "filterLabel",
  "legendLabel",
  "xLabel",
  "yLabel",
  "zLabel",
  "xValueLabel",
  "yValueLabel",
  "zValueLabel",
  "showXAxis",
  "showYAxis",
  "showZAxis",
  "showGrayBottom",
  "showGrid",
  "showPerspective",
  "showShadow",
  "showSurfaceGrid",
  "keepAspectRatio",
  "rotateAxisLabels",
  "verticalRatio",
  "dotSizeRatio",
  "dotSizeMinFraction",
  "dotSizeMaxFraction",
  "showAnimationControls",
  "animationInterval",
  "animationPreload",
  "animationAutoStart",
  "axisColor",
  "axisFontSize",
  "axisFontType",
  "gridColor",
  "xCenter",
  "yCenter",
  "zoomable",
  "tooltipDelay",
  "ctrlToZoom",
];

/**
 * Field names in the options hash which are of relevance to the user.
 *
 * Same as OPTIONKEYS, but internally these fields are stored with
 * prefix 'default' in the name.
 */
const PREFIXEDOPTIONKEYS = [
  "xBarWidth",
  "yBarWidth",
  "valueMin",
  "valueMax",
  "xMin",
  "xMax",
  "xStep",
  "yMin",
  "yMax",
  "yStep",
  "zMin",
  "zMax",
  "zStep",
];

// Placeholder for DEFAULTS reference
let DEFAULTS = undefined;

/**
 * Check if given hash is empty.
 *
 * Source: http://stackoverflow.com/a/679937
 *
 * @param {object} obj
 * @returns {boolean}
 */
function isEmpty(obj) {
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) return false;
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
 * @param {Array<string>} fields array with names of fields to copy
 * @param {string} [prefix] prefix to use for the target fields.
 */
function forceCopy(src, dst, fields, prefix) {
  let srcKey;
  let dstKey;

  for (let i = 0; i < fields.length; ++i) {
    srcKey = fields[i];
    dstKey = prefixFieldName(prefix, srcKey);

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
 * @param {Array<string>} fields array with names of fields to copy
 * @param {string} [prefix] prefix to use for the target fields.
 */
function safeCopy(src, dst, fields, prefix) {
  let srcKey;
  let dstKey;

  for (let i = 0; i < fields.length; ++i) {
    srcKey = fields[i];
    if (src[srcKey] === undefined) continue;

    dstKey = prefixFieldName(prefix, srcKey);

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
 *
 * @param {object} src
 * @param {object} dst
 */
function setDefaults(src, dst) {
  if (src === undefined || isEmpty(src)) {
    throw new Error("No DEFAULTS passed");
  }
  if (dst === undefined) {
    throw new Error("No dst passed");
  }

  // Remember defaults for future reference
  DEFAULTS = src;

  // Handle the defaults which can be simply copied over
  forceCopy(src, dst, OPTIONKEYS);
  forceCopy(src, dst, PREFIXEDOPTIONKEYS, "default");

  // Handle the more complex ('special') fields
  setSpecialSettings(src, dst);

  // Following are internal fields, not part of the user settings
  dst.margin = 10; // px
  dst.showTooltip = false;
  dst.onclick_callback = null;
  dst.eye = new Point3d(0, 0, -1); // TODO: set eye.z about 3/4 of the width of the window?
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
    throw new Error("No dst passed");
  }

  if (DEFAULTS === undefined || isEmpty(DEFAULTS)) {
    throw new Error("DEFAULTS not set for module Settings");
  }

  // Handle the parameters which can be simply copied over
  safeCopy(options, dst, OPTIONKEYS);
  safeCopy(options, dst, PREFIXEDOPTIONKEYS, "default");

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
      "`options.surfaceColors` is deprecated and may be removed in a future " +
        "version. Please use `options.colormap` instead. Note that the `colormap` " +
        "option uses the inverse array ordering (running from vMin to vMax)."
    );
    if (src.colormap !== undefined) {
      throw new Error(
        "The `colormap` and `surfaceColors` options are mutually exclusive."
      );
    }
    if (dst.style !== "surface") {
      console.warn(
        "Ignoring `surfaceColors` in graph style `" +
          dst.style +
          "` for " +
          "backward compatibility (only effective in `surface` plots)."
      );
    } else {
      setSurfaceColor(src.surfaceColors, dst);
    }
  } else {
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
        " Please use `Graph3d.on('click', handler)` instead."
    );
  }

  if (src.tooltipStyle !== undefined) {
    util.selectiveDeepExtend(["tooltipStyle"], dst, src);
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
    const isAutoByDefault = DEFAULTS.showLegend === undefined;

    if (isAutoByDefault) {
      // these styles default to having legends
      const isLegendGraphStyle =
        dst.style === STYLE.DOTCOLOR || dst.style === STYLE.DOTSIZE;

      dst.showLegend = isLegendGraphStyle;
    } else {
      // Leave current value as is
    }
  } else {
    dst.showLegend = showLegend;
  }
}

/**
 * Retrieve the style index from given styleName
 *
 * @param {string} styleName  Style name such as 'dot', 'grid', 'dot-line'
 * @returns {number} styleNumber Enumeration value representing the style, or -1
 *                when not found
 */
function getStyleNumberByName(styleName) {
  const number = STYLENAME[styleName];

  if (number === undefined) {
    return -1;
  }

  return number;
}

/**
 * Check if given number is a valid style number.
 *
 * @param {string | number} style
 * @returns {boolean} true if valid, false otherwise
 */
function checkStyleNumber(style) {
  let valid = false;

  for (const n in STYLE) {
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
 * @param {object} dst
 */
function setStyle(style, dst) {
  if (style === undefined) {
    return; // Nothing to do
  }

  let styleNumber;

  if (typeof style === "string") {
    styleNumber = getStyleNumberByName(style);

    if (styleNumber === -1) {
      throw new Error("Style '" + style + "' is invalid");
    }
  } else {
    // Do a pedantic check on style number value
    if (!checkStyleNumber(style)) {
      throw new Error("Style '" + style + "' is invalid");
    }

    styleNumber = style;
  }

  dst.style = styleNumber;
}

/**
 * Set the background styling for the graph
 *
 * @param {string | {fill: string, stroke: string, strokeWidth: string}} backgroundColor
 * @param {object} dst
 */
function setBackgroundColor(backgroundColor, dst) {
  let fill = "white";
  let stroke = "gray";
  let strokeWidth = 1;

  if (typeof backgroundColor === "string") {
    fill = backgroundColor;
    stroke = "none";
    strokeWidth = 0;
  } else if (typeof backgroundColor === "object") {
    if (backgroundColor.fill !== undefined) fill = backgroundColor.fill;
    if (backgroundColor.stroke !== undefined) stroke = backgroundColor.stroke;
    if (backgroundColor.strokeWidth !== undefined)
      strokeWidth = backgroundColor.strokeWidth;
  } else {
    throw new Error("Unsupported type of backgroundColor");
  }

  dst.frame.style.backgroundColor = fill;
  dst.frame.style.borderColor = stroke;
  dst.frame.style.borderWidth = strokeWidth + "px";
  dst.frame.style.borderStyle = "solid";
}

/**
 *
 * @param {string | object} dataColor
 * @param {object} dst
 */
function setDataColor(dataColor, dst) {
  if (dataColor === undefined) {
    return; // Nothing to do
  }

  if (dst.dataColor === undefined) {
    dst.dataColor = {};
  }

  if (typeof dataColor === "string") {
    dst.dataColor.fill = dataColor;
    dst.dataColor.stroke = dataColor;
  } else {
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
 * @param {object | Array<string>} surfaceColors Either an object that describes the HUE, or an array of HTML hex color codes
 * @param {object} dst
 */
function setSurfaceColor(surfaceColors, dst) {
  if (surfaceColors === undefined || surfaceColors === true) {
    return; // Nothing to do
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
  } else if (typeof surfaceColors === "object") {
    rgbColors = parseColorObject(surfaceColors.hue);
  } else {
    throw new Error("Unsupported type of surfaceColors");
  }
  // for some reason surfaceColors goes from vMax to vMin:
  rgbColors.reverse();
  dst.colormap = rgbColors;
}

/**
 *
 * @param {object | Array<string>} colormap Either an object that describes the HUE, or an array of HTML hex color codes
 * @param {object} dst
 */
function setColormap(colormap, dst) {
  if (colormap === undefined) {
    return;
  }

  let rgbColors;
  if (Array.isArray(colormap)) {
    rgbColors = parseColorArray(colormap);
  } else if (typeof colormap === "object") {
    rgbColors = parseColorObject(colormap.hue);
  } else if (typeof colormap === "function") {
    rgbColors = colormap;
  } else {
    throw new Error("Unsupported type of colormap");
  }
  dst.colormap = rgbColors;
}

/**
 *
 * @param {Array} colormap
 */
function parseColorArray(colormap) {
  if (colormap.length < 2) {
    throw new Error("Colormap array length must be 2 or above.");
  }
  return colormap.map(function (colorCode) {
    if (!util.isValidHex(colorCode)) {
      throw new Error(`Invalid hex color code supplied to colormap.`);
    }
    return util.hexToRGB(colorCode);
  });
}

/**
 * Converts an object to a certain amount of hex color stops. At which point:
 * the HTML hex color codes is converted into an RGB color object.
 *
 * @param {object} hues
 */
function parseColorObject(hues) {
  if (hues === undefined) {
    throw new Error("Unsupported type of colormap");
  }
  if (!(hues.saturation >= 0 && hues.saturation <= 100)) {
    throw new Error("Saturation is out of bounds. Expected range is 0-100.");
  }
  if (!(hues.brightness >= 0 && hues.brightness <= 100)) {
    throw new Error("Brightness is out of bounds. Expected range is 0-100.");
  }
  if (!(hues.colorStops >= 2)) {
    throw new Error("colorStops is out of bounds. Expected 2 or above.");
  }

  const hueStep = (hues.end - hues.start) / (hues.colorStops - 1);

  const rgbColors = [];
  for (let i = 0; i < hues.colorStops; ++i) {
    const hue = ((hues.start + hueStep * i) % 360) / 360;
    rgbColors.push(
      util.HSVToRGB(
        hue < 0 ? hue + 1 : hue,
        hues.saturation / 100,
        hues.brightness / 100
      )
    );
  }
  return rgbColors;
}

/**
 *
 * @param {object} cameraPosition
 * @param {object} dst
 */
function setCameraPosition(cameraPosition, dst) {
  const camPos = cameraPosition;
  if (camPos === undefined) {
    return;
  }

  if (dst.camera === undefined) {
    dst.camera = new Camera();
  }

  dst.camera.setArmRotation(camPos.horizontal, camPos.vertical);
  dst.camera.setArmLength(camPos.distance);
}

export { STYLE, setCameraPosition, setDefaults, setOptions };
