import excludeReactNativeModulesPlugin from "./plugins/excludeReactNativeModulesPlugin.js";
import resourcePlugin from "./plugins/resourcePlugin.js";
import alias from "esbuild-plugin-alias";
import path from "path";

export const buildDir = "dist";

export const esbuildConfig = {
  bundle: true,
  platform: "neutral",
  external: ["tjs:path", "react-native"],

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
    excludeReactNativeModulesPlugin,
    resourcePlugin(),
  ],
};

export const compressOptions = {
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

export const nodemonConfig = {
    ext: "js,ts,jsx,tsx,json,jpg,jpeg,png,bmp",
    ignore: ["node_modules/", "dist/", "deps/"],
    env: {
        TJS_HOME: path.resolve(process.cwd(), "app_data"),
    },
}

