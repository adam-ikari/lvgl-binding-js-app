import { ZButton, ZDialog, ZText } from "@/components";
import React, { useState } from "react";

const DialogDemoScreen = () => {
  const [visibale, setVisibale] = useState(false);
  const toggleVisibale = () => {
    setVisibale(!visibale);
  };
  return (
    <>
      <ZButton onClick={toggleVisibale}>Open Dialog</ZButton>
      {visibale && (
        <ZDialog
          title="Dialog"
          onMaskClick={() => {
            toggleVisibale();
          }}
          onClose={() => {
            toggleVisibale();
          }}
          onCancel={() => {
            toggleVisibale();
          }}
          onConfirm={() => {
            toggleVisibale();
          }}
        >
          <ZText>This is a Dialog</ZText>
        </ZDialog>
      )}
    </>
  );
};

export default DialogDemoScreen;
