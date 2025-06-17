import { ZButton, ZText } from "@/components";
import PageSession from "@/screens/common/PageSession";
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
      <PageSession title="Global Status">
        <ZText>{`counter: ${count}`}</ZText>
        <ZButton onClick={() => inc()}>inc</ZButton>
      </PageSession>
    </>
  );
};

export default GlobalStatusDemoScreen;
