import { ZButton, ZDialog, ZText } from "@/components";
import { ZNavHeaderLayout } from "@/layouts";
import React, { useState } from "react";

const DialogDemoScreen = () => {
  const [visibale, setVisibale] = useState(false);
  const toggleVisibale = () => {
    setVisibale(!visibale);
  };
  return (
    <ZNavHeaderLayout title="Dialog Demo" withBack>
      <ZButton onClick={toggleVisibale}>Open Dialog</ZButton>
      {visibale && (
        <ZDialog
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
        ></ZDialog>
      )}
    </ZNavHeaderLayout>
  );
};

export default DialogDemoScreen;
