import { ZColumn, ZRow, ZStyleProps } from ".";
import { COLORS, COMMON_STYLE } from "../styles/common_style";
import { useMergeStyle } from "@/hooks/styleHooks";
import React from "react";

// 类型定义
interface ZCardProps {
  cover?: React.ReactNode;
  header?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  style?: ZStyleProps;
  [key: string]: any;
}

const ZCardCover = (props: { children?: React.ReactNode }) => {
  const { children } = props;
  return <ZRow>{children}</ZRow>;
};

const ZCardHeader = (props: { children?: React.ReactNode }) => {
  const { children } = props;
  return <ZRow>{children}</ZRow>;
};

const ZCardContent = (props: { children?: React.ReactNode }) => {
  const { children } = props;
  return <ZRow>{children}</ZRow>;
};

const ZCardFooter = (props: { children?: React.ReactNode }) => {
  const { children } = props;
  return <ZRow>{children}</ZRow>;
};

const ZCard = (props: ZCardProps) => {
  const mergeStyle = useMergeStyle();
  const baseStyle: ZStyleProps = mergeStyle(
    COMMON_STYLE.noBorder,
    COMMON_STYLE.autoWidth,
    COMMON_STYLE.autoHeight,
    COMMON_STYLE.padding20,
    COMMON_STYLE.radius4,
    {
      "shadow-color": COLORS.GREY_DARK,
      "shadow-offset-x": 0,
      "shadow-offset-y": 0,
      "shadow-opacity": 50,
      "shadow-width": 24,
    },
  );

  const {
    cover,
    header,
    children,
    footer,
    content,
    style: propStyle = {},
    ...restProps
  } = props;

  return (
    <ZColumn style={mergeStyle(baseStyle, propStyle)} {...restProps}>
      {/* cover */}
      {cover && <ZCardCover>{cover}</ZCardCover>}
      {/* header */}
      {header && <ZCardHeader>{header}</ZCardHeader>}
      {/* content */}
      {content && <ZCardContent>{content}</ZCardContent>}
      {/* footer */}
      {footer && <ZCardFooter>{footer}</ZCardFooter>}
    </ZColumn>
  );
};

export type { ZCardProps };
export default ZCard;
