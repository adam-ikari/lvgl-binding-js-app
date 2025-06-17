import { ZNavScreenLayout } from "@/layouts";
import routerData from "@/router";
import { Dimensions, Render } from "sdk-ui";
import React, { Profiler, Component } from "react";
import { MemoryRouter, Route, Routes } from "react-router-native";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}

const { window } = Dimensions;

const App = () => {
  return (
    <MemoryRouter
      initialEntries={["/"]}
      initialIndex={0}
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
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
    `${id} 组件 ${phase} 阶段耗时：${actualDuration}ms 分辨率：${window.width}x${window.height}`,
  );
};

Render.render(
  <ErrorBoundary>
    <Profiler id="App" onRender={onRender}>
      <App />
    </Profiler>
  </ErrorBoundary>,
);
