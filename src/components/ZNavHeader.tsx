import { ZButton, ZIconSymbol, ZRow, ZSizeEnum, ZText, ZWidthEnum } from ".";
import { CONSTANTS } from "@/common_style";
import useTime from "@/hooks/time";
import React from "react";
import { useNavigate } from "react-router-native";

interface ZNavHeaderProps {
  withBack?: boolean;
  title?: string;
}

const ZNavHeader = (props: ZNavHeaderProps) => {
  const { withBack = false, title } = props;
  const navigate = useNavigate();
  const time = useTime({ format: "YYYY-MM-DD HH:mm:ss" });
  return (
    <ZRow width={ZWidthEnum.Full} height={CONSTANTS.MIN_HEIGHT_32}>
      {withBack && (
        <ZButton
          style={{ "flex-grow": 0 }}
          size={ZSizeEnum.Small}
          icon={ZIconSymbol.Left}
          text
          onClick={() => navigate(-1)}
        >
          back
        </ZButton>
      )}
      {title && <ZText style={{ "flex-grow": 1 }}>{title}</ZText>}
      <ZText
        style={{ "flex-grow": 0 }}
        size={ZSizeEnum.Small}
      >{`${time}`}</ZText>
    </ZRow>
  );
};

export type { ZNavHeaderProps };
export { ZNavHeader };
