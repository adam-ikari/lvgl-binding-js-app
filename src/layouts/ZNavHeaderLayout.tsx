import { COLORS, COMMON_STYLE } from "@/common_style";
import { ZColumn, ZHeightEnum, ZNavHeader, ZWidthEnum } from "@/components";
import React from "react";

interface ZNavHeaderLayoutProps {
  children?: React.ReactNode;
  title?: string;
  withBack?: boolean;
}

const ZNavHeaderLayout = (props: ZNavHeaderLayoutProps) => {
  const { children, title = "", withBack = false } = props;
  return (
    <ZColumn
      width={ZWidthEnum.Full}
      height={ZHeightEnum.Full}
      style={{
        "background-color": COLORS.PAGE_BACKGROUND,
      }}
    >
      <ZNavHeader withBack={withBack} title={title}></ZNavHeader>
      <ZColumn
        style={{
          ...COMMON_STYLE.padding20,
          "background-color": COLORS.PAGE_BACKGROUND,
        }}
      >
        {children}
      </ZColumn>
    </ZColumn>
  );
};
export type { ZNavHeaderLayoutProps };
export { ZNavHeaderLayout };
