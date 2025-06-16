const path = require('path');
const os = require('os');
const { execSync } = require('child_process');

function getBinaryPath() {
  const platform = os.platform();
  const binaryName = 'lvgljs';
  const binaryDir = platform === 'darwin' ? 'mac' : 'linux';
  return path.join(__dirname, binaryDir, binaryName);
}

function run(scriptPath) {
  const binaryPath = getBinaryPath();
  execSync(`${binaryPath} run ${scriptPath}`, { stdio: 'inherit' });
}

const path = require("path");
const fs = require("fs");
const { minify } = require("terser");

const esbuild = require("esbuild");
const alias = require("esbuild-plugin-alias");

const buildDir = path.join("build", "uncompressed");
const compressedDir = path.join("build", "compressed");

const excludeReactNativeModules = {
  name: "exclude-react-native-modules",
  setup(build) {
    build.onResolve({ filter: new RegExp(`^.*react-native.*$`) }, (args) => {
      return {
        path: args.path,
        namespace: "excluded-modules",
      };
    });

    build.onLoad({ filter: /.*/, namespace: "excluded-modules" }, () => ({
      contents: "module.exports = {};",
      loader: "js",
    }));
  },
};

async function compressFile(inputPath, outputPath) {
  const code = fs.readFileSync(inputPath, "utf8");
  const result = await minify(code, {
    sourceMap: process.env.NODE_ENV === "development",
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

async function _build() {
  // 创建compressed文件夹
  if (!fs.existsSync(compressedDir)) {
    fs.mkdirSync(compressedDir, { recursive: true });
  }

  const manifest = JSON.parse(fs.readFileSync("manifest.json", "utf-8"));
  const entries = manifest.entries;

  for (const item of entries) {
    const entry = path.resolve(process.cwd(), item.entry);
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
        external: ["tjs:path", "react-native"],
        outfile: outputFile,
        mainFields: ["module", "main"],
        define: {
          "process.env.NODE_ENV": `"${process.env.NODE_ENV || "development"}"`,
        },
        sourcemap: process.env.NODE_ENV === "development",
        loader: {
          ".wasm": "file",
        },
        metafile: true,
        plugins: [
          alias({
            "@": path.resolve(__dirname, "src"),
          }),
          excludeReactNativeModules,
          {
            name: 'resource-copy-plugin',
            setup(build) {
              // 支持的资源文件扩展名
              const resourceExts = [
                '.wasm', '.png', '.jpg', '.jpeg', '.gif', '.svg',
                '.woff', '.woff2', '.ttf', '.eot', '.otf',
                '.mp3', '.wav', '.ogg', '.mp4', '.webm'
              ];
              
              build.onLoad({ filter: new RegExp(`(${resourceExts.join('|')})$`) }, (args) => {
                console.log(`Loading resource file: ${args.path}`);
                return {
                  loader: 'file',
                  contents: fs.readFileSync(args.path)
                }
              });
              
              // 构建完成后复制所有资源文件
              build.onEnd(async (result) => {
                if (result.metafile) {
                  for (const [outputPath, fileInfo] of Object.entries(result.metafile.outputs)) {
                    const ext = path.extname(outputPath);
                    if (resourceExts.includes(ext)) {
                      const srcPath = path.resolve(outputPath);
                      const destPath = path.join(
                        compressedDir,
                        path.relative(buildDir, outputPath)
                      );
                      fs.mkdirSync(path.dirname(destPath), { recursive: true });
                      fs.copyFileSync(srcPath, destPath);
                      console.log(`Copied processed resource to: ${destPath}`);
                    }
                  }
                }
              });
            }
          }
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

const build = ()=> {
  _build().then(() => {
    console.log("All builds completed successfully.");
  }).catch((error) => {
    console.error("Build failed:", error);
  });
}

module.exports = {
  run,
  build
};