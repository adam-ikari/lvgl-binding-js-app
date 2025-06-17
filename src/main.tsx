import i18n from "@/i18n";
import { ZNavScreenLayout } from "@/layouts";
import routerData from "@/router";
import { useSettingsStore } from "@/stores/useSettingsStore";
import React, { Profiler } from "react";
import { MemoryRouter, Route, Routes } from "react-router-native";
import { Dimensions, Render } from "sdk-ui";
import "zustand-polyfills";

const { window: windowDimensions } = Dimensions;

// 初始化语言设置
const settingsStore = useSettingsStore.getState();
i18n.changeLanguage(settingsStore.language);

const App = () => {
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
