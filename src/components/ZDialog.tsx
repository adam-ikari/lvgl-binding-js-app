import { ZButton, ZButtonTypeEnum, ZColumn, ZModal, ZRow } from ".";
import React from "react";

interface ZDialogProps {
  onClose?: () => void;
  onCancel?: () => void;
  onConfirm?: () => void;
}

const ZDialog = (props: ZDialogProps) => {
  const {
    onClose = () => {},
    onCancel = () => {},
    onConfirm = () => {},
  } = props;
  return (
    <ZModal onMaskClick={onClose}>
      <ZColumn>
        <ZRow>
          <ZButton onClick={onCancel}>Cancel</ZButton>
          <ZButton type={ZButtonTypeEnum.Primary} onClick={onConfirm}>
            Confirm
          </ZButton>
        </ZRow>
      </ZColumn>
    </ZModal>
  );
};

export { ZDialog };
