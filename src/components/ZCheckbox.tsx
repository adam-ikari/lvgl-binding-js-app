import {
  ZFlexAlignItems,
  ZRow,
  ZSizeEnum,
  ZStyleProps,
  ZText,
  ZTextTypeEnum,
} from ".";
import { COMMON_STYLE } from "../styles/common_style";
import { useMergeStyle } from "../hooks/styleHooks";
import { Checkbox } from "sdk-ui";
import React, { useLayoutEffect, useState } from "react";

const mergeStyle = useMergeStyle();

interface ZCheckboxProps {
  style?: ZStyleProps;
  value?: boolean;
  size?: ZSizeEnum;
  onChange?: (value: boolean) => void;
  label?: string;
  disabled?: boolean;
  [key: string]: any; // Allow other props to be passed to the Checkbox component
}

const sizeStyleMap: Record<string, ZStyleProps> = {
  small: mergeStyle(COMMON_STYLE.width48, COMMON_STYLE.height24),
  default: mergeStyle(COMMON_STYLE.width56, COMMON_STYLE.height28),
  large: mergeStyle(COMMON_STYLE.width80, COMMON_STYLE.height40),
};

const ZCheckbox = (props: ZCheckboxProps) => {
  const {
    style: propStyle = {},
    value: propValue = false,
    onChange,
    size = ZSizeEnum.Default,
    label,
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
      <Checkbox
        checked={value}
        style={mergeStyle(sizeStyleMap[size], propStyle)}
        {...restProps}
        onChange={() => {
          setValue(!value);
        }}
        disabled={disabled}
      />
      {label && (
        <ZText type={value ? ZTextTypeEnum.Primary : ZTextTypeEnum.Default}>
          {label}
        </ZText>
      )}
    </ZRow>
  );
};

export type { ZCheckboxProps };
export default ZCheckbox;
