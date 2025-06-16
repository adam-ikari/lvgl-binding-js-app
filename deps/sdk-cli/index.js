const path = require("path");
const fs = require("fs");
const { _build } = require("./build");
const { compressFile } = require("./compress");
const { run } = require("./run");

const buildDir = path.join("build", "uncompressed");
const compressedDir = path.join("build", "compressed");

async function build() {
  // 创建compressed文件夹
  if (!fs.existsSync(compressedDir)) {
    fs.mkdirSync(compressedDir, { recursive: true });
  }

  const manifest = JSON.parse(fs.readFileSync("manifest.json", "utf-8"));
  
  await _build(buildDir, manifest)
    .then(() => {
      console.log("All builds completed successfully.");
    })
    .catch((error) => {
      console.error("Build failed:", error);
    });
}

module.exports = {
  run,
  build
};
