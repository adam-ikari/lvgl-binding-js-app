import { COLORS } from "@/common_style";
import {
  ZButton,
  ZColumn,
  ZHeightEnum,
  ZNavHeader,
  ZRow,
  ZText,
  ZWidthEnum,
} from "@/components";
import React, { useState } from "react";

const ListDemoScreen = () => {
  const [count, setCount] = useState(0);
  return (
    <ZColumn
      width={ZWidthEnum.Full}
      height={ZHeightEnum.Full}
      style={{
        "background-color": COLORS.PAGE_BACKGROUND,
      }}
    >
      <ZNavHeader withBack={true} title={"List Demo"}></ZNavHeader>
      <ZText>{`${count}`}</ZText>
      {Array.from({ length: count }).map((_, index) => (
        <ZText key={index}>{`item ${index + 1}`}</ZText>
      ))}
      <ZRow>
        <ZButton
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
        >
          -1
        </ZButton>
        <ZButton onClick={() => setCount(count + 1)}>+1</ZButton>
      </ZRow>
    </ZColumn>
  );
};

export default ListDemoScreen;
