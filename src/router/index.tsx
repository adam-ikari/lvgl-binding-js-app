import ButtonDemoScreen from "@/screens/ButtonDemoScreen";
import DialogDemoScreen from "@/screens/DialogDemoScreen";
import HomeScreen from "@/screens/HomeScreen";
import ListDemoScreen from "@/screens/ListDemoScreen";
import StateDemoScreen from "@/screens/StateDemoScreen";
import IconDemoScreen from "@/screens/ZIconDemoScreen";
import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-native";

const AppRouter = () => {
  return (
    <MemoryRouter initialEntries={["/"]} initialIndex={0}>
      <Routes>
        <Route path="/" element={React.createElement(React.memo(HomeScreen))} />
        <Route
          path="/button"
          element={React.createElement(React.memo(ButtonDemoScreen))}
        />
        <Route
          path="/icon"
          element={React.createElement(React.memo(IconDemoScreen))}
        />
        <Route
          path="/state"
          element={React.createElement(React.memo(StateDemoScreen))}
        />
        <Route
          path="/list"
          element={React.createElement(React.memo(ListDemoScreen))}
        />
        <Route
          path="/dialog"
          element={React.createElement(React.memo(DialogDemoScreen))}
        />
      </Routes>
    </MemoryRouter>
  );
};

export default AppRouter;
