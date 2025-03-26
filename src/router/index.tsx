import ButtonDemoScreen from "@/screens/ButtonDemoScreen";
import DialogDemoScreen from "@/screens/DialogDemoScreen";
import HomeScreen from "@/screens/HomeScreen";
import InputDemoScreen from "@/screens/InputDemoScreen";
import ListDemoScreen from "@/screens/ListDemoScreen";
import StateDemoScreen from "@/screens/StateDemoScreen";
import IconDemoScreen from "@/screens/ZIconDemoScreen";
import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-native";

const AppRouter = () => {
  return (
    <MemoryRouter initialEntries={["/"]} initialIndex={0}>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/button" element={<ButtonDemoScreen />} />
        <Route path="/icon" element={<IconDemoScreen />} />
        <Route path="/state" element={<StateDemoScreen />} />
        <Route path="/list" element={<ListDemoScreen />} />
        <Route path="/dialog" element={<DialogDemoScreen />} />
        <Route path="/input" element={<InputDemoScreen />} />
      </Routes>
    </MemoryRouter>
  );
};

export default AppRouter;
