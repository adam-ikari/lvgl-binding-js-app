import { COMMON_STYLE } from "@/common_style";
import { ZCard, ZSize, ZText } from "@/components";
import { useMergeStyle } from "@/hooks/styleHooks";
import React from "react";

const PageSession = ({ children, title }) => {
  const mergeStyle = useMergeStyle();

  return (
    <ZCard
      style={mergeStyle(COMMON_STYLE.fullWidth)}
      header={<ZText size={ZSize.Large}>{title}</ZText>}
    >
      {children}
    </ZCard>
  );
};

export default PageSession;
