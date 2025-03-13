import { ZHeightEnum, ZWidthEnum } from ".";
import { COMMON_STYLE } from "../common_style";
import { View } from "lvgljs-ui";
import { StyleProps } from "lvgljs-ui/core/style";
import React, { useMemo } from "react";

interface ZColumnProps {
  children?: React.ReactNode;
  style?: StyleProps;
  width?: ZWidthEnum;
  height?: ZHeightEnum;
}

const baseStyle: StyleProps = {
  ...COMMON_STYLE.flexColumn,
  ...COMMON_STYLE.noBorder,
  ...COMMON_STYLE.padding0,
  ...COMMON_STYLE.radius0,
};

const widthStyleMap: Record<string, StyleProps> = {
  auto: COMMON_STYLE.autoWidth,
  full: COMMON_STYLE.fullWidth,
};

const heightStyleMap: Record<string, StyleProps> = {
  auto: COMMON_STYLE.autoHeight,
  full: COMMON_STYLE.fullHeight,
};

const ZColumn = (props: ZColumnProps) => {
  const {
    children,
    width = ZWidthEnum.Auto,
    height = ZHeightEnum.Auto,
    style: propStyle = {},
  } = props;

  const computedStyle = useMemo(() => {
    return {
      ...baseStyle,
      ...widthStyleMap[width],
      ...heightStyleMap[height],
      ...propStyle,
    };
  }, [width, height]);

  return <View style={computedStyle}>{children}</View>;
};

export type { ZColumnProps };
export { ZColumn };
