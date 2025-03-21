import { COLORS, COMMON_STYLE } from "@/common_style";
import {
  ZColumn,
  ZHeightEnum,
  ZNavHeader,
  ZText,
  ZWidthEnum,
} from "@/components";
import useTime from "@/hooks/time";
import React from "react";

interface ZNavHeaderLayoutProps {
  children?: React.ReactNode;
  title?: string;
  withBack?: boolean;
}

const ZNavHeaderLayout = (props: ZNavHeaderLayoutProps) => {
  const { children, title = "", withBack = false } = props;
  const time = useTime({ format: "YYYY-MM-DD HH:mm" });
  return (
    <ZColumn
      width={ZWidthEnum.Full}
      height={ZHeightEnum.Full}
      style={{
        "background-color": COLORS.PAGE_BACKGROUND,
        overflow: "hidden",
      }}
    >
      <ZNavHeader
        withBack={withBack}
        title={title}
        addon={<ZText>{`${time}`}</ZText>}
      ></ZNavHeader>

      <ZColumn
        width={ZWidthEnum.Full}
        style={{
          ...COMMON_STYLE.padding20,
          "flex-grow": 1,
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
