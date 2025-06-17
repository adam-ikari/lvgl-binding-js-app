import { ZDropdown, ZText } from "@/components";
import PageSession from "@/screens/common/PageSession";
import React, { useState } from "react";

const options = [
  { label: "option1", value: 1 },
  { label: "option2", value: 2 },
  { label: "option3", value: 3 },
];

const DropdownDemoScreen = () => {
  const [value, setValue] = useState(options[0].value);

  return (
    <PageSession title={"Basic Dropdown Demo"}>
      <ZText>{`value:${value}`}</ZText>
      <ZDropdown
        options={options}
        value={value}
        onChange={(value) => {
          setValue(value);
        }}
      />
    </PageSession>
  );
};

export default DropdownDemoScreen;
