const path = require("path");
const esbuild = require("esbuild");
const alias = require("esbuild-plugin-alias");
const fs = require("fs");

const buildDir = "build";

async function build() {
  const manifest = JSON.parse(fs.readFileSync("manifest.json", "utf-8"));
  const entries = manifest.entries;

  for (const item of entries) {
    const entry = path.resolve(__dirname, item.entry);

    esbuild
      .build({
        entryPoints: [entry],
        bundle: true,
        platform: "neutral",
        external: ["tjs:path"],
        outfile: path.resolve(
          path.join(buildDir, manifest.package_name),
          `${item.name}.${item.type}.js`,
        ),
        define: {
          "process.env.NODE_ENV": '"development"',
        },
        plugins: [
          alias({
            "@": path.resolve(__dirname, "src"),
          }),
        ],
      })
      .then(() => console.log("Build %s complete", item))
      .catch(() => {
        process.exit(1);
      });
  }
}

build();
