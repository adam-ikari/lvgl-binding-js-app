import { ZButton, ZText } from "@/components";
import { useCounterStore } from "@/stores/useCounterStore";
import { COLORS } from "@/styles/common_style";
import React from "react";

const style = {
  BackgroundStyle: {
    "background-color": COLORS.PAGE_BACKGROUND,
  },
};

const GlobalStatusDemoScreen = () => {
  const { count, inc } = useCounterStore();
  return (
    <>
      <ZText>{`${count}`}</ZText>
      <ZButton onClick={() => inc()}>inc</ZButton>
    </>
  );
};

export default GlobalStatusDemoScreen;
