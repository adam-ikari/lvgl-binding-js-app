import { COMMON_STYLE } from "@/common_style";
import { ZButton, ZCard, ZRow, ZSizeEnum, ZSwitch, ZText } from "@/components";
import { ZAlignItemsEnum } from "@/components/ZFlexContainer";
import { useMergeStyle } from "@/hooks/styleHooks";
import React, { useState } from "react";

const mergeStyle = useMergeStyle();

const PageSession = ({ children, title }) => (
  <ZCard
    style={mergeStyle(COMMON_STYLE.fullWidth)}
    header={<ZText size={ZSizeEnum.Large}>{title}</ZText>}
  >
    {children}
  </ZCard>
);

const SwitchDemoScreen = () => {
  const [onOff, setOnOff] = useState(false);
  return (
    <>
      <PageSession title="Size">
        <ZRow alignItems={ZAlignItemsEnum.Center}>
          {[
            { size: ZSizeEnum.Small },
            { size: ZSizeEnum.Default },
            { size: ZSizeEnum.Large },
          ].map(({ size }, index) => {
            return (
              <ZSwitch
                key={index}
                value={onOff}
                onChange={(value) => {
                  console.log("onChange:" + JSON.stringify(value));
                  setOnOff(value);
                }}
                size={size}
              ></ZSwitch>
            );
          })}
        </ZRow>
      </PageSession>
      <PageSession title="Text description">
        <ZRow alignItems={ZAlignItemsEnum.Center}>
          <ZSwitch
            value={onOff}
            onChange={(value) => {
              console.log("onChange:" + JSON.stringify(value));
              setOnOff(value);
            }}
            activeText="ON"
            inactiveText="OFF"
          ></ZSwitch>
        </ZRow>
      </PageSession>
      <PageSession title="Disable">
        <ZRow alignItems={ZAlignItemsEnum.Center}>
          <ZSwitch
            value={onOff}
            onChange={(value) => {
              console.log("onChange:" + JSON.stringify(value));
              setOnOff(value);
            }}
            disabled
          ></ZSwitch>
        </ZRow>
      </PageSession>
    </>
  );
};
export default SwitchDemoScreen;
