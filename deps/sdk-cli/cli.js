#!/usr/bin/env node
const { program } = require('commander');
const { build } = require('./index');
const { run } = require('./run');

program
  .name('sdk-cli')
  .description('SDK命令行工具')
  .version('1.0.0');

program.command('build')
  .description('构建项目')
  .option('--env <env>', '设置构建环境', 'development')
  .option('--watch', '监听文件变化')
  .action(async (options) => {
    process.env.NODE_ENV = options.env;
    console.log(`Starting ${process.env.NODE_ENV} build...`);
    try {
      await build();
      console.log('Build completed successfully');
    } catch (err) {
      console.error('Build failed:', err);
      process.exit(1);
    }
  });

program.command('run <script>')
  .description('运行指定脚本')
  .option('--env <env>', '设置运行环境', 'development')
  .action((script, options) => {
    process.env.NODE_ENV = options.env;
    console.log(`Running ${script} in ${process.env.NODE_ENV} mode...`);
    try {
      run(script);
      console.log('Script executed successfully');
    } catch (err) {
      console.error('Script execution failed:', err);
      process.exit(1);
    }
  });

program.parse(process.argv);