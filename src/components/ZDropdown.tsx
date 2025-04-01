import { ZSizeEnum, ZStyleProps } from ".";
import { COMMON_STYLE } from "../common_style";
import { useMergeStyle } from "../hooks/styleHooks";
import { Dropdownlist } from "lvgljs-ui";
import React, { useEffect, useLayoutEffect, useState } from "react";

const mergeStyle = useMergeStyle();

interface ZDropdownProps {
  style?: ZStyleProps;
  value?: any;
  options?: Array<{ label: string; value: any }>;
  size?: ZSizeEnum;
  onChange?: (value: any) => void;
  placeholder?: string;
  [key: string]: any;
}

const baseStyle: ZStyleProps = mergeStyle(COMMON_STYLE.radius4);

const sizeStyleMap: Record<string, ZStyleProps> = {
  small: mergeStyle(COMMON_STYLE.width120, COMMON_STYLE.height32),
  default: mergeStyle(COMMON_STYLE.width160, COMMON_STYLE.height36),
  large: mergeStyle(COMMON_STYLE.width200, COMMON_STYLE.height40),
};

const ZDropdown = (props: ZDropdownProps) => {
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

  const handleChange = (e) => {
    setValue(options.find((opt) => opt.label === e.value)?.value);
    // onChange(value);
  };

  return (
    <Dropdownlist
      items={options.map((opt) => opt.label)}
      selectIndex={options.findIndex((opt) => opt.value === propValue)}
      // text={value || placeholder}
      // direction={0}
      // arrow={1}
      // highlightSelect={true}
      style={mergeStyle(baseStyle, sizeStyleMap[size], propStyle)}
      onChange={handleChange}
      {...restProps}
    />
  );
};

export type { ZDropdownProps };
export { ZDropdown };
