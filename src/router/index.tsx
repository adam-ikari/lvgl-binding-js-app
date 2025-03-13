import ButtonDemoScreen from "@/screens/ButtonDemoScreen";
import HomeScreen from "@/screens/HomeScreen";
import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-native";

const AppRouter = () => {
  return (
    <MemoryRouter initialEntries={["/"]} initialIndex={0}>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/button" element={<ButtonDemoScreen />} />
      </Routes>
    </MemoryRouter>
  );
};

export default AppRouter;
