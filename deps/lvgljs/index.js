const path = require('path');
const os = require('os');
const { execSync } = require('child_process');

function getBinaryPath() {
  const platform = os.platform();
  const binaryName = 'lvgljs';
  const binaryDir = platform === 'darwin' ? 'mac' : 'linux';
  return path.join(__dirname, binaryDir, binaryName);
}

function runBinary(scriptPath) {
  const binaryPath = getBinaryPath();
  execSync(`${binaryPath} run ${scriptPath}`, { stdio: 'inherit' });
}

module.exports = {
  getBinaryPath,
  runBinary
};