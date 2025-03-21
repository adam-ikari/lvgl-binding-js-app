import {
  ZButton,
  ZHeightEnum,
  ZIconSymbol,
  ZRow,
  ZSizeEnum,
  ZText,
  ZWidthEnum,
} from ".";
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
    <ZRow
      width={ZWidthEnum.Full}
      height={40}
      style={{
        padding: 4,
        "align-content": "center",
      }}
    >
      <ZRow
        height={ZHeightEnum.Full}
        style={{
          "align-content": "center",
          "min-width": 40,
        }}
      >
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
      </ZRow>
      <ZRow
        height={ZHeightEnum.Full}
        style={{
          "flex-grow": 1,
          "align-content": "center",
        }}
      >
        {title && <ZText>{title}</ZText>}
      </ZRow>
      <ZRow
        height={ZHeightEnum.Full}
        style={{
          "align-content": "center",
        }}
      >
        {addons && addons.map((item) => item)}
      </ZRow>
    </ZRow>
  );
};

export type { ZNavHeaderProps };
export { ZNavHeader };
