const path = require("path");
const fs = require("fs");

const resourceExts = [
  ".wasm",
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".svg",
  ".woff",
  ".woff2",
  ".ttf",
  ".eot",
  ".otf",
  ".mp3",
  ".wav",
  ".ogg",
  ".mp4",
  ".webm"
];

const resourcePlugin = {
  name: "resource-copy-plugin",
  setup(build) {
    build.onLoad(
      { filter: new RegExp(`(${resourceExts.join("|")})$`) },
      (args) => {
        console.log(`Loading resource file: ${args.path}`);
        return {
          loader: "file",
          contents: fs.readFileSync(args.path),
        };
      }
    );

    build.onEnd(async (result) => {
      if (result.metafile) {
        for (const [outputPath, fileInfo] of Object.entries(
          result.metafile.outputs
        )) {
          const ext = path.extname(outputPath);
          if (resourceExts.includes(ext)) {
            const srcPath = path.resolve(outputPath);
            const baseDir = build.initialOptions.outdir || path.dirname(build.initialOptions.outfile);
            const destPath = path.join(
              baseDir,
              path.relative(baseDir, outputPath)
            );
            fs.mkdirSync(path.dirname(destPath), { recursive: true });
            fs.copyFileSync(srcPath, destPath);
            console.log(`Copied processed resource to: ${destPath}`);
          }
        }
      }
    });
  }
};

module.exports = {
  resourcePlugin,
  resourceExts
};