import { compressFile } from "./compress.js";
import { buildDir, esbuildConfig } from "./config.js";
import esbuild from "esbuild";
import fs from "fs";
import path from "path";

const destPath = path.resolve(buildDir, "manifest.json");

async function _build(buildDir, manifest) {
  const entries = manifest.entries;
  const startTime = Date.now();

  // Run builds in parallel
  await Promise.all(
    entries.map(async (item) => {
      const entry = path.resolve(process.cwd(), item.entry);
      const outputFile = path.resolve(buildDir, `${item.name}.${item.type}.js`);

      const buildStart = Date.now();

      await esbuild.build({
        ...esbuildConfig,
        entryPoints: [entry],
        outfile: outputFile,
      });

      if (process.env.NODE_ENV !== "development") {
        await compressFile(outputFile, outputFile);
      }
      console.log(`Built ${item.name} in ${(Date.now() - buildStart) / 1000}s`);
    }),
  );

  console.log(`Total build time: ${(Date.now() - startTime) / 1000}s`);

  // Update and write manifest.json to build directory
  try {
    // Update entry paths to point to built files
    manifest.entries = manifest.entries.map((entry) => ({
      ...entry,
      entry: `${entry.name}.${entry.type}.js`,
    }));

    // Write updated manifest to build directory
    await fs.promises.writeFile(destPath, JSON.stringify(manifest, null, 2));
    console.log("Updated manifest.json with built file paths");
  } catch (err) {
    console.error("Failed to update manifest.json:", err);
  }
}

export async function build() {
  // remove build directory if it exists
  if (fs.existsSync(buildDir)) {
    fs.rmSync(buildDir, { recursive: true, force: true });
  }

  // create build directory
  fs.mkdirSync(buildDir, { recursive: true });

  const manifest = JSON.parse(fs.readFileSync("manifest.json", "utf-8"));

  await _build(buildDir, manifest)
    .then(() => {
      console.log("All builds completed successfully.");
    })
    .catch((error) => {
      console.error("Build failed:", error);
    });
}
