const path = require("path");
const esbuild = require("esbuild");
const alias = require("esbuild-plugin-alias");
const fs = require("fs");
const outDir = "build";

async function build() {
  const manifest = JSON.parse(fs.readFileSync("manifest.json", "utf-8"));
  const entries = manifest.entry;

  for (const [name, entryPath] of Object.entries(entries)) {
    const entry = path.resolve(__dirname, entryPath);

    esbuild
      .build({
        entryPoints: [entry],
        bundle: true,
        platform: "neutral",
        external: ["tjs:path"],
        outfile: path.resolve(outDir, `${name}.js`),
        define: {
          "process.env.NODE_ENV": '"development"',
        },
        plugins: [
          alias({
            "@": path.resolve(__dirname, "src"),
          }),
        ],
      })
      .then(() => console.log("Build %s complete", entryPath))
      .catch(() => {
        process.exit(1);
      });
  }
}

build();
