import ButtonDemoScreen from "@/screens/ButtonDemoScreen";
import CardDemoScreen from "@/screens/CardDemoScreen";
import CheckboxDemoScreen from "@/screens/CheckboxDemoScreen";
import DialogDemoScreen from "@/screens/DialogDemoScreen";
import DropdownDemoScreen from "@/screens/DropdownDemoScreen";
import GlobalStatusDemoScreen from "@/screens/GlobalStatusDemoScreen";
import HomeScreen from "@/screens/HomeScreen";
import IconDemoScreen from "@/screens/IconDemoScreen";
import ImageDemoScreen from "@/screens/ImageDemoScreen";
import InputDemoScreen from "@/screens/InputDemoScreen";
import ListDemoScreen from "@/screens/ListDemoScreen";
import LocalstorageDemoScreen from "@/screens/LocalstorageDemoScreen";
import PaginationDemoScreen from "@/screens/PaginationDemoScreen";
import ProcessBarScreen from "@/screens/ProcessBarScreen";
import StateDemoScreen from "@/screens/StateDemoScreen";
import SwitchDemoScreen from "@/screens/SwitchDemoScreen";
import WasmDemoScreen from "@/screens/WasmDemoScreen";
import WorkerDemoScreen from "@/screens/WorkerDemoScreen";
import React from "react";

interface RouterMeta {
  title?: string;
}

interface RouterItem {
  name?: string;
  path: string;
  component: React.FunctionComponent;
  meta?: RouterMeta;
}

const router: RouterItem[] = [
  { name: "home", path: "/", component: HomeScreen, meta: { title: "Home" } },
  {
    name: "button",
    path: "/button",
    component: ButtonDemoScreen,
    meta: { title: "Button Demo" },
  },
  {
    name: "icon",
    path: "/icon",
    component: IconDemoScreen,
    meta: { title: "Icon Demo" },
  },
  {
    name: "state",
    path: "/state",
    component: StateDemoScreen,
    meta: { title: "State Demo" },
  },
  {
    name: "global_state",
    path: "/global_state",
    component: GlobalStatusDemoScreen,
    meta: { title: "Global State Demo" },
  },
  {
    name: "list",
    path: "/list",
    component: ListDemoScreen,
    meta: { title: "List Demo" },
  },
  {
    name: "dialog",
    path: "/dialog",
    component: DialogDemoScreen,
    meta: { title: "Dialog Demo" },
  },
  {
    name: "input",
    path: "/input",
    component: InputDemoScreen,
    meta: { title: "Input Demo" },
  },
  {
    name: "card",
    path: "/card",
    component: CardDemoScreen,
    meta: { title: "Card Demo" },
  },
  {
    name: "switch",
    path: "/switch",
    component: SwitchDemoScreen,
    meta: { title: "Switch Demo" },
  },
  {
    name: "dropdown",
    path: "/dropdown",
    component: DropdownDemoScreen,
    meta: { title: "Dropdown Demo" },
  },
  {
    name: "process-bar",
    path: "/process-bar",
    component: ProcessBarScreen,
    meta: { title: "Progress Bar Demo" },
  },
  {
    name: "checkbox",
    path: "/checkbox",
    component: CheckboxDemoScreen,
    meta: { title: "Checkbox Demo" },
  },
  {
    name: "wasm",
    path: "/wasm",
    component: WasmDemoScreen,
    meta: { title: "WASM Demo" },
  },
  {
    name: "worker",
    path: "/worker",
    component: WorkerDemoScreen,
    meta: { title: "Worker Demo" },
  },
  {
    name: "localstorage",
    path: "/localstorage",
    component: LocalstorageDemoScreen,
    meta: { title: "LocalStorage Demo" },
  },
  {
    name: "image",
    path: "/image",
    component: ImageDemoScreen,
    meta: { title: "Image Demo" },
  },
  {
    path: "/pagination",
    component: PaginationDemoScreen,
    meta: { title: "Pagination Demo" },
  },
];

export default router;
