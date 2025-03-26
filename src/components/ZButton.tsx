import { ZIconSymbol, ZSizeEnum, ZStyleProps, ZText } from ".";
import { ZIcon } from "./ZIcon";
import { COLORS, COMMON_STYLE, CONSTANTS } from "@/common_style";
import { Button } from "lvgljs-ui";
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
  style?: ZStyleProps;
  icon?: ZIconSymbol;
  type?: ZButtonTypeEnum;
  size?: ZSizeEnum;
  text?: boolean;
  round?: boolean;
  disable?: boolean;
  onClick?: () => void;
}

const baseStyle: ZStyleProps = {
  "border-radius": 4,
  "border-color": "#dedfe2",
  "shadow-width": 0,
  ...COMMON_STYLE.minWidth40,
  ...COMMON_STYLE.fontSizeDefault,
  ...COMMON_STYLE.flexRow,
  ...COMMON_STYLE.alignItemsCenter,
  "align-items": "center",
  "justify-content": "center",
};

const normalStyleMap: Record<string, ZStyleProps> = {
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

const textStyleMap: Record<string, ZStyleProps> = {
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

const disabledStyle: ZStyleProps = {
  opacity: 0.6,
};

const sizeStyleMap: Record<string, ZStyleProps> = {
  small: {
    ...COMMON_STYLE.minWidth32,
    ...COMMON_STYLE.minHeight32,
    ...COMMON_STYLE.fontSizeSmall,
    padding:4
  },
  default: {
    ...COMMON_STYLE.minWidth36,
    ...COMMON_STYLE.minHeight36,
    ...COMMON_STYLE.fontSizeDefault,
    padding:8
  },
  large: {
    ...COMMON_STYLE.minWidth40,
    ...COMMON_STYLE.minHeight40,
    ...COMMON_STYLE.fontSizeLarge,
    padding:16
  },
};

const roundStyle: ZStyleProps = {
  "border-radius": CONSTANTS.MAX_RADIUS,
};

const noChildStyle: ZStyleProps = {
  padding: 0,
};

const ZButton = (props: ZButtonProps) => {
  const {
    children,
    style: propStyle = {},
    icon,
    type = ZButtonTypeEnum.Default,
    size = ZSizeEnum.Default,
    text = false,
    round = false,
    disable = false,
    onClick,
  } = props;

  const computedStyle = useMemo(() => {
    return {
      ...(!children && noChildStyle),
      ...sizeStyleMap[size],
      ...(text ? textStyleMap[type] : normalStyleMap[type]),
      ...(round && roundStyle),
      ...(disable && disabledStyle),
    };
  }, [type, size, text, round, disable, children]);

  const handleClick = () => {
    if (!disable && onClick) {
      onClick();
    }
  };
  return (
    <Button
      style={{
        ...baseStyle,
        ...computedStyle,
        ...propStyle,
      }}
      onClick={handleClick}
    >
      {icon && <ZIcon symbol={icon} size={size} />}
      {children && <ZText size={size}>{children}</ZText>}
    </Button>
  );
};

export type { ZButtonProps };
export { ZButton, ZButtonTypeEnum };
