import { ZButton, ZRow, ZText } from "@/components";
import PageSession from "@/screens/common/PageSession";
import { useCounterStore } from "@/stores/useCounterStore";
import { useSettingsStore } from "@/stores/useSettingsStore";
import { COLORS } from "@/styles/common_style";
import React from "react";

const style = {
  BackgroundStyle: {
    "background-color": COLORS.PAGE_BACKGROUND,
  },
};

const GlobalStatusDemoScreen = () => {
  const { count, inc, dec, reset } = useCounterStore();
  const { theme, setTheme } = useSettingsStore();
  return (
    <>
      <PageSession title="Global Status">
        <ZText>{`counter: ${count}`}</ZText>
        <ZRow>
          <ZButton onClick={() => inc()}>inc</ZButton>
          <ZButton onClick={() => dec()}>inc</ZButton>
          <ZButton onClick={() => reset()}>inc</ZButton>
        </ZRow>
      </PageSession>
      <PageSession title="Settings">
        <ZText>{`Theme: ${theme}`}</ZText>
        <ZButton onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Toggle Theme
        </ZButton>
      </PageSession>
    </>
  );
};

export default GlobalStatusDemoScreen;
