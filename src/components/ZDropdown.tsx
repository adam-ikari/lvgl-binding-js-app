import { ZSizeEnum, ZStyleProps } from ".";
import { useMergeStyle } from "../hooks/styleHooks";
import { COMMON_STYLE } from "../styles/common_style";
import React, { useLayoutEffect, useState } from "react";
import { Dropdownlist } from "sdk-ui";

const enum ZDropdownDirectionEnum {
  None = 0x00,
  Left = 1 << 0,
  Right = 1 << 1,
  Top = 1 << 2,
  Bottom = 1 << 3,
  Horizontal = (1 << 0) | (1 << 1),
  Vertical = (1 << 2) | (1 << 3),
  All = (1 << 0) | (1 << 1) | (1 << 2) | (1 << 3),
}

const enum ZDropdownArrowEnum {
  Up = 0,
  Right = 1,
  Down = 2,
  Left = 3,
}

interface ZDropdownProps<T> {
  style?: ZStyleProps;
  value?: T;
  options?: Array<{ label: string; value: T }>;
  size?: ZSizeEnum;
  onChange?: (value: T) => void;
  placeholder?: string;
  direction?: ZDropdownDirectionEnum; // 0: up, 1: down, 2: left, 3: right
  arrow?: number;
  [key: string]: any;
}

const ZDropdown = <T,>(props: ZDropdownProps<T>) => {
  const mergeStyle = useMergeStyle();

  const baseStyle: ZStyleProps = mergeStyle(COMMON_STYLE.radius4);

  const sizeStyleMap: Record<string, ZStyleProps> = {
    small: mergeStyle(COMMON_STYLE.width120, COMMON_STYLE.height32),
    default: mergeStyle(COMMON_STYLE.width160, COMMON_STYLE.height36),
    large: mergeStyle(COMMON_STYLE.width200, COMMON_STYLE.height40),
  };

  const {
    style: propStyle = {},
    value: propValue = undefined,
    options = [],
    onChange,
    size = ZSizeEnum.Default,
    placeholder = "please select",
    direction = ZDropdownDirectionEnum.Bottom,
    arrow = ZDropdownArrowEnum.Down,
    ...restProps
  } = props;

  const [value, setValue] = useState(propValue);

  useLayoutEffect(() => {
    if (value !== propValue) {
      setValue(propValue);
    }
  }, [propValue]);

  useLayoutEffect(() => {
    if (value !== propValue && onChange) {
      onChange(value);
    }
  }, [value]);

  const handleChange = (e: { value: any }) => {
    const selectedValue = options.find((opt) => opt.label === e.value)?.value;
    setValue(selectedValue);
    if (onChange) {
      onChange(selectedValue);
    }
  };

  return (
    <Dropdownlist
      items={options.map((opt) => opt.label)}
      selectIndex={options.findIndex((opt) => opt.value === propValue)}
      text={propValue ? undefined : placeholder}
      direction={direction}
      arrow={arrow}
      highlightSelect={true}
      style={mergeStyle(baseStyle, sizeStyleMap[size], propStyle)}
      onChange={handleChange}
      {...restProps}
    />
  );
};

export type { ZDropdownProps, ZDropdownDirectionEnum };
export default ZDropdown;
