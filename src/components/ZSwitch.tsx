import {
  ZColorTypeEnum,
  ZFlexAlignItems,
  ZRow,
  ZSizeEnum,
  ZStyleProps,
  ZText,
} from ".";
import { useMergeStyle } from "@/hooks/styleHooks";
import { COMMON_STYLE } from "@/styles/common_style";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Switch } from "sdk-ui";

const mergeStyle = useMergeStyle();

interface ZSwitchProps {
  style?: ZStyleProps;
  value?: boolean;
  size?: ZSizeEnum;
  onChange?: (value: boolean) => void;
  activeText?: string;
  inactiveText?: string;
  disabled?: boolean;
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
    onChange,
    size = ZSizeEnum.Default,
    activeText,
    inactiveText,
    disabled = false,
    ...restProps
  } = props;

  const [value, setValue] = useState(propValue);

  // 监听外部 propValue 变化，同步内部状态
  useLayoutEffect(() => {
    if (value !== propValue) {
      setValue(propValue);
    }
  }, [propValue]);

  // 内部状态变化时触发回调
  useLayoutEffect(() => {
    if (value !== propValue && onChange) {
      onChange(value);
    }
  }, [value]);

  return (
    <ZRow alignItems={ZFlexAlignItems.Center} gap={4}>
      {inactiveText && (
        <ZText type={!value ? ZColorTypeEnum.Primary : ZColorTypeEnum.Default}>
          {inactiveText}
        </ZText>
      )}
      <Switch
        checked={value}
        style={mergeStyle(sizeStyleMap[size], propStyle)}
        {...restProps}
        onChange={() => {
          setValue(!value);
        }}
        disabled={disabled}
      />
      {activeText && (
        <ZText type={value ? ZColorTypeEnum.Primary : ZColorTypeEnum.Default}>
          {activeText}
        </ZText>
      )}
    </ZRow>
  );
};

export type { ZSwitchProps };
export default ZSwitch;
