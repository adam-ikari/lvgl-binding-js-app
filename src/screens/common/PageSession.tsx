import { COMMON_STYLE } from "@/common_style";
import { ZCard, ZSizeEnum, ZText } from "@/components";
import { useMergeStyle } from "@/hooks/styleHooks";
import React from "react";

const PageSession = ({ children, title }) => {
  const mergeStyle = useMergeStyle();

  return (
    <ZCard
      style={mergeStyle(COMMON_STYLE.fullWidth)}
      header={<ZText size={ZSizeEnum.Large}>{title}</ZText>}
    >
      {children}
    </ZCard>
  );
};

export { PageSession };
