import { ZHeightEnum, ZHeightType, ZStyleProps, ZWidthEnum, ZWidthType } from ".";
import { COMMON_STYLE } from "../common_style";
import { useMergeStyle } from "../hooks/styleHooks";
import { View } from "lvgljs-ui";
import * as _ from "radash";
import React, { useMemo } from "react";

export const ZFlexAlignItems = {
  Start: "start",
  Center: "center",
  End: "end",
} as const

export type ZFlexAlignItemsType = keyof typeof ZFlexAlignItems;

export const ZFlexJustifyContent = {
  Start: "start",
  Center: "center",
  End: "end",
  SpaceBetween: "space-between",
  SpaceAround: "space-around",
  SpaceEvenly: "space-evenly",
}

export type ZFlexJustifyContentType = keyof typeof ZFlexJustifyContent;

export const enum ZFlexContainerDirection {
  Row = "row", // items will be arranged in a row (left to right in LTR; right to left in RTL)
  Column = "column", // items will be arranged in a column (top to bottom)
}

export type ZFlexContainerDirectionType = `${ZFlexContainerDirection}`;

export interface ZFlexContainerProps {
  children?: React.ReactNode;
  style?: ZStyleProps;
  width?: ZWidthType;
  height?: ZHeightType;
  wrap?: boolean;
  gap?: number;
  direction: ZFlexContainerDirectionType;
  justifyContent?: ZFlexJustifyContentType;
  alignItems?: ZFlexAlignItemsType;
  [key: string]: any;
}

export default (props: ZFlexContainerProps) => {
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
    alignItems = ZFlexAlignItems.Start,
    justifyContent = ZFlexJustifyContent.Start,
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
