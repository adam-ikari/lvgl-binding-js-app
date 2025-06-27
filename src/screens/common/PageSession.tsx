import {
  ZCard,
  ZColumn,
  ZRow,
  ZSizeEnum,
  ZText,
  ZWidthEnum,
} from "@/components";
import { useMergeStyle } from "@/hooks/styleHooks";
import { COMMON_STYLE } from "@/styles/common_style";
import React from "react";

const PageSession = ({ children, title, ...restProps }) => {
  const mergeStyle = useMergeStyle();

  return (
    <ZRow width={ZWidthEnum.Full} {...restProps}>
      <ZCard
        style={COMMON_STYLE.fullWidth}
        header={<ZText size={ZSizeEnum.Large}>{title}</ZText>}
        content={<ZColumn width={ZWidthEnum.Full}>{children}</ZColumn>}
      ></ZCard>
    </ZRow>
  );
};

export default PageSession;
