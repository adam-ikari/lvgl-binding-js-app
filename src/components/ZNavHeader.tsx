import {
  ZButton,
  ZHeightEnum,
  ZIconSymbol,
  ZRow,
  ZSizeEnum,
  ZText,
  ZWidthEnum,
} from ".";
import React from "react";
import { useNavigate } from "react-router-native";

interface ZNavHeaderProps {
  withBack?: boolean;
  title?: string;
  addons?: React.ReactNode | React.ReactNode[];
}

const ZNavHeader = (props: ZNavHeaderProps) => {
  const { withBack = false, title, addons } = props;
  const navigate = useNavigate();

  return (
    <ZRow
      width={ZWidthEnum.Full}
      height={48}
      style={{
        padding: 4,
        "align-items": "center",
      }}
    >
      <ZRow
        height={ZHeightEnum.Full}
        style={{
          "align-items": "center",
          "min-width": 40,
        }}
      >
        {withBack && (
          <ZButton
            style={{ "flex-grow": 0 }}
            size={ZSizeEnum.Small}
            icon={ZIconSymbol.Left}
            text
            round
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
          "align-items": "center",
        }}
      >
        {title && <ZText>{title}</ZText>}
      </ZRow>
      <ZRow
        height={ZHeightEnum.Full}
        style={{
          "align-items": "center",
        }}
      >
        {addons}
      </ZRow>
    </ZRow>
  );
};

export type { ZNavHeaderProps };
export { ZNavHeader };
