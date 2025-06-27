import { ZCard, ZColumn, ZSizeEnum, ZText, ZWidthEnum } from "@/components";
import { useMergeStyle } from "@/hooks/styleHooks";
import { COMMON_STYLE } from "@/styles/common_style";
import React from "react";

const mergeStyle = useMergeStyle();

const PageSession = (props) => {
  const { children, title, style: propsStyle, ...restProps } = props;
  return (
    <ZCard
      {...restProps}
      style={mergeStyle(COMMON_STYLE.fullWidth, propsStyle)}
      header={<ZText size={ZSizeEnum.Large}>{title}</ZText>}
      content={
        <ZColumn width={ZWidthEnum.Full} style={COMMON_STYLE.fullWidth}>
          {children}
        </ZColumn>
      }
    ></ZCard>
  );
};

export default PageSession;
