import { ZButton, ZDialog, ZText } from "@/components";
import { ZNavScreenLayout } from "@/layouts";
import React, { useState } from "react";

const DialogDemoScreen = () => {
  const [visibale, setVisibale] = useState(false);
  const toggleVisibale = () => {
    setVisibale(!visibale);
  };
  return (
    <ZNavScreenLayout title="Dialog Demo" withBack>
      <ZButton onClick={toggleVisibale}>Open Dialog</ZButton>
      {visibale && (
        <ZDialog
          title="Dialog"
          onMaskClick={() => {
            console.log("onMaskClick");
            toggleVisibale();
          }}
          onClose={() => {
            console.log("onClose");
            toggleVisibale();
          }}
          onCancel={() => {
            console.log("onCancel");
            toggleVisibale();
          }}
          onConfirm={() => {
            console.log("onConfirm");
            toggleVisibale();
          }}
        >
          <ZText>This is a Dialog</ZText>
        </ZDialog>
      )}
    </ZNavScreenLayout>
  );
};

export default DialogDemoScreen;
