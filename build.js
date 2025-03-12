const path = require("path");
const esbuild = require("esbuild");
const alias = require("esbuild-plugin-alias");
const fs = require("fs");
const { minify } = require("terser");

const buildDir = path.join("build", "uncompressed");
const compressedDir = path.join("build", "compressed");

async function compressFile(inputPath, outputPath) {
  const code = fs.readFileSync(inputPath, "utf8");
  const result = await minify(code, {
    compress: {
      // 核心配置
      arrows: true, // 转换箭头函数为普通函数（若更短）
      booleans: true, // 优化布尔值（如 `!0` → `true`）
      comparisons: true, // 优化比较表达式（如 `!(a <= b)` → `a > b`）
      conditionals: true, // 优化条件语句
      dead_code: true, // 删除未执行代码
      drop_console: true, // 删除所有 `console.*` 调用
      drop_debugger: true, // 删除 `debugger`
      evaluate: true, // 预计算常量表达式（如 `5 * 3` → `15`）
      inline: true, // 内联函数和变量
      reduce_vars: true, // 提前计算变量值
      toplevel: true, // 删除未使用的顶层变量/函数
      passes: 3, // 多次压缩（默认1，增加次数提高压缩率）
      hoist_funs: true, // 提升函数声明（减少重复定义）
      hoist_vars: true, // 提升变量声明（合并 var 声明）
      loops: true, // 优化循环结构（如简化 for/while）
      join_vars: true, // 合并连续 var 声明
      unused: true, // 删除未使用的函数参数/变量（与 dead_code 互补）
      collapse_vars: true, // 合并变量声明（如 `const {a} = obj` → 直接引用）
      reduce_funcs: true, // 内联简单类方法
    },
    mangle: {
      toplevel: true, // 混淆顶层作用域变量
      keep_fnames: false, // 禁用保留函数名（`true` 会降低混淆率）
    },
    format: {
      beautify: false, // 禁用美化（关键！）
      semicolons: false, // 删除行末分号（减少符号）
      max_line_len: 1024, // 禁用自动换行（0=无限制单行）
      comments: false, // 删除所有注释
      // 其他可选强化配置
      wrap_iife: false, // 禁止包装 IIFE 换行（如 `(function(){}())`）
      indent_level: 0, // 缩进空格数（0=无缩进）
    },
  });
  fs.writeFileSync(outputPath, result.code);
}

async function build() {
  // 创建compressed文件夹
  if (!fs.existsSync(compressedDir)) {
    fs.mkdirSync(compressedDir, { recursive: true });
  }

  const manifest = JSON.parse(fs.readFileSync("manifest.json", "utf-8"));
  const entries = manifest.entries;

  for (const item of entries) {
    const entry = path.resolve(__dirname, item.entry);
    const outputFile = path.resolve(buildDir, `${item.name}.${item.type}.js`);
    const compressedFile = path.resolve(
      compressedDir,
      `${item.name}.${item.type}.js`,
    );

    await esbuild
      .build({
        entryPoints: [entry],
        bundle: true,
        platform: "neutral",
        external: ["tjs:path"],
        outfile: outputFile,
        define: {
          "process.env.NODE_ENV": `"${process.env.NODE_ENV || "development"}"`,
        },
        plugins: [
          alias({
            "@": path.resolve(__dirname, "src"),
          }),
        ],
      })
      .then(async () => {
        console.log("Build %s complete", item);
        // 压缩混淆
        await compressFile(outputFile, compressedFile);
        console.log("Compressed %s complete", item);
      })
      .catch(() => {
        process.exit(1);
      });
  }
}

build();
