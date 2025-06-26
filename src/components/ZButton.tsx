import { ZColorTypeEnum, ZIconSymbol, ZSizeEnum, ZStyleProps, ZText } from ".";
import { ZIcon } from ".";
import { useMergeStyle } from "@/hooks/styleHooks";
import { COLORS, COMMON_STYLE } from "@/styles/common_style";
import * as _ from "radash";
import React, { useMemo } from "react";
import { Button, View } from "sdk-ui";

const mergeStyle = useMergeStyle();

interface ZButtonProps {
  /** 按钮文本内容 */
  children?: string;
  /** 自定义样式 */
  style?: ZStyleProps;
  /** 图标类型 */
  icon?: ZIconSymbol;
  /** 按钮类型 */
  type?: ZColorTypeEnum;
  /** 按钮尺寸 */
  size?: ZSizeEnum;
  /** 是否为文本按钮 */
  text?: boolean;
  /** 是否为圆形按钮 */
  round?: boolean;
  /** 是否禁用 */
  disable?: boolean;
  /** 点击事件回调 */
  onClick?: () => void;
  [key: string]: any;
}

const normalStyleMap: Record<string, ZStyleProps> = {
  primary: { "background-color": COLORS.PRIMARY, "text-color": COLORS.WHITE },
  success: { "background-color": COLORS.SUCCESS, "text-color": COLORS.WHITE },
  info: { "background-color": COLORS.INFO, "text-color": COLORS.WHITE },
  danger: { "background-color": COLORS.DANGER, "text-color": COLORS.WHITE },
  warning: { "background-color": COLORS.WARNING, "text-color": COLORS.WHITE },
  default: {
    "background-color": COLORS.WHITE,
    "text-color": COLORS.REGULAR_TEXT,
  },
};

const textStyleMap: Record<string, ZStyleProps> = {
  primary: { "background-color": COLORS.WHITE, "text-color": COLORS.PRIMARY },
  success: { "background-color": COLORS.WHITE, "text-color": COLORS.SUCCESS },
  info: { "background-color": COLORS.WHITE, "text-color": COLORS.INFO },
  danger: { "background-color": COLORS.WHITE, "text-color": COLORS.DANGER },
  warning: { "background-color": COLORS.WHITE, "text-color": COLORS.WARNING },
  default: {
    "background-color": COLORS.WHITE,
    "text-color": COLORS.REGULAR_TEXT,
  },
};

const sizeStyleMap: Record<string, ZStyleProps> = {
  small: {
    "min-width": 32,
    height: 32,
    "font-size": 12,
    "padding-left": 4,
    "padding-right": 4,
  },
  default: {
    "min-width": 36,
    height: 36,
    "font-size": 14,
    "padding-left": 8,
    "padding-right": 8,
  },
  large: {
    "min-width": 48,
    height: 48,
    "font-size": 16,
    "padding-left": 16,
    "padding-right": 16,
  },
};

const disabledStyle: ZStyleProps = { opacity: 0.6 };
const roundStyle: ZStyleProps = { "border-radius": 0x7fff };
const noChildStyle: ZStyleProps = { padding: 0 };

interface ZButtonProps {
  children?: string;
  style?: ZStyleProps;
  icon?: ZIconSymbol;
  type?: ZColorTypeEnum;
  size?: ZSizeEnum;
  text?: boolean;
  round?: boolean;
  disable?: boolean;
  onClick?: () => void;
  [key: string]: any;
}

interface ZButtonContainerProps {
  children: React.ReactNode;
  round?: boolean;
  [key: string]: any;
}

interface ButtonContentProps {
  icon?: ZIconSymbol;
  children?: string;
  size: ZSizeEnum;
  type: ZColorTypeEnum;
  text: boolean;
}

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

const ButtonContainer = React.memo((props: ZButtonContainerProps) => {
  const { children, round, ...restProps } = props;
  return (
    <View
      {...restProps}
      style={mergeStyle(
        baseStyle,
        COMMON_STYLE.noBorder,
        COMMON_STYLE.padding0,
        round && roundStyle,
      )}
    >
      {children}
    </View>
  );
});

const ButtonContent = React.memo((props: ButtonContentProps) => {
  const { icon, children, size, type, text } = props;

  if (!icon && !children) return null;

  return (
    <>
      {icon && (
        <ZIcon
          symbol={icon}
          size={size}
          light={type !== ZColorTypeEnum.Default}
        />
      )}
      {children &&
        (text ? (
          <ZText size={size} type={type as ZColorTypeEnum}>
            {children}
          </ZText>
        ) : (
          <ZText light={type !== ZColorTypeEnum.Default}>{children}</ZText>
        ))}
    </>
  );
});

const ZButton = React.memo((props: ZButtonProps) => {
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
  const {
    children,
    style: propStyle = {},
    icon,
    type = ZColorTypeEnum.Default,
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

  const computedStyle = useMemo(() => {
    const style = { ...sizeStyleMap[size] };

    if (text) {
      Object.assign(style, textStyleMap[type]);
    } else {
      Object.assign(style, normalStyleMap[type], COMMON_STYLE.border1);
    }

    if (round) Object.assign(style, roundStyle);
    if (disable) Object.assign(style, disabledStyle);
    if (!children) Object.assign(style, noChildStyle);

    return style;
  }, [type, size, text, round, disable, children]);

  const ButtonBackground = disable ? View : Button;

  return (
    <ButtonContainer round={round} {...restProps}>
      <ButtonBackground
        onClick={handleClick}
        style={mergeStyle(baseStyle, computedStyle, propStyle)}
      >
        <ButtonContent icon={icon} size={size} type={type} text={text}>
          {children}
        </ButtonContent>
      </ButtonBackground>
    </ButtonContainer>
  );
});

export type { ZButtonProps };
export default ZButton;
