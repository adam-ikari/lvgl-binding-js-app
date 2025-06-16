import libtestbench from "@/assets/libtestbench.wasm";
import { ZButton, ZText } from "@/components";
import React, { useEffect, useState } from "react";

interface WasmExports {
  add: (a: number, b: number) => number;
}

const loadWasm = async (): Promise<WebAssembly.Instance | null> => {
  try {
    const data = await tjs.readFile(libtestbench);
    const { instance } = await WebAssembly.instantiate(data);
    console.log("WASM loaded successfully:");
    return instance;
  } catch (error) {
    console.error("Failed to load WASM:", error);
  }
};

const WasmDemoScreen = () => {
  const [wasmInstance, setWasmInstance] = useState<WebAssembly.Instance | null>(
    null,
  );
  const [result, setResult] = useState<number | null>(0);
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    (async () => {
      setWasmInstance(await loadWasm());
    })();
  }, []);

  return (
    <>
      <ZText>{`result:${result} use ${time}ms`}</ZText>
      <ZButton
        onClick={() => {
          //计算耗时
          const startTime = performance.now();
          if (wasmInstance) {
            try {
              const exports = wasmInstance.exports as unknown as WasmExports;
              setResult(exports.add(1, 2));
            } catch (error) {
              console.error("WASM execution error:", error);
            }
          }
          const endTime = performance.now();
          const duration = endTime - startTime;
          setTime(duration);
          console.log("WASM execution time:", duration, "ms");
        }}
      >
        add
      </ZButton>
    </>
  );
};

export default WasmDemoScreen;
