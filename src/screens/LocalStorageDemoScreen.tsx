import { ZButton, ZInput, ZRow, ZSizeEnum, ZText } from "@/components";
import { COLORS } from "@/styles/common_style";
import React, { useState } from "react";

const style = {
  background: {
    "background-color": COLORS.PAGE_BACKGROUND,
  },
};

const rowStyle = {
  ...style.background,
};

const LocalStorageDemoScreen = () => {
  const [key, setKey] = useState("key");
  const [value, setValue] = useState("value");
  const [kv, setKV] = useState<{ [key: string]: string }>({});
  return (
    <>
      <ZText size={ZSizeEnum.Large}>Basic</ZText>
      <ZRow style={rowStyle}>
        <ZInput value={key} onChange={(val) => setKey(val)}></ZInput>
      </ZRow>
      <ZRow>
        <ZInput value={value} onChange={(val) => setValue(val)}></ZInput>
      </ZRow>
      <ZText>{JSON.stringify(kv)}</ZText>
      <ZButton onClick={() => window.localStorage.setItem(key, value)}>Save</ZButton>
      <ZButton onClick={() => {setKV({[key]: window.localStorage.getItem(key)})}}>Load</ZButton>
    </>
  );
};

export default LocalStorageDemoScreen;
