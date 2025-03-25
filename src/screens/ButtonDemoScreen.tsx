import { COLORS } from "@/common_style";
import {
  ZButton,
  ZButtonGroup,
  ZButtonTypeEnum,
  ZRow,
  ZSizeEnum,
  ZText,
} from "@/components";
import { ZIconSymbol } from "@/components";
import { ZNavScreenLayout } from "@/layouts";
import React from "react";

const buttonsData = [
  { text: "Default", type: ZButtonTypeEnum.Default },
  { text: "Primary", type: ZButtonTypeEnum.Primary },
  { text: "Success", type: ZButtonTypeEnum.Success },
  { text: "Info", type: ZButtonTypeEnum.Info },
  { text: "Danger", type: ZButtonTypeEnum.Danger },
  { text: "Warning", type: ZButtonTypeEnum.Warning },
];

const style = {
  background: {
    "background-color": COLORS.PAGE_BACKGROUND,
  },
};

const rowStyle = {
  ...style.background,
};

const ButtonDemoScreen = () => {
  return (
    <ZNavScreenLayout title={"Button Demo"} withBack>
      <ZText size={ZSizeEnum.Large}>Size</ZText>
      <ZRow style={rowStyle}>
        {buttonsData.map((item, index) => (
          <ZButton key={index} size={ZSizeEnum.Small} type={item.type}>
            {item.text}
          </ZButton>
        ))}
      </ZRow>
      <ZRow style={rowStyle}>
        {buttonsData.map((item, index) => (
          <ZButton key={index} type={item.type}>
            {item.text}
          </ZButton>
        ))}
      </ZRow>
      <ZRow style={rowStyle}>
        {buttonsData.map((item, index) => (
          <ZButton key={index} size={ZSizeEnum.Large} type={item.type}>
            {item.text}
          </ZButton>
        ))}
      </ZRow>
      <ZText size={ZSizeEnum.Large}>Text Button</ZText>
      <ZRow style={rowStyle}>
        {buttonsData.map((item, index) => (
          <ZButton key={index} type={item.type} text>
            {item.text}
          </ZButton>
        ))}
      </ZRow>
      <ZText size={ZSizeEnum.Large}>Disable Button</ZText>
      <ZRow style={rowStyle}>
        {buttonsData.map((item, index) => (
          <ZButton key={index} type={item.type} disable>
            {item.text}
          </ZButton>
        ))}
      </ZRow>
      <ZText size={ZSizeEnum.Large}>Round Button</ZText>
      <ZRow style={rowStyle}>
        {buttonsData.map((item, index) => (
          <ZButton key={index} type={item.type} round>
            {item.text}
          </ZButton>
        ))}
      </ZRow>
      <ZText size={ZSizeEnum.Large}>Icon Button</ZText>
      <ZRow style={rowStyle}>
        <ZButton size={ZSizeEnum.Small} icon={ZIconSymbol.Up} round />
        <ZButton size={ZSizeEnum.Small} icon={ZIconSymbol.Down} round />
        <ZButton size={ZSizeEnum.Small} icon={ZIconSymbol.Left} round />
        <ZButton size={ZSizeEnum.Small} icon={ZIconSymbol.Right} round />
      </ZRow>
      <ZRow style={rowStyle}>
        <ZButton type={ZButtonTypeEnum.Primary} icon={ZIconSymbol.Home}>
          Home
        </ZButton>
        <ZButton icon={ZIconSymbol.Call} text>
          Call
        </ZButton>
        <ZButton type={ZButtonTypeEnum.Danger} icon={ZIconSymbol.Trash} round>
          Delete
        </ZButton>
        <ZButton
          type={ZButtonTypeEnum.Info}
          icon={ZIconSymbol.Trash}
          disable
          round
        >
          Delete
        </ZButton>
      </ZRow>
      <ZRow style={rowStyle}>
        <ZButton size={ZSizeEnum.Large} icon={ZIconSymbol.Battery1}>
          20%
        </ZButton>
        <ZButton size={ZSizeEnum.Large} icon={ZIconSymbol.Battery2}>
          50%
        </ZButton>
        <ZButton size={ZSizeEnum.Large} icon={ZIconSymbol.Battery3}>
          80%
        </ZButton>
      </ZRow>
      <ZText size={ZSizeEnum.Large}>Button Group</ZText>
      <ZRow style={rowStyle}>
        <ZButtonGroup size={ZSizeEnum.Small}>
          <ZButton type={ZButtonTypeEnum.Primary}>One</ZButton>
          <ZButton>Two</ZButton>
          <ZButton>Three</ZButton>
        </ZButtonGroup>
      </ZRow>
      <ZRow style={rowStyle}>
        <ZButtonGroup>
          <ZButton type={ZButtonTypeEnum.Primary}>One</ZButton>
          <ZButton>Two</ZButton>
          <ZButton>Three</ZButton>
        </ZButtonGroup>
      </ZRow>
      <ZRow style={rowStyle}>
        <ZButtonGroup size={ZSizeEnum.Large}>
          <ZButton type={ZButtonTypeEnum.Primary}>One</ZButton>
          <ZButton>Two</ZButton>
          <ZButton>Three</ZButton>
        </ZButtonGroup>
      </ZRow>
    </ZNavScreenLayout>
  );
};

export default ButtonDemoScreen;
