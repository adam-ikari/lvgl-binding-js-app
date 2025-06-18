import { ZSizeEnum, ZStyleProps } from ".";
import { useMergeStyle } from "../hooks/styleHooks";
import { COMMON_STYLE } from "../styles/common_style";
import React, { useEffect, useMemo, useState } from "react";
import {
  Dropdownlist,
  EDropdownListArrowDirection,
  EDropdownlistDirection,
} from "sdk-ui";

enum ZDropdownDirectionEnum {
  None = EDropdownlistDirection.none,
  Left = EDropdownlistDirection.left,
  Right = EDropdownlistDirection.right,
  Top = EDropdownlistDirection.top,
  Bottom = EDropdownlistDirection.bottom,
  Horizontal = EDropdownlistDirection.horizontal,
  Vertical = EDropdownlistDirection.vertical,
  All = EDropdownlistDirection.all,
}

enum ZDropdownArrowEnum {
  Up = EDropdownListArrowDirection.up,
  Down = EDropdownListArrowDirection.down,
  Left = EDropdownListArrowDirection.left,
  Right = EDropdownListArrowDirection.right,
}

interface ZDropdownOption<T> {
  label: string;
  value: T;
  disabled?: boolean;
}

interface ZDropdownProps<T> {
  style?: ZStyleProps;
  value?: T;
  options?: Array<ZDropdownOption<T>>;
  size?: ZSizeEnum;
  onChange?: (value: T | undefined) => void;
  placeholder?: string;
  direction?: ZDropdownDirectionEnum;
  arrow?: ZDropdownArrowEnum;
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

  const [internalValue, setInternalValue] = useState(propValue);

  useEffect(() => {
    setInternalValue(propValue);
  }, [propValue]);

  const selectedIndex = useMemo(() => {
    return options.findIndex((opt) => opt.value === internalValue);
  }, [options, internalValue]);

  const itemLabels = useMemo(() => {
    return options.map((opt) => opt.label);
  }, [options]);

  const handleChange = (e: { value: any }) => {
    const selectedOption = options.find((opt) => opt.label === e.value);
    setInternalValue(e.value);
    if (selectedOption && onChange) {
      onChange(selectedOption.value);
    }
  };

  return (
    <Dropdownlist
      items={itemLabels}
      selectIndex={selectedIndex}
      // text={internalValue !== undefined ? null : placeholder}
      direction={direction}
      arrow={arrow}
      highlightSelect={internalValue !== undefined}
      style={mergeStyle(
        baseStyle,
        sizeStyleMap[size],
        propStyle,
        props.disabled ? COMMON_STYLE.disabled : {},
        internalValue === undefined ? COMMON_STYLE.textSecondary : {},
      )}
      onChange={handleChange}
      {...restProps}
    />
  );
};

export type { ZDropdownProps, ZDropdownDirectionEnum };
export default ZDropdown;
