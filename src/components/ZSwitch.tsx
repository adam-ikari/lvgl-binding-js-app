import { ZStyleProps } from ".";
import { useMergeStyle } from "@/hooks/styleHooks";
import { Switch } from "lvgljs-ui";
import React from "react";

const mergeStyle = useMergeStyle();

interface ZSwitchProps {
  style?: ZStyleProps;
  [key: string]: any; // Allow other props to be passed to the Switch component
}

const ZSwitch = (props: ZSwitchProps) => {
  const { style: propStyle = {}, ...restProps } = props;

  return <Switch style={mergeStyle(propStyle)} {...restProps} />;
};

export type { ZSwitchProps };
export { ZSwitch };
