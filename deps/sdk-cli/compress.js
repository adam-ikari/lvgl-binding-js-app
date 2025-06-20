import fs from "fs";
import { minify } from "terser";

export const defaultCompressOptions = {
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
    inline: true, // 更激进的inline优化
    reduce_vars: true,
    toplevel: true,
    passes: 5, // 增加pass次数
    hoist_funs: true,
    hoist_vars: true,
    loops: true,
    join_vars: true,
    unused: true,
    collapse_vars: true,
    reduce_funcs: true,
    if_return: true, // 新增if_return优化
    pure_funcs: ["console.log"], // 标记纯函数
  },
  mangle: {
    toplevel: true,
    keep_fnames: false,
    properties: {
      // 新增属性名混淆
      regex: /^_/, // 混淆以下划线开头的属性
    },
  },
  format: {
    beautify: false,
    semicolons: false,
    max_line_len: 80, // 更小的行长度
    comments: false,
    wrap_iife: true, // 包裹立即执行函数
    indent_level: 0,
    ecma: 2020, // 指定ECMAScript版本
  },
  ecma: 2020, // 指定解析的ECMAScript版本
};

export async function compressFile(inputPath, outputPath, options = {}) {
  const code = fs.readFileSync(inputPath, "utf8");
  const compressOptions = {
    ...defaultCompressOptions,
    ...options,
  };

  const result = await minify(code, compressOptions);
  fs.writeFileSync(outputPath, result.code);
  return result;
}
