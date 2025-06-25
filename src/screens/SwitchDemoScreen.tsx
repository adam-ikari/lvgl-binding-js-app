import { ZRow, ZSizeEnum, ZSwitch } from "@/components";
import { ZFlexAlignItems } from "@/components/ZFlexContainer";
import PageSession from "@/screens/common/PageSession";
import React, { useState } from "react";

const SwitchDemoScreen = () => {
  const [onOff, setOnOff] = useState(false);
  return (
    <>
      <PageSession title="Size">
        <ZRow alignItems={ZFlexAlignItems.Center}>
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
        <ZRow alignItems={ZFlexAlignItems.Center}>
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
        <ZRow alignItems={ZFlexAlignItems.Center}>
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
