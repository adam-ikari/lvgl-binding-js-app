import { ZColumn, ZRow, ZStyleProps } from ".";
import { COLORS, COMMON_STYLE } from "../common_style";
import { useMergeStyle } from "@/hooks/styleHooks";
import React from "react";

const mergeStyle = useMergeStyle();

// 类型定义
interface ZCardProps {
  header?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  style?: ZStyleProps;
  [key: string]: any;
}

const baseStyle: ZStyleProps = mergeStyle(
  COMMON_STYLE.noBorder,
  COMMON_STYLE.autoWidth,
  COMMON_STYLE.autoHeight,
  {
    "shadow-color": COLORS.GREY_DARK,
    "shadow-offset-x": 0,
    "shadow-offset-y": 0,
    "shadow-opacity": 50,
    "shadow-width": 24,
    "border-radius": 4,
    padding: 20,
  },
);

const ZCardHeader = (props: { children?: React.ReactNode }) => {
  const { children } = props;
  return <ZRow>{children}</ZRow>;
};

const ZCardFooter = (props: { children?: React.ReactNode }) => {
  const { children } = props;
  return <ZRow>{children}</ZRow>;
};

const ZCard = (props: ZCardProps) => {
  const {
    header,
    children,
    footer,
    style: propStyle = {},
    ...restProps
  } = props;
  return (
    <ZColumn style={mergeStyle(baseStyle, propStyle)} {...restProps}>
      {/* header */}
      {header && <ZCardHeader>{header}</ZCardHeader>}
      {/* content */}
      {children}
      {/* footer */}
      {footer && <ZCardFooter>{footer}</ZCardFooter>}
    </ZColumn>
  );
};

export type { ZCardProps };
export { ZCard };
