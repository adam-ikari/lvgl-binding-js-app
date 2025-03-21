import { ZButton, ZIconSymbol, ZRow, ZSizeEnum, ZText, ZWidthEnum } from ".";
import { CONSTANTS } from "@/common_style";
import React from "react";
import { useNavigate } from "react-router-native";

interface ZNavHeaderProps {
  withBack?: boolean;
  title?: string;
  addons?: React.ReactNode[];
}

const ZNavHeader = (props: ZNavHeaderProps) => {
  const { withBack = false, title, addons } = props;
  const navigate = useNavigate();

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
      <ZRow
        style={{
          "flex-grow": 1,
        }}
      >
        {title && <ZText>{title}</ZText>}
      </ZRow>
      <ZRow>{addons && addons.map((item) => item)}</ZRow>
    </ZRow>
  );
};

export type { ZNavHeaderProps };
export { ZNavHeader };
