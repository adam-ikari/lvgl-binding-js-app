declare module "tjs" {
  export function readFile(path: string): Promise<Uint8Array>;
}