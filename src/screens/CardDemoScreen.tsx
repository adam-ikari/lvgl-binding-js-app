import imgsrc from "@/assets/avatar.png";
import { ZCard, ZImage, ZRow, ZSizeEnum, ZText } from "@/components";
import { COLORS } from "@/styles/common_style";
import React from "react";
import { useTranslation } from "react-i18next";

const style = {
  background: {
    "background-color": COLORS.PAGE_BACKGROUND,
  },
};

const rowStyle = {
  ...style.background,
};

const CardDemoScreen = () => {
  const { t } = useTranslation();

  return (
    <>
      <ZRow style={rowStyle}>
        <ZText size={ZSizeEnum.Large}>{t("CARD.BASIC")}</ZText>
      </ZRow>
      <ZRow style={rowStyle}>
        <ZCard content={<ZText>{t("CARD.CONTENT")}</ZText>}></ZCard>
      </ZRow>
      <ZRow style={rowStyle}>
        <ZText size={ZSizeEnum.Large}>
          {t("CARD.FULL")}
        </ZText>
      </ZRow>
      <ZRow style={rowStyle} gap={16}>
        <ZCard
          cover={<ZImage src={imgsrc} round={false} />}
          header={<ZText size={ZSizeEnum.Large}>{t("CARD.TITLE")}</ZText>}
          content={<ZText>{t("CARD.CONTENT")}</ZText>}
          footer={<ZText size={ZSizeEnum.Small}>{t("CARD.FOOTER")}</ZText>}
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
