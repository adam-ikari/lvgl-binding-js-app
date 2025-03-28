import { ZIconSymbol, ZSizeEnum, ZStyleProps, ZText } from ".";
import { ZIcon } from "./ZIcon";
import { COLORS, COMMON_STYLE, CONSTANTS } from "@/common_style";
import { useMergeStyle } from "@/hooks/styleHooks";
import { Button, View } from "lvgljs-ui";
import * as _ from "radash";
import React, { useMemo } from "react";

const mergeStyle = useMergeStyle();

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
  [key: string]: any;
}

const baseStyle: ZStyleProps = mergeStyle(
  COMMON_STYLE.flexRow,
  COMMON_STYLE.alignItemsCenter,
  COMMON_STYLE.justifyContentCenter,
  COMMON_STYLE.autoWidth,
  COMMON_STYLE.autoHeight,
  COMMON_STYLE.radius4,
  {
    "border-color": COLORS.BORDER,
    "shadow-width": 0,
    "padding-top": 0,
    "padding-bottom": 0,
  },
);

const normalStyleMap: Record<string, ZStyleProps> = {
  primary: {
    ...COMMON_STYLE.border1,
    "background-color": COLORS.PRIMARY,
    "text-color": COLORS.WHITE,
  },
  success: {
    ...COMMON_STYLE.border1,
    "background-color": COLORS.SUCCESS,
    "text-color": COLORS.WHITE,
  },
  info: {
    ...COMMON_STYLE.border1,
    "background-color": COLORS.INFO,
    "text-color": COLORS.WHITE,
  },
  danger: {
    ...COMMON_STYLE.border1,
    "background-color": COLORS.DANGER,
    "text-color": COLORS.WHITE,
  },
  warning: {
    ...COMMON_STYLE.border1,
    "background-color": COLORS.WARNING,
    "text-color": COLORS.WHITE,
  },
  default: {
    ...COMMON_STYLE.border1,
    "background-color": COLORS.WHITE,
    "text-color": COLORS.REGULAR_TEXT,
  },
};

const textStyleMap: Record<string, ZStyleProps> = {
  primary: {
    ...COMMON_STYLE.noBorder,
    "background-color": COLORS.WHITE,
    "text-color": COLORS.PRIMARY,
  },
  success: {
    ...COMMON_STYLE.noBorder,
    "background-color": COLORS.WHITE,
    "text-color": COLORS.SUCCESS,
  },
  info: {
    ...COMMON_STYLE.noBorder,
    "background-color": COLORS.WHITE,
    "text-color": COLORS.INFO,
  },
  danger: {
    ...COMMON_STYLE.noBorder,
    "background-color": COLORS.WHITE,
    "text-color": COLORS.DANGER,
  },
  warning: {
    ...COMMON_STYLE.noBorder,
    "background-color": COLORS.WHITE,
    "text-color": COLORS.WARNING,
  },
  default: {
    ...COMMON_STYLE.noBorder,
    "background-color": COLORS.WHITE,
    "text-color": COLORS.REGULAR_TEXT,
  },
};

const disabledStyle: ZStyleProps = {
  opacity: 0.6,
};

const sizeStyleMap: Record<string, ZStyleProps> = {
  small: mergeStyle(
    COMMON_STYLE.minWidth32,
    COMMON_STYLE.minHeight32,
    COMMON_STYLE.fontSizeSmall,
    COMMON_STYLE.paddingHorizontal8,
  ),
  default: mergeStyle(
    COMMON_STYLE.minWidth36,
    COMMON_STYLE.minHeight36,
    COMMON_STYLE.fontSizeDefault,
    COMMON_STYLE.paddingHorizontal8,
  ),
  large: mergeStyle(
    COMMON_STYLE.minWidth40,
    COMMON_STYLE.minHeight40,
    COMMON_STYLE.fontSizeLarge,
    COMMON_STYLE.paddingHorizontal8,
  ),
};

const roundStyle: ZStyleProps = COMMON_STYLE.radiusMax

const noChildStyle: ZStyleProps = {
  padding: 0,
};

interface ButtonContentProps {
  icon?: ZIconSymbol;
  children?: string;
  size: ZSizeEnum;
}

const ButtonContent = React.memo(
  ({ icon, children, size }: ButtonContentProps) => {
    if (!icon && !children) {
      return null;
    } else {
      return (
        <>
          {icon ? <ZIcon symbol={icon} size={size} /> : null}
          {children ? <ZText size={size}>{children}</ZText> : null}
        </>
      );
    }
  },
);

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
    ...restProps
  } = props;

  const handleClick = () => {
    if (!disable && onClick && _.isFunction(onClick)) {
      onClick();
    }
  };

  const computedStyle = useMemo(
    () =>
      mergeStyle(
        sizeStyleMap[size],
        text ? textStyleMap[type] : normalStyleMap[type],
        round && roundStyle,
        disable && disabledStyle,
        !children && noChildStyle,
      ),
    [type, size, text, round, disable, children],
  );

  const Component = disable ? View : Button;

  return (
    <Component
      style={mergeStyle(baseStyle, computedStyle, propStyle)}
      onClick={handleClick}
      {...restProps}
    >
      <ButtonContent icon={icon} size={size}>
        {children}
      </ButtonContent>
    </Component>
  );
};

export type { ZButtonProps };
export { ZButton, ZButtonTypeEnum };
