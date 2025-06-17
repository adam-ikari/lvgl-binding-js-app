import {
  ZButton,
  ZFlexAlignItems,
  ZRow,
  ZSwitch,
  ZText,
  ZWidthEnum,
} from "@/components";
import PageSession from "@/screens/common/PageSession";
import { useCounterStore } from "@/stores/useCounterStore";
import { useSettingsStore } from "@/stores/useSettingsStore";
import React from "react";

const GlobalStatusDemoScreen = () => {
  const { count, inc, dec, reset } = useCounterStore();
  const { theme, toggleTheme } = useSettingsStore();
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
        <ZRow width={ZWidthEnum.Full}>
          <ZRow style={{ "flex-grow": 1 }}>
            <ZText>{`Theme: ${theme}`}</ZText>
          </ZRow>
          <ZSwitch value={theme === "dark"} onChange={() => toggleTheme()} />
        </ZRow>
      </PageSession>
    </>
  );
};

export default GlobalStatusDemoScreen;
