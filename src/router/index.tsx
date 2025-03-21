import ButtonDemoScreen from "@/screens/ButtonDemoScreen";
import HomeScreen from "@/screens/HomeScreen";
import ListDemoScreen from "@/screens/ListDemoScreen";
import StateDemoScreen from "@/screens/StateDemoScreen";
import IConDemoScreen from "@/screens/ZIconDemoScreen";
import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-native";

const AppRouter = () => {
  return (
    <MemoryRouter initialEntries={["/"]} initialIndex={0}>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/button" element={<ButtonDemoScreen />} />
        <Route path="/icon" element={<IConDemoScreen />} />
        <Route path="/state" element={<StateDemoScreen />} />
        <Route path="/list" element={<ListDemoScreen />} />
      </Routes>
    </MemoryRouter>
  );
};

export default AppRouter;
