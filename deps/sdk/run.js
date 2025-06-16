const path = require("path");
const os = require("os");
const { execSync } = require("child_process");

function getBinaryPath() {
  const platform = os.platform();
  const runtimeBaseDir = "runtime";
  const binaryName = "lvgljs";
  const binaryDir = platform === "darwin" ? "mac" : "linux";
  return path.join(__dirname, runtimeBaseDir, binaryDir, binaryName);
}

function run(scriptPath) {
  const binaryPath = getBinaryPath();
  execSync(`${binaryPath} run ${scriptPath}`, { stdio: "inherit" });
}

module.exports = {
  run,
  getBinaryPath
};