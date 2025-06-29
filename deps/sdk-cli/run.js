import { execSync } from "child_process";
import fs from "fs";
import os from "os";
import path from "path";
import { fileURLToPath } from "url";
import { buildDir } from "./config.js"

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function getBinaryPath() {
  const platform = os.platform();
  const runtimeBaseDir = "runtime";
  const binaryName = "lvgljs";
  const binaryDir = platform === "darwin" ? "mac" : "linux";
  const binaryPath = path.join(
    __dirname,
    runtimeBaseDir,
    binaryDir,
    binaryName,
  );

  if (!fs.existsSync(binaryPath)) {
    throw new Error(`Runtime binary not found at ${binaryPath}`);
  }
  return binaryPath;
}

export function run(scriptPath) {
  const binaryPath = getBinaryPath();
  const fullPath = path.join(process.cwd(), buildDir, scriptPath);

  if (!fs.existsSync(fullPath)) {
    throw new Error(
      `Could not load '${scriptPath}' - file not found in ${fullPath}`,
    );
  }

  try {
    execSync(`${binaryPath} run ${scriptPath}`, {
      cwd: buildDir,
      stdio: "inherit",
    });
  } catch (err) {
    throw new Error(`Failed to execute ${scriptPath}: ${err.message}`);
  }
}