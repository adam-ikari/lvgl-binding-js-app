import ButtonDemoScreen from "@/screens/ButtonDemoScreen";
import DialogDemoScreen from "@/screens/DialogDemoScreen";
import HomeScreen from "@/screens/HomeScreen";
import InputDemoScreen from "@/screens/InputDemoScreen";
import ListDemoScreen from "@/screens/ListDemoScreen";
import StateDemoScreen from "@/screens/StateDemoScreen";
import IconDemoScreen from "@/screens/ZIconDemoScreen";
import React from "react";

const routerData = [
  { name: "home", path: "/", element: <HomeScreen />, meta: { title: "Home" } },
  {
    name: "button",
    path: "/button",
    element: <ButtonDemoScreen />,
    meta: { title: "Button Demo" },
  },
  {
    name: "icon",
    path: "/icon",
    element: <IconDemoScreen />,
    meta: { title: "Icon Demo" },
  },
  {
    name: "state",
    path: "/state",
    element: <StateDemoScreen />,
    meta: { title: "State Demo" },
  },
  {
    name: "list",
    path: "/list",
    element: <ListDemoScreen />,
    meta: { title: "List Demo" },
  },
  {
    name: "dialog",
    path: "/dialog",
    element: <DialogDemoScreen />,
    meta: { title: "Dialog Demo" },
  },
  {
    name: "input",
    path: "/input",
    element: <InputDemoScreen />,
    meta: { title: "Input Demo" },
  },
];

export default routerData;
