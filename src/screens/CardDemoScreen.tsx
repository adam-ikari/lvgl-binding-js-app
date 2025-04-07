import { COLORS } from "@/common_style";
import { ZCard, ZRow, ZSize, ZText } from "@/components";
import React from "react";

const style = {
  background: {
    "background-color": COLORS.PAGE_BACKGROUND,
  },
};

const rowStyle = {
  ...style.background,
};

const CardDemoScreen = () => {
  return (
    <>
      <ZRow style={rowStyle}>
        <ZText size={ZSize.Large}>Basic Card</ZText>
      </ZRow>
      <ZRow style={rowStyle}>
        <ZCard>
          <ZText>This is card content</ZText>
        </ZCard>
      </ZRow>
      <ZRow style={rowStyle}>
        <ZText size={ZSize.Large}>Card with Header and Footer</ZText>
      </ZRow>
      <ZRow style={rowStyle}>
        <ZCard
          header={<ZText size={ZSize.Large}>Title</ZText>}
          footer={<ZText size={ZSize.Small}>Footer</ZText>}
        >
          <ZText>This is card content</ZText>
        </ZCard>
      </ZRow>
    </>
  );
};

export default CardDemoScreen;
