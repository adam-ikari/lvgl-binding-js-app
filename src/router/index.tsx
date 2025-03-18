import ButtonDemoScreen from "@/screens/ButtonDemoScreen";
import HomeScreen from "@/screens/HomeScreen";
import StateDemoScreen from "@/screens/StateDemoScreen";
import ListDemoScreen from "@/screens/ListDemoScreen";
import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-native";

const AppRouter = () => {
  return (
    <MemoryRouter initialEntries={["/"]} initialIndex={0}>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/button" element={<ButtonDemoScreen />} />
        <Route path="/state" element={<StateDemoScreen />} />
        <Route path="/list" element={<ListDemoScreen />} />
      </Routes>
    </MemoryRouter>
  );
};

export default AppRouter;
