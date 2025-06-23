import fs from "fs";
import { minify } from "terser";
import { compressOptions } from "./config.js"

export async function compressFile(inputPath, outputPath) {
  const code = fs.readFileSync(inputPath, "utf8");

  const result = await minify(code, compressOptions);
  fs.writeFileSync(outputPath, result.code);
  return result;
}
