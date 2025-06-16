const path = require("path");
const os = require("os");
const { execSync } = require("child_process");
const fs = require("fs");
const esbuild = require("esbuild");
const alias = require("esbuild-plugin-alias");

const excludeReactNativeModules = {
  name: "exclude-react-native-modules",
  setup(build) {
    build.onResolve({ filter: new RegExp(`^.*react-native.*$`) }, (args) => {
      return {
        path: args.path,
        namespace: "excluded-modules",
      };
    });

    build.onLoad({ filter: /.*/, namespace: "excluded-modules" }, () => ({
      contents: "module.exports = {};",
      loader: "js",
    }));
  },
};

async function _build(buildDir, manifest) {
  const entries = manifest.entries;

  for (const item of entries) {
    const entry = path.resolve(process.cwd(), item.entry);
    const outputFile = path.resolve(buildDir, `${item.name}.${item.type}.js`);

    await esbuild.build({
      entryPoints: [entry],
      bundle: true,
      platform: "neutral",
      external: ["tjs:path", "react-native"],
      outfile: outputFile,
      mainFields: ["module", "main"],
      define: {
        "process.env.NODE_ENV": `"${process.env.NODE_ENV || "development"}"`,
      },
      sourcemap: process.env.NODE_ENV === "development",
      loader: {
        ".wasm": "file",
      },
      metafile: true,
      plugins: [
        alias({
          "@": path.resolve(__dirname, "src"),
        }),
        excludeReactNativeModules,
        require('./resources').resourcePlugin
      ],
    });
  }
}

module.exports = {
  _build,
  excludeReactNativeModules
};