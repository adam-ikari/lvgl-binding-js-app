import { ZSizeEnum, ZStyleProps } from ".";
import { COMMON_STYLE } from "../common_style";
import { useMergeStyle } from "../hooks/styleHooks";
import { Dropdownlist } from "sdk/ui";
import React, { useLayoutEffect, useState } from "react";

interface ZDropdownProps<T> {
  style?: ZStyleProps;
  value?: T;
  options?: Array<{ label: string; value: T }>;
  size?: ZSizeEnum;
  onChange?: (value: T) => void;
  placeholder?: string;
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

  const handleChange = (e: { value: number }) => {
    const selectedValue = options[e.value]?.value;
    setValue(selectedValue);
    if (onChange && selectedValue !== undefined) {
      onChange(selectedValue);
    }
  };

  return (
    <Dropdownlist
      items={options.map((opt) => opt.label)}
      selectIndex={options.findIndex((opt) => opt.value === propValue)}
      // text={propValue ? undefined : placeholder}
      // direction={0}
      // arrow={1}
      highlightSelect={true}
      style={mergeStyle(baseStyle, sizeStyleMap[size], propStyle)}
      onChange={handleChange}
      {...restProps}
    />
  );
};

export type { ZDropdownProps };
export default ZDropdown;
