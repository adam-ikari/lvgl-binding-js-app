import { ZButton, ZRow, ZText } from "@/components";
import { ZNavHeaderLayout } from "@/layouts";
import React, { useState } from "react";

const StateDemoScreen = () => {
  const [count, setCount] = useState(0);
  return (
    <ZNavHeaderLayout withBack={true} title={"State Demo"}>
      <ZText>{`${count}`}</ZText>
      <ZRow>
        <ZButton onClick={() => setCount(count + 1)}>+1</ZButton>
        <ZButton
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
        >
          -1
        </ZButton>
        <ZButton onClick={() => setCount(0)}>Reset</ZButton>
      </ZRow>
    </ZNavHeaderLayout>
  );
};

export default StateDemoScreen;
