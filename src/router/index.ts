import ButtonDemoScreen from "@/screens/ButtonDemoScreen";
import CardDemoScreen from "@/screens/CardDemoScreen";
import DialogDemoScreen from "@/screens/DialogDemoScreen";
import DropdownDemoScreen from "@/screens/DropdownDemoScreen";
import HomeScreen from "@/screens/HomeScreen";
import IconDemoScreen from "@/screens/IconDemoScreen";
import InputDemoScreen from "@/screens/InputDemoScreen";
import ListDemoScreen from "@/screens/ListDemoScreen";
import StateDemoScreen from "@/screens/StateDemoScreen";
import SwitchDemoScreen from "@/screens/SwitchDemoScreen";
import ProcessBarScreen from "@/screens/ProcessBarScreen";
import CheckboxDemoScreen from "@/screens/CheckboxDemoScreen";
import WasmDemoScreen from "@/screens/WasmDemoScreen"
import ImageDemoScreen from "@/screens/ImageDemoScreen";

export default [
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
    meta: { title: "Checkbox Demo" }
  },
  {
    name: "wasm",
    path: "/wasm",
    component: WasmDemoScreen,
    meta: { title: "WASM Demo" }
  },
  {
    name: "image",
    path: "/image",
    component: ImageDemoScreen,
    meta: { title: "Image Demo" }
  },
];
