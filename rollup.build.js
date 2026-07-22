import { generateRollupConfiguration } from "vis-dev-utils";

import packageJSON from "./package.json" with { type: "json" };

export default generateRollupConfiguration({
  externalForPeerBuild: ["vis-data"],
  globals: {
    "@egjs/hammerjs": "Hammer",
    "component-emitter": "Emitter",
    "vis-data": "vis",
    "vis-util": "vis",
    keycharm: "keycharm",
    uuid: "uuidv4",
  },
  header: { name: "vis-graph3d" },
  libraryFilename: "vis-graph3d",
  entryPoints: "./lib",
  packageJSON,
});
