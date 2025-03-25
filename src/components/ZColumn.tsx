import { ZHeightEnum, ZStyleProps, ZWidthEnum } from ".";
import { COMMON_STYLE } from "../common_style";
import { View } from "lvgljs-ui";
import * as _ from "radash";
import React, { useMemo } from "react";

interface ZColumnProps {
  children?: React.ReactNode;
  style?: ZStyleProps;
  width?: ZWidthEnum | number;
  height?: ZHeightEnum | number;
  wrap?: boolean;
  gap?: number;
}

const ZColumn = (props: ZColumnProps) => {
  const baseStyle: ZStyleProps = {
    ...COMMON_STYLE.flexColumn,
    ...COMMON_STYLE.noBorder,
    ...COMMON_STYLE.padding0,
    ...COMMON_STYLE.radius0,
    "align-items":"stretch"
  };

  const widthStyleMap: Record<string, ZStyleProps> = {
    auto: COMMON_STYLE.autoWidth,
    full: COMMON_STYLE.fullWidth,
  };

  const heightStyleMap: Record<string, ZStyleProps> = {
    auto: COMMON_STYLE.autoHeight,
    full: COMMON_STYLE.fullHeight,
  };

  const {
    children,
    width = ZWidthEnum.Auto,
    height = ZHeightEnum.Auto,
    style: propStyle = {},
    wrap = false,
    gap = 10,
  } = props;

  const computedStyle = useMemo(() => {
    let style = { "row-spacing": gap };
    if (_.isNumber(width)) {
      style["width"] = width;
    } else {
      style = { ...style, ...widthStyleMap[width] };
    }
    if (_.isNumber(height)) {
      style["height"] = height;
    } else {
      style = { ...style, ...heightStyleMap[height] };
    }
    if (wrap) {
      style["flex-wrap"] = "wrap";
    }
    return style;
  }, [gap, width, height]);

  return (
    <View
      style={{
        ...baseStyle,
        ...computedStyle,
        ...propStyle,
      }}
    >
      {children}
    </View>
  );
};

export type { ZColumnProps };
export { ZColumn };
