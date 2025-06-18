import { ZIconSymbol, ZSizeEnum, ZStyleProps, ZText, ZTextTypeEnum } from ".";
import { ZIcon } from ".";
import { useMergeStyle } from "@/hooks/styleHooks";
import { COLORS, COMMON_STYLE } from "@/styles/common_style";
import * as _ from "radash";
import React, { useMemo } from "react";
import { Button, View } from "sdk-ui";

const enum ZButtonTypeEnum {
  Default = "default",
  Primary = "primary",
  Success = "success",
  Info = "info",
  Danger = "danger",
  Warning = "warning",
}

type ZButtonType = `${ZButtonTypeEnum}`;

interface ZButtonProps {
  children?: string;
  style?: ZStyleProps;
  icon?: ZIconSymbol;
  type?: ZButtonType;
  size?: ZSizeEnum;
  text?: boolean;
  round?: boolean;
  disable?: boolean;
  onClick?: () => void;
  [key: string]: any;
}

interface ButtonContentProps {
  icon?: ZIconSymbol;
  children?: string;
  size: ZSizeEnum;
  type: ZButtonType;
  text: boolean;
}

const ButtonContent = React.memo(
  ({ icon, children, size, type, text }: ButtonContentProps) => {
    if (!icon && !children) {
      return null;
    } else {
      return (
        <>
          {icon && (
            <ZIcon
              symbol={icon}
              size={size}
              light={type !== ZButtonTypeEnum.Default}
            />
          )}
          {children && (
            <>
              {text ? (
                <ZText size={size} type={type}>
                  {children}
                </ZText>
              ) : (
                <ZText light={type !== ZButtonTypeEnum.Default}>
                  {children}
                </ZText>
              )}
            </>
          )}
        </>
      );
    }
  },
);

const ZButton = (props: ZButtonProps) => {
  const mergeStyle = useMergeStyle();

  const baseStyle: ZStyleProps = mergeStyle(
    COMMON_STYLE.flexRow,
    COMMON_STYLE.alignItemsCenter,
    COMMON_STYLE.justifyContentCenter,
    COMMON_STYLE.autoWidth,
    COMMON_STYLE.autoHeight,
    COMMON_STYLE.radius4,
    COMMON_STYLE.paddingVertical0,
    {
      "border-color": COLORS.BORDER,
      "shadow-width": 0,
    },
  );

  const normalStyleMap: Record<string, ZStyleProps> = {
    primary: mergeStyle(COMMON_STYLE.border1, {
      "background-color": COLORS.PRIMARY,
      "text-color": COLORS.WHITE,
    }),
    success: mergeStyle(COMMON_STYLE.border1, {
      "background-color": COLORS.SUCCESS,
      "text-color": COLORS.WHITE,
    }),
    info: mergeStyle(COMMON_STYLE.border1, {
      ...COMMON_STYLE.border1,
      "background-color": COLORS.INFO,
      "text-color": COLORS.WHITE,
    }),
    danger: mergeStyle(COMMON_STYLE.border1, {
      "background-color": COLORS.DANGER,
      "text-color": COLORS.WHITE,
    }),
    warning: mergeStyle(COMMON_STYLE.border1, {
      "background-color": COLORS.WARNING,
      "text-color": COLORS.WHITE,
    }),
    default: mergeStyle(COMMON_STYLE.border1, {
      ...COMMON_STYLE.border1,
      "background-color": COLORS.WHITE,
      "text-color": COLORS.REGULAR_TEXT,
    }),
  };

  const textStyleMap: Record<string, ZStyleProps> = {
    primary: mergeStyle(COMMON_STYLE.noBorder, {
      "background-color": COLORS.WHITE,
      "text-color": COLORS.PRIMARY,
    }),
    success: mergeStyle(COMMON_STYLE.noBorder, {
      "background-color": COLORS.WHITE,
      "text-color": COLORS.SUCCESS,
    }),
    info: mergeStyle(COMMON_STYLE.noBorder, {
      "background-color": COLORS.WHITE,
      "text-color": COLORS.INFO,
    }),
    danger: mergeStyle(COMMON_STYLE.noBorder, {
      "background-color": COLORS.WHITE,
      "text-color": COLORS.DANGER,
    }),
    warning: mergeStyle(COMMON_STYLE.noBorder, {
      "background-color": COLORS.WHITE,
      "text-color": COLORS.WARNING,
    }),
    default: mergeStyle(COMMON_STYLE.noBorder, {
      "background-color": COLORS.WHITE,
      "text-color": COLORS.REGULAR_TEXT,
    }),
  };

  const disabledStyle: ZStyleProps = {
    opacity: 0.6,
  };

  const sizeStyleMap: Record<string, ZStyleProps> = {
    small: mergeStyle(
      COMMON_STYLE.minWidth32,
      COMMON_STYLE.height32,
      COMMON_STYLE.fontSizeSmall,
      COMMON_STYLE.paddingHorizontal4,
    ),
    default: mergeStyle(
      COMMON_STYLE.minWidth36,
      COMMON_STYLE.height36,
      COMMON_STYLE.fontSizeDefault,
      COMMON_STYLE.paddingHorizontal8,
    ),
    large: mergeStyle(
      COMMON_STYLE.minWidth48,
      COMMON_STYLE.height48,
      COMMON_STYLE.fontSizeLarge,
      COMMON_STYLE.paddingHorizontal16,
    ),
  };

  const roundStyle: ZStyleProps = COMMON_STYLE.radiusMax;

  const noChildStyle: ZStyleProps = {
    padding: 0,
  };

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
      <ButtonContent icon={icon} size={size} type={type} text={text}>
        {children}
      </ButtonContent>
    </Component>
  );
};

export type { ZButtonProps, ZButtonType };
export { ZButtonTypeEnum };
export default ZButton;
