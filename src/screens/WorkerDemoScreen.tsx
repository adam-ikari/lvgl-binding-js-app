import { ZButton, ZText } from "@/components";
import PageSession from "@/screens/common/PageSession";
import React, { useState } from "react";

const WorkerDemoScreen = () => {
  const [result, setResult] = useState<string>("");
  let worker: Worker | null = null;

  const handleCalculate = () => {

    console.log('hello!');

    const w = new Worker('./worker1.worker.js');
    w.addEventListener('message', event => {
        const msg = event.data;
        console.log('received message!');
        console.log(JSON.stringify(msg));
        w.terminate();
    });

    console.log('Worker created!');
  };

  return (
    <PageSession title="Worker Demo">
      <ZButton onClick={handleCalculate}>Calculate with Worker</ZButton>
      {result && <ZText>{result}</ZText>}
    </PageSession>
  );
};

export default WorkerDemoScreen;
