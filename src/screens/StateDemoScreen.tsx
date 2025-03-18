import {
  ZButton,
  ZRow,
  ZText,
} from "@/components";
import { NavHeaderLayout } from "@/layouts";
import React, { useState } from "react";

const StateDemoScreen = () => {
  const [count, setCount] = useState(0);
  return (
    <NavHeaderLayout withBack={true} title={"State Demo"}>
      <ZText>{`${count}`}</ZText>
      <ZRow>
        <ZButton onClick={() => setCount(count + 1)}>+1</ZButton>
        <ZButton onClick={() => {
          if (count > 0) {
            setCount(count - 1)
          }
        }}>-1</ZButton>
        <ZButton onClick={() => setCount(0)}>Reset</ZButton>
      </ZRow>
    </NavHeaderLayout>
  );
};

export default StateDemoScreen;
