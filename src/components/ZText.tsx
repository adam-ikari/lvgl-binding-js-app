import { ZSizeEnum, ZStyleProps } from ".";
import { COLORS, COMMON_STYLE } from "../common_style";
import { Text } from "lvgljs-ui";
import React, { useMemo } from "react";

enum ZTextTypeEnum {
  Default = "default",
  Primary = "primary",
  Success = "success",
  Info = "info",
  Danger = "danger",
  Warning = "warning",
}

interface ZTextProps {
  children?: string;
  style?: ZStyleProps;
  size?: ZSizeEnum;
  type?: ZTextTypeEnum;
  light?: boolean;
  [key: string]: any;
}

const baseStyle: ZStyleProps = {};

const sizeStyleMap: Record<string, ZStyleProps> = {
  small: {
    ...COMMON_STYLE.fontSizeSmall,
  },
  default: {
    ...COMMON_STYLE.fontSizeDefault,
  },
  large: {
    ...COMMON_STYLE.fontSizeLarge,
  },
};

const typeStyleMap: Record<string, ZStyleProps> = {
  primary: {
    "text-color": COLORS.PRIMARY,
  },
  success: {
    "text-color": COLORS.SUCCESS,
  },
  info: {
    "text-color": COLORS.INFO,
  },
  danger: {
    "text-color": COLORS.DANGER,
  },
  warning: {
    "text-color": COLORS.WARNING,
  },
  default: {
    "text-color": COLORS.REGULAR_TEXT,
  },
};

const lightStyleMap: Record<string, ZStyleProps> = {
  primary: {
    "text-color": COLORS.PRIMARY,
  },
  success: {
    "text-color": COLORS.SUCCESS,
  },
  info: {
    "text-color": COLORS.INFO,
  },
  danger: {
    "text-color": COLORS.DANGER,
  },
  warning: {
    "text-color": COLORS.WARNING,
  },
  default: {
    "text-color": COLORS.WHITE,
  },
};

const ZText = (props: ZTextProps) => {
  const {
    children = "",
    style: propStyle = {},
    size = ZSizeEnum.Default,
    type = ZTextTypeEnum.Default,
    light,
  } = props;

  const computedStyle = useMemo(() => {
    return {
      ...baseStyle,
      ...sizeStyleMap[size],
      ...(light ? lightStyleMap[type] : typeStyleMap[type]),
    };
  }, [size, type, light]);

  return (
    <Text
      style={{
        ...computedStyle,
        ...propStyle,
      }}
    >
      {children}
    </Text>
  );
};
export type { ZTextProps };
export { ZText, ZTextTypeEnum };
