import imgsrc from "@/assets/avatar.png";
import { ZCard, ZImage, ZRow, ZSizeEnum, ZText } from "@/components";
import { COLORS } from "@/styles/common_style";
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
        <ZText size={ZSizeEnum.Large}>Basic Card</ZText>
      </ZRow>
      <ZRow style={rowStyle}>
        <ZCard content={<ZText>This is card content</ZText>}></ZCard>
      </ZRow>
      <ZRow style={rowStyle}>
        <ZText size={ZSizeEnum.Large}>
          Card with Cover, Header, Content and Footer
        </ZText>
      </ZRow>
      <ZRow style={rowStyle}>
        <ZCard
          cover={<ZImage src={imgsrc} round={false} />}
          header={<ZText size={ZSizeEnum.Large}>Title</ZText>}
          content={<ZText>This is card content</ZText>}
          footer={<ZText size={ZSizeEnum.Small}>Footer</ZText>}
        ></ZCard>
        <ZCard
          cover={<ZImage src={imgsrc} round={false} />}
          header={<ZText size={ZSizeEnum.Large}>Title</ZText>}
          content={<ZText>This is card content</ZText>}
          footer={<ZText size={ZSizeEnum.Small}>Footer</ZText>}
        ></ZCard>
        <ZCard
          cover={<ZImage src={imgsrc} round={false} />}
          header={<ZText size={ZSizeEnum.Large}>Title</ZText>}
          content={<ZText>This is card content</ZText>}
          footer={<ZText size={ZSizeEnum.Small}>Footer</ZText>}
        ></ZCard>
        <ZCard
          cover={<ZImage src={imgsrc} round={false} />}
          header={<ZText size={ZSizeEnum.Large}>Title</ZText>}
          content={<ZText>This is card content</ZText>}
          footer={<ZText size={ZSizeEnum.Small}>Footer</ZText>}
        ></ZCard>
      </ZRow>
    </>
  );
};

export default CardDemoScreen;
