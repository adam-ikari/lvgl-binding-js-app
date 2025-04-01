import { ZHeightEnum, ZStyleProps, ZWidthEnum } from ".";
import { COMMON_STYLE } from "../common_style";
import { useMergeStyle } from "../hooks/styleHooks";
import { View } from "lvgljs-ui";
import * as _ from "radash";
import React, { useMemo } from "react";

enum ZAlignItemsEnum {
  Start = "start",
  Center = "center",
  End = "end",
}

enum ZJustifyContentEnum {
  Start = "start", // items will be packed toward the start of the flex-direction
  Center = "center", // items will be centered in the flex-direction
  End = "end", // items will be packed toward the end of the flex-direction
  SpaceBetween = "space-between", // items will be evenly distributed in the line
  SpaceAround = "space-around", // items will be evenly distributed with space around them
  SpaceEvenly = "space-evenly", // items will be evenly distributed with equal space around them
}

enum ZFlexContainerDirection {
  Row = "row", // items will be arranged in a row (left to right in LTR; right to left in RTL)
  Column = "column", // items will be arranged in a column (top to bottom)
}

interface ZFlexContainerProps {
  children?: React.ReactNode;
  style?: ZStyleProps;
  width?: ZWidthEnum | number;
  height?: ZHeightEnum | number;
  wrap?: boolean;
  gap?: number;
  direction: ZFlexContainerDirection;
  justifyContent?: ZJustifyContentEnum;
  alignItems?: ZAlignItemsEnum;
  [key: string]: any;
}

const ZFlexContainer = (props: ZFlexContainerProps) => {
  const mergeStyle = useMergeStyle();

  const baseStyle: ZStyleProps = mergeStyle(
    COMMON_STYLE.noBorder,
    COMMON_STYLE.padding0,
    COMMON_STYLE.radius0,
  );

  const widthStyleMap: Record<string, ZStyleProps> = {
    auto: COMMON_STYLE.autoWidth,
    full: COMMON_STYLE.fullWidth,
  };

  const heightStyleMap: Record<string, ZStyleProps> = {
    auto: COMMON_STYLE.autoHeight,
    full: COMMON_STYLE.fullHeight,
  };

  const justifyContentStyle: Record<string, ZStyleProps> = {
    start: COMMON_STYLE.justifyContentFlexStart,
    center: COMMON_STYLE.justifyContentCenter,
    end: COMMON_STYLE.justifyContentFlexEnd,
    "space-between": COMMON_STYLE.justifyContentBetween,
    "space-around": COMMON_STYLE.justifyContentAround,
    "space-evenly": COMMON_STYLE.justifyContentEvenly,
  };

  const alignItemsStyle: Record<string, ZStyleProps> = {
    start: COMMON_STYLE.alignItemsStart,
    center: COMMON_STYLE.alignItemsCenter,
    end: COMMON_STYLE.alignItemsEnd,
  };

  const {
    children,
    direction = ZFlexContainerDirection.Row,
    width = ZWidthEnum.Auto,
    height = ZHeightEnum.Auto,
    style: propStyle = {},
    wrap = false,
    gap = 10,
    alignItems = ZAlignItemsEnum.Start,
    justifyContent = ZJustifyContentEnum.Start,
    ...restProps
  } = props;

  const computedStyle = useMemo(() => {
    return mergeStyle(
      direction === "row"
        ? mergeStyle(COMMON_STYLE.flexRow, { "column-spacing": gap })
        : mergeStyle(COMMON_STYLE.flexColumn, { "row-spacing": gap }),
      _.isNumber(width) ? { width } : widthStyleMap[width],
      _.isNumber(height) ? { height } : heightStyleMap[height],
      alignItemsStyle[alignItems],
      justifyContentStyle[justifyContent],
      wrap && { "flex-wrap": "wrap" },
    );
  }, [direction, gap, width, height, alignItems, justifyContent, wrap]);

  return (
    <View
      style={mergeStyle(baseStyle, computedStyle, propStyle)}
      {...restProps}
    >
      {children}
    </View>
  );
};
export type { ZFlexContainerProps };
export { ZAlignItemsEnum, ZJustifyContentEnum, ZFlexContainerDirection };
export default ZFlexContainer;
