import { ZNavScreenLayout } from "@/layouts";
import routerData from "@/router";
import React, { Profiler } from "react";
import { MemoryRouter, Route, Routes } from "react-router-native";
import { Dimensions, Render } from "sdk-ui";
import "zustand-polyfills";
import {useSettingsStore} from "@/stores/useSettingsStore";

const { window: windowDimensions } = Dimensions;

const App = () => {
  const {theme, setTheme} = useSettingsStore();
  return (
    <MemoryRouter initialEntries={["/"]} initialIndex={0}>
      <ZNavScreenLayout>
        <Routes>
          {routerData.map(({ name, path, component }) => (
            <Route
              id={name}
              key={name}
              path={path}
              element={React.createElement(component)}
            />
          ))}
        </Routes>
      </ZNavScreenLayout>
    </MemoryRouter>
  );
};

const onRender = (id, phase, actualDuration) => {
  console.log(
    `${id} 组件 ${phase} 阶段耗时：${actualDuration}ms 分辨率：${windowDimensions.width}x${windowDimensions.height}`,
  );
};

Render.render(
  <Profiler id="App" onRender={onRender}>
    <App />
  </Profiler>,
);
