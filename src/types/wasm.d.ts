declare module "*.wasm" {
  /**
   * WASM 模块的初始化选项
   */
  interface InitOptions {
    /** 内存对象 */
    memory?: WebAssembly.Memory;
    /** 导入对象 */
    imports?: Record<string, any>;
    /** 环境变量 */
    env?: Record<string, any>;
  }

  /**
   * WASM 模块实例
   */
  interface WasmInstance {
    /** 导出的函数 */
    exports: Record<string, any>;
    /** 内存对象 */
    memory?: WebAssembly.Memory;
  }

  /**
   * 初始化 WASM 模块
   * @param options 初始化选项
   * @returns Promise 解析为 WASM 实例
   */
  function init(options?: InitOptions): Promise<WasmInstance>;

  const wasmBuffer: ArrayBuffer;
  export default wasmBuffer;
  export { init };
}