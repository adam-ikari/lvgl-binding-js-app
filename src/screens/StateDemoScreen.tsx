import { COLORS } from "@/common_style";
import { ZButton, ZIconSymbol, ZRow, ZText } from "@/components";
import { ZNavScreenLayout } from "@/layouts";
import React, { useState } from "react";

const style = {
  BackgroundStyle: {
    "background-color": COLORS.PAGE_BACKGROUND,
  },
};

const StateDemoScreen = () => {
  const [count, setCount] = useState(0);
  return (
    <ZNavScreenLayout title={"State Demo"} withBack>
      <ZText>{`${count}`}</ZText>
      <ZRow
        style={{
          ...style.BackgroundStyle,
        }}
      >
        <ZButton
          icon={ZIconSymbol.Minus}
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
        ></ZButton>
        <ZButton
          icon={ZIconSymbol.Plus}
          onClick={() => setCount(count + 1)}
        ></ZButton>
        <ZButton icon={ZIconSymbol.Refresh} onClick={() => setCount(0)}>
          Reset
        </ZButton>
      </ZRow>
    </ZNavScreenLayout>
  );
};

export default StateDemoScreen;
