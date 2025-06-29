declare module "tjs" {
  /**
   * 读取文件内容
   * @param path 文件路径
   * @returns 文件内容的 Uint8Array
   */
  export function readFile(path: string): Promise<Uint8Array>;
  
  /**
   * 写入文件内容
   * @param path 文件路径
   * @param data 要写入的数据
   */
  export function writeFile(
    path: string,
    data: string | Uint8Array
  ): Promise<void>;
  
  /**
   * 执行系统命令
   * @param command 要执行的命令
   * @returns 命令执行结果
   */
  export function exec(command: string): Promise<{
    code: number;
    stdout: string;
    stderr: string;
  }>;
}