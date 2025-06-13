import { ZButton, ZText } from "@/components";
import React, { useEffect, useState } from "react";

const WasmDemoScreen = () => {
  const [wasmInstance, setWasmInstance] = useState<WebAssembly.Instance | null>(
    null,
  );
  const [result, setResult] = useState<number | null>(0);
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    const loadWasm = async () => {
      try {
        const data = await tjs.readFile("./libtestbench.wasm");
        const { instance } = await WebAssembly.instantiate(data);
        setWasmInstance(instance);
        console.log("WASM loaded successfully:", instance);
      } catch (error) {
        console.error("Failed to load WASM:", error);
      }
    };

    loadWasm();
  }, []);

  return (
    <>
      <ZText>{`result:${result} use ${time}ms`}</ZText>
      <ZButton
        onClick={() => {
          //计算耗时
          const startTime = performance.now();
          setResult(wasmInstance?.exports.add(1, 2));
          const endTime = performance.now();
          setTime((endTime - startTime) / 1000);
          console.log("WASM execution time:", endTime - startTime, "ms");
        }}
      >
        add
      </ZButton>
    </>
  );
};

export default WasmDemoScreen;
