import { ZSizeEnum, ZStyleProps } from ".";
import { COMMON_STYLE } from "@/common_style";
import { useMergeStyle } from "@/hooks/styleHooks";
import { Switch } from "lvgljs-ui";
import React, { useEffect, useState } from "react";

const mergeStyle = useMergeStyle();

interface ZSwitchProps {
  style?: ZStyleProps;
  value?: boolean;
  size?: ZSizeEnum;
  onChange?: (value: boolean) => void;
  [key: string]: any; // Allow other props to be passed to the Switch component
}

const sizeStyleMap: Record<string, ZStyleProps> = {
  small: mergeStyle(COMMON_STYLE.width48, COMMON_STYLE.height24),
  default: mergeStyle(COMMON_STYLE.width56, COMMON_STYLE.height28),
  large: mergeStyle(COMMON_STYLE.width80, COMMON_STYLE.height40),
};

const ZSwitch = (props: ZSwitchProps) => {
  const {
    style: propStyle = {},
    value: propValue = false,
    onChange = (_) => {},
    size = ZSizeEnum.Default,
    ...restProps
  } = props;

  const [value, setValue] = useState(propValue);

  // 监听外部 propValue 变化，同步内部状态
  useEffect(() => {
    setValue(propValue);
  }, [propValue]);

  // 内部状态变化时触发回调
  useEffect(() => {
    onChange(value);
  }, [value]);

  return (
    <Switch
      checked={value}
      style={mergeStyle(sizeStyleMap[size], propStyle)}
      {...restProps}
      onChange={() => {
        setValue(!value);
      }}
    />
  );
};

export type { ZSwitchProps };
export { ZSwitch };
