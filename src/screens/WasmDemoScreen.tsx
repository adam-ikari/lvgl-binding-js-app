import { ZButton } from "@/components";
import React, { useEffect, useState } from "react";

const WasmDemoScreen = () => {
  const [wasmInstance, setWasmInstance] = useState<WebAssembly.Instance | null>(
    null,
  );
  const [result, setResult] = useState<number | null>(0);

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
      <ZButton
        onClick={() => {
          setResult(wasmInstance?.exports.add(1, 2));
        }}
      >
        {result}
      </ZButton>
    </>
  );
};

export default WasmDemoScreen;
