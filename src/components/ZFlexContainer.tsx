import { ZHeightEnum, ZStyleProps, ZWidthEnum } from ".";
import { COMMON_STYLE } from "../common_style";
import { useMergeStyle } from "../hooks/styleHooks";
import { View } from "lvgljs-ui";
import * as _ from "radash";
import React, { useMemo } from "react";

const mergeStyle = useMergeStyle();

enum ZAlignItemsEnum {
  Start = "start",
  Center = "center",
  End = "end",
}

interface ZFlexContainerProps {
  children?: React.ReactNode;
  style?: ZStyleProps;
  width?: ZWidthEnum | number;
  height?: ZHeightEnum | number;
  wrap?: boolean;
  gap?: number;
  flexDirection: "row" | "column";
  alignItems: ZAlignItemsEnum;
  [key: string]: any;
}

const baseStyle: ZStyleProps = mergeStyle(
  COMMON_STYLE.noBorder,
  COMMON_STYLE.padding0,
  COMMON_STYLE.radius0,
  COMMON_STYLE.alignItemsStart,
  COMMON_STYLE.justifyContentStart,
);

const widthStyleMap: Record<string, ZStyleProps> = {
  auto: COMMON_STYLE.autoWidth,
  full: COMMON_STYLE.fullWidth,
};

const heightStyleMap: Record<string, ZStyleProps> = {
  auto: COMMON_STYLE.autoHeight,
  full: COMMON_STYLE.fullHeight,
};

const alignItemsStyle: Record<string, ZStyleProps> = {
  start: COMMON_STYLE.alignItemsStart,
  center: COMMON_STYLE.alignItemsCenter,
  end: COMMON_STYLE.alignItemsEnd,
};

const ZFlexContainer = (props: ZFlexContainerProps) => {
  const {
    children,
    width = ZWidthEnum.Auto,
    height = ZHeightEnum.Auto,
    style: propStyle = {},
    wrap = false,
    gap = 10,
    alignItems = ZAlignItemsEnum.Start,
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
      alignItemsStyle[alignItems],
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
export type { ZFlexContainerProps };
export { ZAlignItemsEnum };
export default ZFlexContainer;
