import Hammer from "@egjs/hammerjs";
import keycharm from "keycharm";

import * as util from "vis-util/esnext";
import { DataSet, DataView, Queue } from "vis-data/esnext";

import Camera from "./lib/graph3d/Camera.js";
import DOMutil from "./lib/DOMutil.js";
import Filter from "./lib/graph3d/Filter.js";
import Graph3d from "./lib/graph3d/Graph3d.js";
import Point2d from "./lib/graph3d/Point2d.js";
import Point3d from "./lib/graph3d/Point3d.js";
import Slider from "./lib/graph3d/Slider.js";
import StepNumber from "./lib/graph3d/StepNumber.js";

export { util, DOMutil, DataSet, DataView, Queue, Graph3d, Hammer, keycharm };
export const graph3d = {
  Camera,
  Filter,
  Point2d,
  Point3d,
  Slider,
  StepNumber,
};

export default {
  util,
  DOMutil,
  DataSet,
  DataView,
  Queue,
  Graph3d,
  Hammer,
  keycharm,
  graph3d: {
    Camera,
    Filter,
    Point2d,
    Point3d,
    Slider,
    StepNumber,
  },
};
