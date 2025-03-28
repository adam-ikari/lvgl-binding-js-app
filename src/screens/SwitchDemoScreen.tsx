import { ZRow, ZSwitch, ZText } from "@/components";
import React, { useState } from "react";

const SwitchDemoScreen = () => {
  const [onOff, setOnOff] = useState(false);
  return (
    <>
      <ZRow>
        <ZText>{JSON.stringify(onOff)}</ZText>
        <ZSwitch
          value={onOff}
          onChange={(value) => {
            setOnOff(value);
          }}
        ></ZSwitch>
      </ZRow>
    </>
  );
};
export default SwitchDemoScreen;
