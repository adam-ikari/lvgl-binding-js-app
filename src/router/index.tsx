import ButtonDemoScreen from "@/screens/ButtonDemoScreen";
import DialogDemoScreen from "@/screens/DialogDemoScreen";
import HomeScreen from "@/screens/HomeScreen";
import InputDemoScreen from "@/screens/InputDemoScreen";
import ListDemoScreen from "@/screens/ListDemoScreen";
import StateDemoScreen from "@/screens/StateDemoScreen";
import IconDemoScreen from "@/screens/ZIconDemoScreen";
import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-native";

const routerData = [
  { path: "/", component: HomeScreen },
  { path: "/button", component: ButtonDemoScreen },
  { path: "/icon", component: IconDemoScreen },
  { path: "/state", component: StateDemoScreen },
  { path: "/list", component: ListDemoScreen },
  { path: "/dialog", component: DialogDemoScreen },
  { path: "/input", component: InputDemoScreen },
];

const AppRouter = () => {
  return (
    <MemoryRouter initialEntries={["/"]} initialIndex={0}>
      <Routes>
        {routerData.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </MemoryRouter>
  );
};

export default AppRouter;
