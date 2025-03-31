import { COMMON_STYLE } from "@/common_style";
import { ZButton, ZRow, ZSizeEnum, ZSwitch, ZText } from "@/components";
import { ZAlignItemsEnum } from "@/components/ZFlexContainer";
import { useMergeStyle } from "@/hooks/styleHooks";
import React, { useState } from "react";

const mergeStyle = useMergeStyle();
const SwitchDemoScreen = () => {
  const [onOff, setOnOff] = useState(false);
  return (
    <>
      <ZText>{JSON.stringify(onOff)}</ZText>

      <ZRow alignItems={ZAlignItemsEnum.Center}>
        <ZButton size={ZSizeEnum.Small}>Button</ZButton>
        <ZSwitch
          value={onOff}
          onChange={(value) => {
            setOnOff(value);
          }}
          size={ZSizeEnum.Small}
        ></ZSwitch>
      </ZRow>

      <ZRow alignItems={ZAlignItemsEnum.Center}>
        <ZButton>Button</ZButton>
        <ZSwitch
          value={onOff}
          onChange={(value) => {
            setOnOff(value);
          }}
        ></ZSwitch>
      </ZRow>

      <ZRow alignItems={ZAlignItemsEnum.Center}>
        <ZButton size={ZSizeEnum.Large}>Button</ZButton>
        <ZSwitch
          value={onOff}
          onChange={(value) => {
            setOnOff(value);
          }}
          size={ZSizeEnum.Large}
        ></ZSwitch>
      </ZRow>
    </>
  );
};
export default SwitchDemoScreen;
