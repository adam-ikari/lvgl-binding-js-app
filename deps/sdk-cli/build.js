import { compressFile } from "./compress.js";
import { resourcePlugin } from "./resources.js";
import esbuild from "esbuild";
import alias from "esbuild-plugin-alias";
import path from "path";

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

export async function _build(buildDir, manifest) {
  const entries = manifest.entries;
  const startTime = Date.now();

  // Run builds in parallel
  await Promise.all(
    entries.map(async (item) => {
      const entry = path.resolve(process.cwd(), item.entry);
      const outputFile = path.resolve(buildDir, `${item.name}.${item.type}.js`);

      const buildStart = Date.now();
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
        treeShaking: true, // 启用tree shaking
        format: "esm", // 使用ES模块格式
        target: "es2020", // 指定目标ES版本
        legalComments: "none", // 移除法律注释
        logLevel: "warning", // 减少日志输出
        plugins: [
          alias({
            "@": path.resolve(process.cwd(), "src"),
          }),
          excludeReactNativeModules,
          resourcePlugin,
        ],
      });

      if (process.env.NODE_ENV !== "development") {
        await compressFile(outputFile, outputFile);
      }
      console.log(`Built ${item.name} in ${(Date.now() - buildStart) / 1000}s`);
    }),
  );

  console.log(`Total build time: ${(Date.now() - startTime) / 1000}s`);
}
