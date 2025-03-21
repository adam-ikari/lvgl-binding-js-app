import { EAlignType, Mask, View } from "lvgljs-ui";
import React from "react";

interface ZModalProps {
  children?: React.ReactNode | React.ReactNode[];
  onMaskClick?: () => void;
}

const ZModal = (props: ZModalProps) => {
  const { children, onMaskClick = () => {} } = props;
  return (
    <Mask style={{ "border-radius": 0 }} onClick={onMaskClick}>
      <View
        align={{
          type: EAlignType.ALIGN_CENTER,
        }}
      >
        {children}
      </View>
    </Mask>
  );
};

export { ZModal };
