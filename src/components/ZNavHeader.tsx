import { ZButton, ZRow, ZSizeEnum, ZText, ZWidthEnum } from ".";
import { COLORS } from "@/common_style";
import React from "react";
import { useNavigate } from "react-router-native";

interface NavHeaderProps {
  withBack?: boolean;
  title?: string;
}

const NavHeader = (props: NavHeaderProps) => {
  const { withBack = false, title } = props;
  const navigate = useNavigate();
  return (
    <ZRow
      width={ZWidthEnum.Full}
      style={{
        "background-color": COLORS.PRIMARY,
      }}
    >
      {withBack && (
        <ZButton
          text="back"
          size={ZSizeEnum.Small}
          onClick={() => navigate(-1)}
        ></ZButton>
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

export default NavHeader;
