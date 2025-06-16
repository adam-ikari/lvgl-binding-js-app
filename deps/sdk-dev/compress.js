const fs = require("fs");
const { minify } = require("terser");

const defaultCompressOptions = {
  // sourceMap: process.env.NODE_ENV === "development",
  compress: {
    arrows: true,
    booleans: true,
    comparisons: true,
    conditionals: true,
    dead_code: true,
    drop_console: true,
    drop_debugger: true,
    evaluate: true,
    inline: true,
    reduce_vars: true,
    toplevel: true,
    passes: 3,
    hoist_funs: true,
    hoist_vars: true,
    loops: true,
    join_vars: true,
    unused: true,
    collapse_vars: true,
    reduce_funcs: true
  },
  mangle: {
    toplevel: true,
    keep_fnames: false
  },
  format: {
    beautify: false,
    semicolons: false,
    max_line_len: 1024,
    comments: false,
    wrap_iife: false,
    indent_level: 0
  }
};

async function compressFile(inputPath, outputPath, options = {}) {
  const code = fs.readFileSync(inputPath, "utf8");
  const compressOptions = {
    ...defaultCompressOptions,
    ...options
  };
  
  const result = await minify(code, compressOptions);
  fs.writeFileSync(outputPath, result.code);
  return result;
}

module.exports = {
  compressFile,
  defaultCompressOptions
};