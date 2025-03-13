import { ZButton, ZRow, ZSizeEnum, ZText, ZWidthEnum } from ".";
import React from "react";
import { useNavigate } from "react-router-native";

interface ZNavHeaderProps {
  withBack?: boolean;
  title?: string;
}

const ZNavHeader = (props: ZNavHeaderProps) => {
  const { withBack = false, title } = props;
  const navigate = useNavigate();
  return (
    <ZRow width={ZWidthEnum.Full}>
      {withBack && (
        <ZButton size={ZSizeEnum.Small} text onClick={() => navigate(-1)}>
          back
        </ZButton>
      )}
      {title && (
        <ZText
          style={{
            "flex-grow": 1,
          }}
        >
          {title}
        </ZText>
      )}
    </ZRow>
  );
};

export type { ZNavHeaderProps };
export { ZNavHeader };
