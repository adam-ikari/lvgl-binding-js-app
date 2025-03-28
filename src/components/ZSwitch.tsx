import { ZStyleProps } from ".";
import { useMergeStyle } from "@/hooks/styleHooks";
import { Switch } from "lvgljs-ui";
import React, { useEffect, useState } from "react";

const mergeStyle = useMergeStyle();

interface ZSwitchProps {
  style?: ZStyleProps;
  value?: boolean;
  onChange?: (value: boolean) => void;
  [key: string]: any; // Allow other props to be passed to the Switch component
}

const ZSwitch = (props: ZSwitchProps) => {
  const {
    style: propStyle = {},
    value: propValue = false,
    onChange = (_) => {},
    ...restProps
  } = props;

  const [value, setValue] = useState(propValue);

  useEffect(() => {
    if (onChange) {
      onChange(value);
    }
  }, [value]);

  return (
    <Switch
      style={mergeStyle(propStyle)}
      {...restProps}
      onChange={() => {
        setValue(!value);
      }}
    />
  );
};

export type { ZSwitchProps };
export { ZSwitch };
