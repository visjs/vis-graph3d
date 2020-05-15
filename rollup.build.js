import packageJSON from "./package.json";
import { generateRollupConfiguration } from "vis-dev-utils";

export default generateRollupConfiguration({
  externalForPeerBuild: ["moment", "vis-data"],
  globals: {
    "component-emitter": "Emitter",
    "propagating-hammerjs": "propagating",
    "vis-data": "vis",
    "vis-util": "vis",
    hammerjs: "Hammer",
    keycharm: "keycharm",
    moment: "moment",
    uuid: "uuidv4"
  },
  header: { name: "vis-graph3d" },
  libraryFilename: "vis-graph3d",
  entryPoints: "./lib",
  packageJSON
});
