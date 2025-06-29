import { changeLanguage } from "@/i18n";
import { ZNavScreenLayout } from "@/layouts";
import routerData from "@/router";
import { useSettingsStore } from "@/stores/useSettingsStore";
import React, { Profiler, memo } from "react";
import { MemoryRouter, Route, Routes } from "react-router-native";
import { Dimensions, Render } from "sdk-ui";
import "zustand-polyfills";

// 应用初始化逻辑
function init() {
  // 在这里添加需要在渲染前执行的初始化逻辑
  // 例如：全局配置、环境检查、预加载资源等
  console.log("initialization...");
  changeLanguage(useSettingsStore.getState().language);
}

interface ZRouterProps {
  initialEntries?: string[];
  initialIndex?: number;
  children?: React.ReactNode | React.ReactNode[];
}

const ZRouter = (props: ZRouterProps) => {
  const { initialEntries = ["/"], initialIndex = 0, children = {} } = props;
  return (
    <MemoryRouter
      initialEntries={initialEntries}
      initialIndex={initialIndex}
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      {children}
    </MemoryRouter>
  );
};

const ZRoutes = (props) => {
  const { routerData = [] } = props;
  return (
    <Routes>
      {routerData.map(({ name, path, component }) => (
        <Route
          id={name}
          key={name}
          path={path}
          element={React.createElement(memo(component))}
        />
      ))}
    </Routes>
  );
};

const App = () => {
  return (
    <ZRouter initialEntries={["/"]} initialIndex={0}>
      {" "}
      <ZNavScreenLayout>
        <ZRoutes routerData={routerData}></ZRoutes>
      </ZNavScreenLayout>
    </ZRouter>
  );
};

const onRender = (id, phase, actualDuration) => {
  const { window: windowDimensions } = Dimensions;
  console.log(
    `${id} 组件 ${phase} 阶段耗时：${actualDuration}ms 分辨率：${windowDimensions.width}x${windowDimensions.height}`,
  );
};

// 执行初始化
init();

Render.render(
  <Profiler id="App" onRender={onRender}>
    <App />
  </Profiler>,
);
