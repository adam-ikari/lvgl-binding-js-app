import { COMMON_STYLE } from "@/common_style";
import { ZSizeEnum } from "@/components";
import { ZDropdown } from "@/components";
import { ZCard, ZText } from "@/components";
import { useMergeStyle } from "@/hooks/styleHooks";
import React from "react";

const mergeStyle = useMergeStyle();

const PageSession = ({ children, title }) => (
  <ZCard
    style={mergeStyle(COMMON_STYLE.fullWidth)}
    header={<ZText size={ZSizeEnum.Large}>{title}</ZText>}
  >
    {children}
  </ZCard>
);

const DropdownDemoScreen = () => {
  const options = [
    { label: "option1", value: "value1" },
    { label: "option2", value: "value2" },
    { label: "option3", value: "value3" },
  ];

  return (
    <PageSession title={"Basic Dropdown Demo"}>
      <ZDropdown options={options} />
    </PageSession>
  );
};

export default DropdownDemoScreen;
