import { ZStyleProps } from "./common";
import { EAlignType, Mask, View } from "lvgljs-ui";
import React from "react";

interface ZModalProps {
  children?: React.ReactNode | React.ReactNode[];
  onMaskClick?: () => void;
}

const styles: Record<string, ZStyleProps> = {
  mask: { "border-radius": 0 },
  view: {
    width: "auto",
    height: "auto",
    padding: 0,
    "border-radius": 0
  },
};

const ZModal = (props: ZModalProps) => {
  const { children, onMaskClick = () => {} } = props;

  return (
    <Mask style={styles.mask} onClick={onMaskClick}>
      <React.Fragment>{children}</React.Fragment>
      {/* <View
        style={{
          ...styles.view,
        }}
        align={{
          type: EAlignType.ALIGN_CENTER,
        }}
        onClick={(e) => {
          console.log("ZModal View:" + JSON.stringify(e));
        }}
      >
        
      </View> */}
    </Mask>
  );
};

export type { ZModalProps };
export { ZModal };
