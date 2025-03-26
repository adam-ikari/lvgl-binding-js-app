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
  { name: "home", path: "/", component: HomeScreen },
  { name: "button", path: "/button", component: ButtonDemoScreen },
  { name: "icon", path: "/icon", component: IconDemoScreen },
  { name: "state", path: "/state", component: StateDemoScreen },
  { name: "list", path: "/list", component: ListDemoScreen },
  { name: "dialog", path: "/dialog", component: DialogDemoScreen },
  { name: "input", path: "/input", component: InputDemoScreen },
];

const AppRouter = () => {
  return (
    <MemoryRouter initialEntries={["/"]} initialIndex={0}>
      <Routes>
        {routerData.map(({ name, path, component: Component }) => (
          <Route id={name} path={path} element={<Component />} />
        ))}
      </Routes>
    </MemoryRouter>
  );
};

export default AppRouter;
