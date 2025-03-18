import {
  ZButton,
  ZButtonType,
  ZColumn,
  ZRow,
  ZSizeEnum,
  ZText,
} from "@/components";
import { NavHeaderLayout } from "@/layouts"

import React from "react";

const buttonsData = [
  { text: "Default", type: ZButtonType.Default },
  { text: "Primary", type: ZButtonType.Primary },
  { text: "Success", type: ZButtonType.Success },
  { text: "Info", type: ZButtonType.Info },
  { text: "Danger", type: ZButtonType.Danger },
  { text: "Warning", type: ZButtonType.Warning },
];

const ButtonDemoScreen = () => {
  return (
    <NavHeaderLayout withBack={true} title={"Button Demo"}>
      <ZColumn>
        <ZText size={ZSizeEnum.Large}>Size</ZText>
        <ZRow>
          {buttonsData.map((item, index) => (
            <ZButton key={index} size={ZSizeEnum.Small} type={item.type}>
              {item.text}
            </ZButton>
          ))}
        </ZRow>
        <ZRow>
          {buttonsData.map((item, index) => (
            <ZButton key={index} type={item.type}>
              {item.text}
            </ZButton>
          ))}
        </ZRow>
        <ZRow>
          {buttonsData.map((item, index) => (
            <ZButton key={index} size={ZSizeEnum.Large} type={item.type}>
              {item.text}
            </ZButton>
          ))}
        </ZRow>
        <ZText size={ZSizeEnum.Large}>Text Button</ZText>
        <ZRow>
          {buttonsData.map((item, index) => (
            <ZButton key={index} type={item.type} text>
              {item.text}
            </ZButton>
          ))}
        </ZRow>
      </ZColumn>
    </NavHeaderLayout>
  );
};

export default ButtonDemoScreen;
