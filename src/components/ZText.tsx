import { ZSizeEnum } from ".";
import { COMMON_STYLE } from "../common_style";
import { Text } from "lvgljs-ui";
import { StyleProps } from "lvgljs-ui/core/style";
import React, { useMemo } from "react";

interface ZTextProps {
  children?: string;
  style?: StyleProps;
  size?: ZSizeEnum;
}

const baseStyle: StyleProps = {};

const sizeStyleMap: Record<string, StyleProps> = {
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

const ZText = (props: ZTextProps) => {
  const { children, style: propStyle = {}, size = ZSizeEnum.Default } = props;

  if (children == undefined) {
    return null;
  } else {
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
  }
};

export { ZText, ZTextProps };
