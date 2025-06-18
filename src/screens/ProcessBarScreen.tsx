import ZProcessBar from "../components/ZProcessBar";
import PageSession from "./common/PageSession";
import React, { useEffect, useState } from "react";

const ProcessBarScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <PageSession title="Process Bar">
      <ZProcessBar value={30} />

      <ZProcessBar value={60} color="#FF5722" backgroundColor="#FFECB3" />

      <ZProcessBar value={progress} color="#2196F3" />

      <ZProcessBar value={80} height={16} color="#9C27B0" />
    </PageSession>
  );
};

export default ProcessBarScreen;
