import { COLORS } from "@/common_style";
import {
  ZButton,
  ZButtonType,
  ZColumn,
  ZHeightEnum,
  ZNavHeader,
  ZRow,
  ZSizeEnum,
  ZWidthEnum,
} from "@/components";
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
    <ZColumn
      width={ZWidthEnum.Full}
      height={ZHeightEnum.Full}
      style={{
        "background-color": COLORS.PAGE_BACKGROUND,
      }}
    >
      <ZNavHeader withBack={true} title={"Button Demo"}></ZNavHeader>
      <ZColumn>
        <ZRow>
          {buttonsData.map((item, index) => (
            <ZButton
              key={index}
              size={ZSizeEnum.Small}
              type={item.type}
              text={item.text}
            />
          ))}
        </ZRow>
        <ZRow>
          {buttonsData.map((item, index) => (
            <ZButton key={index} type={item.type} text={item.text} />
          ))}
        </ZRow>
        <ZRow>
          {buttonsData.map((item, index) => (
            <ZButton
              key={index}
              size={ZSizeEnum.Large}
              type={item.type}
              text={item.text}
            />
          ))}
        </ZRow>
      </ZColumn>
    </ZColumn>
  );
};

export default ButtonDemoScreen;
