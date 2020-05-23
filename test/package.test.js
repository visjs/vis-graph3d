import snapshot from "snap-shot-it";
import { inspectNpmPack } from "vis-dev-utils";

describe("package", function () {
  it("exported files", function () {
    this.timeout("5m");
    snapshot(inspectNpmPack());
  });
});
