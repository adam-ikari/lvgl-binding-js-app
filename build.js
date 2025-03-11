const path = require("path");
const alias = require("esbuild-plugin-alias");
const glob = require("glob");
const outDir = "build";

function build(pattern) {
  const jsxfiles = new glob.Glob(pattern, {});

  for (const file of jsxfiles) {
    const entry = path.resolve(__dirname, file);

    require("esbuild")
      .build({
        entryPoints: [entry],
        bundle: true,
        platform: "neutral",
        external: ["tjs:path"],
        outfile: path.resolve(outDir, "index.js"),
        define: {
          "process.env.NODE_ENV": '"development"',
        },
        plugins: [
          alias({
            "@": path.resolve(__dirname, "src"),
          }),
        ],
      })
      .then(() => console.log("Build %s complete", file))
      .catch(() => {
        process.exit(1);
      });
  }
}

build("src/index.{tsx,jsx}");
