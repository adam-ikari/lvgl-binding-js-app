import { COLORS } from "@/common_style";
import {
  ZButton,
  ZColumn,
  ZHeightEnum,
  ZNavHeader,
  ZText,
  ZWidthEnum,
} from "@/components";
import React, { useState } from "react";

const StateDemoScreen = () => {
  const [count, setCount] = useState(0);
  return (
    <ZColumn
      width={ZWidthEnum.Full}
      height={ZHeightEnum.Full}
      style={{
        "background-color": COLORS.PAGE_BACKGROUND,
      }}
    >
      <ZNavHeader withBack={true} title={"State Demo"}></ZNavHeader>
      <ZText>{`${count}`}</ZText>
      <ZButton onClick={() => setCount(count + 1)}>+1</ZButton>
    </ZColumn>
  );
};

export default StateDemoScreen;
