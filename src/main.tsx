import { ZNavScreenLayout } from "@/layouts";
import routerData from "@/router";
import { Dimensions, Render } from "lvgljs-ui";
import React, { Profiler } from "react";
import { MemoryRouter, Route, Routes } from "react-router-native";

const App = () => {
  const { window } = Dimensions;

  const onRender = (id, phase, actualDuration) => {
    console.log(
      `${id} 组件 ${phase} 阶段耗时：${actualDuration}ms 分辨率：${window.width}x${window.height}`,
    );
  };

  return (
    <Profiler id="AppRouter" onRender={onRender}>
      <MemoryRouter initialEntries={["/"]} initialIndex={0}>
        <ZNavScreenLayout>
          <Routes>
            {routerData.map(({ name, path, element }) => (
              <Route id={name} path={path} element={element} />
            ))}
          </Routes>
        </ZNavScreenLayout>
      </MemoryRouter>
    </Profiler>
  );
};

Render.render(<App></App>);
