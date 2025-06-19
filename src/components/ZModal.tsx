import { ZStyleProps } from "./common";
import React from "react";
import { Mask } from "sdk-ui";

interface ZModalProps {
  children?: React.ReactNode | React.ReactNode[];
  onMaskClick?: () => void;
}

const styles: Record<string, ZStyleProps> = {
  mask: { "border-radius": 0, "border-width": 0 },
};

const ZModal = (props: ZModalProps) => {
  const { children, onMaskClick = () => {} } = props;

  return (
    <Mask style={styles.mask} onClick={onMaskClick}>
      <>{children}</>
    </Mask>
  );
};

export type { ZModalProps };
export default ZModal;
