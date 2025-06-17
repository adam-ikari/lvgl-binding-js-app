import { ZButton, ZIconSymbol, ZRow, ZText } from "@/components";
import { useCounterStore } from "@/stores/useCounterStore";
import { COLORS } from "@/styles/common_style";
import React from "react";

const style = {
  BackgroundStyle: {
    "background-color": COLORS.PAGE_BACKGROUND,
  },
};

const GlobalStatusDemoScreen = () => {
  const { count, increase, reset } = useCounterStore();
  return (
    <>
      <ZText>{`${count}`}</ZText>
      <ZRow
        style={{
          ...style.BackgroundStyle,
        }}
      >
        <ZButton icon={ZIconSymbol.Plus} onClick={() => increase()}></ZButton>
        <ZButton icon={ZIconSymbol.Refresh} onClick={() => reset()}>
          Reset
        </ZButton>
      </ZRow>
    </>
  );
};

export default GlobalStatusDemoScreen;
