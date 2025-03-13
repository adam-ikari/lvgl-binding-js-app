import { COLORS, COMMON_STYLE } from "@/common_style";
import { ZButton, ZColumn, ZRow } from "@/components";
import ButtonDemoScreen from "@/screens/ButtonDemoScreen";
import { Render, View } from "lvgljs-ui";
import React from "react";
import { MemoryRouter, Route, Routes, useNavigate } from "react-router-native";

function HomeScreen() {
  const navigate = useNavigate();
  return (
    <View
      style={{
        ...COMMON_STYLE.noBorder,
        ...COMMON_STYLE.fullHeight,
        ...COMMON_STYLE.fullWidth,
        "background-color": COLORS.PAGE_BACKGROUND,
      }}
    >
      <ZColumn>
        <ZRow>
          <ZButton onClick={() => navigate("/button")} text="Button"></ZButton>
        </ZRow>
      </ZColumn>
    </View>
  );
}

const App = () => {
  return (
    <MemoryRouter initialEntries={["/"]} initialIndex={0}>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/button" element={<ButtonDemoScreen />} />
      </Routes>
    </MemoryRouter>
  );
};

Render.render(<App />);
