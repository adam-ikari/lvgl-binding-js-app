import { ZSizeEnum, ZStyleProps } from ".";
import { COMMON_STYLE } from "../common_style";
import { useMergeStyle } from "../hooks/styleHooks";
import { Dropdownlist } from "lvgljs-ui";
import React, { useEffect, useState } from "react";

const mergeStyle = useMergeStyle();

interface ZDropdownProps {
  style?: ZStyleProps;
  value?: string;
  options?: Array<{ label: string; value: string }>;
  size?: ZSizeEnum;
  onChange?: (value: string) => void;
  placeholder?: string;
  [key: string]: any;
}

const sizeStyleMap: Record<string, ZStyleProps> = {
  small: mergeStyle(COMMON_STYLE.width120, COMMON_STYLE.height32),
  default: mergeStyle(COMMON_STYLE.width160, COMMON_STYLE.height36),
  large: mergeStyle(COMMON_STYLE.width200, COMMON_STYLE.height40),
};

const ZDropdown = (props: ZDropdownProps) => {
  const {
    style: propStyle = {},
    value: propValue = "",
    options = [],
    onChange = (_) => {},
    size = ZSizeEnum.Default,
    placeholder = "please select",
    ...restProps
  } = props;

  const [value, setValue] = useState(propValue);

  useEffect(() => {
    setValue(propValue);
  }, [propValue]);

  const handleChange = (e: { value: number }) => {
    const selectedValue = options[e.value]?.value || "";
    setValue(selectedValue);
    onChange?.(selectedValue);
  };

  return (
    <Dropdownlist
      items={options.map((opt) => opt.label)}
      // selectIndex={2}
      // text={value || placeholder}
      // direction={0}
      // arrow={1}
      // highlightSelect={true}
      // style={mergeStyle(sizeStyleMap[size], propStyle)}
      // onChange={handleChange}
      // {...restProps}
    />
  );
};

export type { ZDropdownProps };
export { ZDropdown };
