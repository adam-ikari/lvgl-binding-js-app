import path from "path";
import fs from "fs";
import { _build } from "./build.js";
import { run } from "./run.js";

const buildDir = path.join("dist");

export async function build() {
  // remove build directory if it exists
  if (fs.existsSync(buildDir)) {
    fs.rmSync(buildDir, { recursive: true, force: true });
  }

  // create build directory
  fs.mkdirSync(buildDir, { recursive: true });

  const manifest = JSON.parse(fs.readFileSync("manifest.json", "utf-8"));

  await _build(buildDir, manifest)
    .then(() => {
      console.log("All builds completed successfully.");
    })
    .catch((error) => {
      console.error("Build failed:", error);
    });
}

export { run };
