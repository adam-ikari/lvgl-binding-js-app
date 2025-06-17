const path = require("path");
const esbuild = require("esbuild");
const alias = require("esbuild-plugin-alias");

const { compressFile } = require("./compress");
const { resourcePlugin } = require('./resources')

// This plugin excludes React Native modules from the build process
// by resolving them to an empty module, preventing them from being bundled.
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
      absWorkingDir: process.cwd(),
      mainFields: ["module", "main"],
      define: {
        "process.env.NODE_ENV": `"${process.env.NODE_ENV || "development"}"`,
      },
      sourcemap: process.env.NODE_ENV === "development",
      loader: {
        ".wasm": "file",
        ".jpg": "file",
        ".jpeg": "file",
        ".png": "file",
        ".bmp": "file",
        ".gif": "file",
        ".svg": "file",
      },
      metafile: true,
      // minify: process.env.NODE_ENV !== "development",  // 启用esbuild内置minify
      treeShaking: true,  // 启用tree shaking
      splitting: true,  // 启用代码分割
      format: "esm",  // 使用ES模块格式
      target: "es2020",  // 指定目标ES版本
      legalComments: "none",  // 移除法律注释
      chunkNames: "chunks/[name]-[hash]",  // 代码分割后的chunk命名
      logLevel: "warning",  // 减少日志输出
      plugins: [
        alias({
          "@": path.resolve(__dirname, "src"),
        }),
        excludeReactNativeModules,
        resourcePlugin
      ],
    });

    if (process.env.NODE_ENV !== "development") {
      await compressFile(outputFile, outputFile);
    }
  }
}

module.exports = {
  _build,
  excludeReactNativeModules
};