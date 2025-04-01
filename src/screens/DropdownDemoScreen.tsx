import { COMMON_STYLE } from "@/common_style";
import { ZSizeEnum } from "@/components";
import { ZDropdown } from "@/components";
import { ZCard, ZText } from "@/components";
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

const options = [
  { label: "option1", value: 1 },
  { label: "option2", value: 2 },
  { label: "option3", value: 3 },
];

const DropdownDemoScreen = () => {
  const [value, setValue] = useState(options[0].value);

  return (
    <PageSession title={"Basic Dropdown Demo"}>
      <ZDropdown
        options={options}
        value={value}
        onChange={(value) => {
          console.log(value);
          setValue(value);
        }}
      />
    </PageSession>
  );
};

export default DropdownDemoScreen;
