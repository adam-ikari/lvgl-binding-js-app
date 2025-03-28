import { ZHeightEnum, ZStyleProps, ZWidthEnum } from ".";
import { COMMON_STYLE } from "../common_style";
import { useMergeStyle } from "../hooks/styleHooks";
import { View } from "lvgljs-ui";
import * as _ from "radash";
import React, { useMemo } from "react";

export interface ZFlexContainerProps {
  children?: React.ReactNode;
  style?: ZStyleProps;
  width?: ZWidthEnum | number;
  height?: ZHeightEnum | number;
  wrap?: boolean;
  gap?: number;
  flexDirection: "row" | "column";
  [key: string]: any;
}

const widthStyleMap: Record<string, ZStyleProps> = {
  auto: COMMON_STYLE.autoWidth,
  full: COMMON_STYLE.fullWidth,
};

const heightStyleMap: Record<string, ZStyleProps> = {
  auto: COMMON_STYLE.autoHeight,
  full: COMMON_STYLE.fullHeight,
};

export const ZFlexContainer = (props: ZFlexContainerProps) => {
  const mergeStyle = useMergeStyle();

  const baseStyle: ZStyleProps = mergeStyle(
    COMMON_STYLE.noBorder,
    COMMON_STYLE.padding0,
    COMMON_STYLE.radius0,
  );

  const {
    children,
    width = ZWidthEnum.Auto,
    height = ZHeightEnum.Auto,
    style: propStyle = {},
    wrap = false,
    gap = 10,
    ...restProps
  } = props;

  const computedStyle = useMemo(() => {
    return mergeStyle(
      props.flexDirection === "row"
        ? COMMON_STYLE.flexRow
        : COMMON_STYLE.flexColumn,
      props.flexDirection === "row"
        ? { "column-spacing": gap }
        : { "row-spacing": gap },
      _.isNumber(width) ? { width } : widthStyleMap[width],
      _.isNumber(height) ? { height } : heightStyleMap[height],
      wrap && { "flex-wrap": "wrap" },
      propStyle,
    );
  }, [gap, width, height, wrap]);

  return (
    <View
      style={mergeStyle(baseStyle, computedStyle, propStyle)}
      {...restProps}
    >
      {children}
    </View>
  );
};
