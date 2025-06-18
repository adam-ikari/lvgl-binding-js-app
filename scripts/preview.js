const { run } = require("sdk-cli");
const env = process.env.NODE_ENV || "development";

console.log(`Starting ${env} preview...`);
try {
  // TODO
  // should load the mainifests from the current directory
  run("main.view.js");
  console.log("Preview server started");
} catch (err) {
  console.error("Preview failed:", err);
  process.exit(1);
}
