import ButtonDemoScreen from "@/screens/ButtonDemoScreen";
import CardDemoScreen from "@/screens/CardDemoScreen";
import DialogDemoScreen from "@/screens/DialogDemoScreen";
import HomeScreen from "@/screens/HomeScreen";
import IconDemoScreen from "@/screens/IconDemoScreen";
import InputDemoScreen from "@/screens/InputDemoScreen";
import ListDemoScreen from "@/screens/ListDemoScreen";
import StateDemoScreen from "@/screens/StateDemoScreen";
import SwitchDemoScreen from "@/screens/SwitchDemoScreen"

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
];
