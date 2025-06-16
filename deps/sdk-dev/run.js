const path = require("path");
const os = require("os");
const { execSync } = require("child_process");
const fs = require("fs");

function getBinaryPath() {
  const platform = os.platform();
  const runtimeBaseDir = "runtime";
  const binaryName = "lvgljs";
  const binaryDir = platform === "darwin" ? "mac" : "linux";
  const binaryPath = path.join(__dirname, runtimeBaseDir, binaryDir, binaryName);
  
  if (!fs.existsSync(binaryPath)) {
    throw new Error(`Runtime binary not found at ${binaryPath}`);
  }
  return binaryPath;
}

function run(scriptPath, dir = "uncompressed") {
  const binaryPath = getBinaryPath();
  const buildDir = path.join(process.cwd(), "build", dir);
  const fullPath = path.join(buildDir, scriptPath);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Could not load '${scriptPath}' - file not found in ${buildDir}`);
  }

  try {
    execSync(`${binaryPath} run ${scriptPath}`, {
      cwd: buildDir,
      stdio: "inherit"
    });
  } catch (err) {
    throw new Error(`Failed to execute ${scriptPath}: ${err.message}`);
  }
}

module.exports = {
  run,
  getBinaryPath
};