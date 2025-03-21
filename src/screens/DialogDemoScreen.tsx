import { ZButton, ZModal, ZText } from "@/components";
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
        <ZModal onMaskClick={toggleVisibale}>
          <ZText>Dialog</ZText>
        </ZModal>
      )}
    </ZNavHeaderLayout>
  );
};

export default DialogDemoScreen;
