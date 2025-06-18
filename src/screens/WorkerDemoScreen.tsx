import { ZButton, ZText } from "@/components";
import PageSession from "@/screens/common/PageSession";
import React, { useState } from "react";

const WorkerDemoScreen = () => {
  const [result, setResult] = useState<string>("");
  let worker: Worker | null = null;

  const handleCalculate = () => {
    // TODO
  };

  return (
    <PageSession title="Worker Demo">
      <ZButton onClick={handleCalculate}>Calculate with Worker</ZButton>
      {result && <ZText>{result}</ZText>}
    </PageSession>
  );
};

export default WorkerDemoScreen;
