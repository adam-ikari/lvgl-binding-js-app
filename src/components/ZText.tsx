import { ZSizeEnum, ZStyleProps } from ".";
import { COMMON_STYLE } from "../common_style";
import { Text } from "lvgljs-ui";
import React, { useMemo } from "react";

interface ZTextProps {
  children?: string;
  style?: ZStyleProps;
  size?: ZSizeEnum;
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

const ZText = (props?: ZTextProps) => {
  const {
    children = "",
    style: propStyle = {},
    size = ZSizeEnum.Default,
  } = props;

  const computedStyle = useMemo(() => {
    return {
      ...baseStyle,
      ...sizeStyleMap[size],
    };
  }, [size]);
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

export { ZText, ZTextProps };
