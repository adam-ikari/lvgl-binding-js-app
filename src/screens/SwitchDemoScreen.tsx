import PageSession from "./common/PageSession";
import { ZRow, ZSize, ZSwitch } from "@/components";
import { ZFlexAlignItems } from "@/components/ZFlexContainer";
import React, { useState } from "react";

const SwitchDemoScreen = () => {
  const [onOff, setOnOff] = useState(false);
  return (
    <>
      <PageSession title="Size">
        <ZRow alignItems={ZFlexAlignItems.Center}>
          {[
            { size: ZSize.Small },
            { size: ZSize.Default },
            { size: ZSize.Large },
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
