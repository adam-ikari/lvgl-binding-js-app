# LVGL JS SDK

## 功能说明

- `build()`: 构建项目，生成未压缩和压缩后的代码
- `run(scriptPath)`: 运行指定脚本

## 使用方法

### 安装

```bash
npm install --save file:deps/sdk
```

### 构建项目

```javascript
const { build } = require("sdk");
build();
```

或通过npm脚本:

```bash
npm run build
npm run build:dev  # 开发模式
npm run build:prod # 生产模式
```

### 运行项目

```javascript
const { run } = require("sdk");
run("main.view.js");
```

或通过npm脚本:

```bash
npm run preview
npm run preview:dev  # 开发模式
npm run preview:prod # 生产模式
```

## 配置

通过修改manifest.json配置入口文件:

```json
{
  "entries": [{ "name": "main", "type": "view", "entry": "./src/main.tsx" }]
}
```

## 开发

```bash
npm run dev  # 开发模式，自动重新构建
```
