#!/usr/bin/env node
const { program } = require("commander");
const { build } = require("./index");
const { run } = require("./run");

program.name("sdk-cli").description("SDK命令行工具").version("1.0.0");

program
  .command("build")
  .description("构建项目")
  .option("--env <env>", "设置构建环境", "development")
  .option("--watch", "监听文件变化")
  .action((options) => {
    process.env.NODE_ENV = options.env;
    console.log(`Starting ${process.env.NODE_ENV} build...`);
    try {
      build();
      console.log("Build completed successfully");
    } catch (err) {
      console.error("Build failed:", err);
      process.exit(1);
    }
  });

program
  .command("dev")
  .description("开发模式 - 自动构建并运行")
  .option("--env <env>", "设置环境", "development")
  .action(async (options) => {
    process.env.NODE_ENV = options.env;
    console.log(
      `Starting development mode in ${process.env.NODE_ENV} environment...`,
    );

    try {
      // 使用run命令启动并监听变化
      const nodemon = require("nodemon");
      nodemon({
        exec: `sdk-cli build && sdk-cli run main.view.js`,
        ext: "js,ts,jsx,tsx,json",
        ignore: ["node_modules/", "dist/"],
        env: {
          TJS_HOME: "data",
          NODE_ENV: process.env.NODE_ENV,
        },
      });

      nodemon
        .on("start", () => {
          console.log("Development server started");
        })
        .on("restart", (files) => {
          console.log("Rebuilding due to changes in:", files);
          require("./index").build().catch(console.error);
        })
        .on("quit", () => {
          console.log("Development server stopped");
          process.exit();
        });
    } catch (err) {
      console.error("Development mode failed:", err);
      process.exit(1);
    }
  });

program
  .command("run")
  .description("运行指定脚本")
  .action((options) => {
    process.env.NODE_ENV = options.env;
    console.log(`Running...`);
    try {
      run("main.view.js");
    } catch (err) {
      console.error(`Failed to run:`, err);
      process.exit(1);
    }
  });

program.parse(process.argv);
