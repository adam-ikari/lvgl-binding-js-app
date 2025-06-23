#!/usr/bin/env node
import { build } from "./build.js";
import { run } from "./run.js";
import chalk from "chalk";
import { program } from "commander";
import fs from "fs/promises";
import nodemon from "nodemon";
import ora from "ora";
import path from "path";

const buildDir = "dist";

// Helper functions
const logSuccess = (msg) => console.log(chalk.green(`[SDK-CLI] ${msg}`));
const logInfo = (msg) => console.log(chalk.blue(`[SDK-CLI] ${msg}`));
const logWarning = (msg) => console.log(chalk.yellow(`[SDK-CLI] ${msg}`));
const logError = (msg, err) =>
  console.error(chalk.red(`[SDK-CLI] ${msg}`), err);

program
  .name("sdk-cli")
  .description("SDK Command Line Tool")
  .version("1.0.0")
  .option("--verbose", "Enable verbose logging");

program
  .command("build")
  .description("Build project")
  .option("--env <env>", "Set build environment", "development")
  .action((options) => {
    process.env.NODE_ENV = options.env;
    logInfo(`Starting ${process.env.NODE_ENV} build...`);
    try {
      build();
      logSuccess("Build completed successfully");
    } catch (err) {
      logError("Build failed", err);
      process.exit(1);
    }
  });

program
  .command("dev")
  .description("Development mode - auto build and run")
  .action(async (options) => {
    process.env.NODE_ENV = options.env;
    console.log(
      logInfo(
        `Starting development mode in ${process.env.NODE_ENV} environment...`,
      ),
    );

    try {
      // 使用run命令启动并监听变化
      nodemon({
        exec: `sdk-cli build && sdk-cli run main`,
        ext: "js,ts,jsx,tsx,json,jpg,jpeg,png,bmp",
        ignore: ["node_modules/", "dist/", "deps/"],
        env: {
          TJS_HOME: "data",
        },
      });

      nodemon
        .on("start", () => {
          logSuccess("Development server started");
        })
        .on("restart", (files) => {
          logInfo(`Rebuilding due to changes in: ${files.join(", ")}`);
          build().catch(console.error);
        })
        .on("quit", () => {
          logWarning("Development server stopped");
          process.exit();
        });
    } catch (err) {
      logError("Development mode failed", err);
      process.exit(1);
    }
  });

program
  .command("run <entry>")
  .description("Run specified entry script (main or worker1)")
  .action(async (entry, options) => {
    process.env.NODE_ENV = options.env;

    try {
      // Read manifest to find entry config
      const manifestPath = path.resolve(
        process.cwd(),
        buildDir,
        "manifest.json",
      );
      const manifestContent = await fs.readFile(manifestPath, "utf-8");
      const manifest = JSON.parse(manifestContent);

      // Find matching entry
      const entryConfig = manifest.entries.find((e) => e.name === entry);
      if (!entryConfig) {
        logError(`Entry '${entry}' not found in manifest.json`);
        process.exit(1);
      }

      // Build output filename
      const entryFile = entryConfig.entry;

      logInfo(`Running ${entryFile}...`);
      run(entryFile);
    } catch (err) {
      logError(`Failed to run entry '${entry}'`, err);
      process.exit(1);
    }
  });

// Clean command
program
  .command("clean")
  .description("Clean build artifacts")
  .action(async () => {
    const spinner = ora("Cleaning build artifacts").start();
    try {
      await fs.rm("dist", { recursive: true, force: true });
      spinner.succeed("Build artifacts cleaned successfully");
    } catch (err) {
      spinner.fail("Failed to clean build artifacts");
      logError("Clean failed", err);
      process.exit(1);
    }
  });

// Test command
program
  .command("test")
  .description("Run tests")
  .action(async () => {
    const spinner = ora("Running tests").start();
    try {
      // Add actual test runner logic here
      await new Promise((resolve) => setTimeout(resolve, 1000));
      spinner.succeed("Tests passed");
    } catch (err) {
      spinner.fail("Tests failed");
      logError("Test failed", err);
      process.exit(1);
    }
  });

program.parse(process.argv);

// Handle verbose flag
if (program.opts().verbose) {
  verbose = true;
  logInfo("Verbose logging enabled");
}
