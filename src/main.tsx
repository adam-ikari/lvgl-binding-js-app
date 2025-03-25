import AppRouter from "@/router";
import { Render } from "lvgljs-ui";
import React, { Profiler } from "react";

const App = () => {
  const onRender = (id, phase, actualDuration) => {
    console.log(`${id} 组件 ${phase} 阶段耗时：${actualDuration}ms`);
  };

  return (
    <Profiler id="AppRouter" onRender={onRender}>
      <AppRouter />
    </Profiler>
  );
};

Render.render(<App></App>);
