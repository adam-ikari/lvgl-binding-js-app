import {
  ZButton,
  ZButtonTypeEnum,
  ZColumn,
  ZRow,
  ZSizeEnum,
  ZText,
} from "@/components";
import { NavHeaderLayout } from "@/layouts"

import React from "react";

const buttonsData = [
  { text: "Default", type: ZButtonTypeEnum.Default },
  { text: "Primary", type: ZButtonTypeEnum.Primary },
  { text: "Success", type: ZButtonTypeEnum.Success },
  { text: "Info", type: ZButtonTypeEnum.Info },
  { text: "Danger", type: ZButtonTypeEnum.Danger },
  { text: "Warning", type: ZButtonTypeEnum.Warning },
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
