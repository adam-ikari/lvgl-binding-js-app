import { ZSizeEnum } from ".";
import { COLORS, COMMON_STYLE } from "../common_style";
import { Button, Text } from "lvgljs-ui";
import { StyleProps } from "lvgljs-ui/core/style";
import React, { useMemo } from "react";

enum ZButtonTypeEnum {
  Default = "default",
  Primary = "primary",
  Success = "success",
  Info = "info",
  Danger = "danger",
  Warning = "warning",
}

interface ZButtonProps {
  children?: string;
  style?: StyleProps;
  type?: ZButtonTypeEnum;
  size?: ZSizeEnum;
  text?: boolean;
  disable?: boolean;
  onClick?: (e: any) => void;
}

const baseStyle: StyleProps = {
  "border-radius": 4,
  "border-color": "#dedfe2",
  "shadow-width": 0,
  ...COMMON_STYLE.minWidth40,
  ...COMMON_STYLE.fontSizeDefault,
  ...COMMON_STYLE.flexRow,
  ...COMMON_STYLE.alignItemsCenter,
};

const normalStyleMap: Record<string, StyleProps> = {
  primary: {
    "border-width": 1,
    "background-color": COLORS.PRIMARY,
    "text-color": COLORS.WHITE,
  },
  success: {
    "border-width": 1,
    "background-color": COLORS.SUCCESS,
    "text-color": COLORS.WHITE,
  },
  info: {
    "border-width": 1,
    "background-color": COLORS.INFO,
    "text-color": COLORS.WHITE,
  },
  danger: {
    "border-width": 1,
    "background-color": COLORS.DANGER,
    "text-color": COLORS.WHITE,
  },
  warning: {
    "border-width": 1,
    "background-color": COLORS.WARNING,
    "text-color": COLORS.WHITE,
  },
  default: {
    "border-width": 1,
    "background-color": COLORS.WHITE,
    "text-color": COLORS.REGULAR_TEXT,
  },
};

const textStyleMap: Record<string, StyleProps> = {
  primary: {
    "border-width": 0,
    "background-color": COLORS.WHITE,
    "text-color": COLORS.PRIMARY,
  },
  success: {
    "border-width": 0,
    "background-color": COLORS.WHITE,
    "text-color": COLORS.SUCCESS,
  },
  info: {
    "border-width": 0,
    "background-color": COLORS.WHITE,
    "text-color": COLORS.INFO,
  },
  danger: {
    "border-width": 0,
    "background-color": COLORS.WHITE,
    "text-color": COLORS.DANGER,
  },
  warning: {
    "border-width": 0,
    "background-color": COLORS.WHITE,
    "text-color": COLORS.WARNING,
  },
  default: {
    "border-width": 0,
    "background-color": COLORS.WHITE,
    "text-color": COLORS.REGULAR_TEXT,
  },
};

const sizeStyleMap: Record<string, StyleProps> = {
  small: {
    ...COMMON_STYLE.minWidth32,
    ...COMMON_STYLE.minHeight32,
    ...COMMON_STYLE.fontSizeSmall,
  },
  default: {
    ...COMMON_STYLE.minWidth40,
    ...COMMON_STYLE.minHeight40,
    ...COMMON_STYLE.fontSizeDefault,
  },
  large: {
    ...COMMON_STYLE.minWidth48,
    ...COMMON_STYLE.minHeight48,
    ...COMMON_STYLE.fontSizeLarge,
  },
};

const ZButton = (props: ZButtonProps) => {
  const {
    children = "",
    style: propStyle = {},
    type = ZButtonTypeEnum.Default,
    size = ZSizeEnum.Default,
    text = false,
    disable = false,
    onClick = (e) => {},
  } = props;

  const computedStyle = useMemo(() => {
    if (text) {
      return {
        ...baseStyle,
        ...textStyleMap[type],
        ...sizeStyleMap[size],
      };
    } else {
      return {
        ...baseStyle,
        ...normalStyleMap[type],
        ...sizeStyleMap[size],
      };
    }
  }, [type, size, text]);

  return (
    <Button
      style={{
        ...computedStyle,
        ...propStyle,
      }}
      onClick={onClick}
    >
      <Text>{children}</Text>
    </Button>
  );
};

export type { ZButtonProps };
export { ZButton, ZButtonTypeEnum };
