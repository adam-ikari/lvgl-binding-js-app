import PageSession from "./common/PageSession";
import { ZCheckbox, ZRow } from "@/components";
import { ZFlexAlignItems } from "@/components/ZFlexContainer";
import React from "react";

const CheckboxDemoScreen = () => {
  return (
    <>
      <PageSession title="Basic">
        <ZRow alignItems={ZFlexAlignItems.Center} gap={16}>
          <ZRow alignItems={ZFlexAlignItems.Center} gap={8}>
            <ZCheckbox value={true} text="Checked" />
          </ZRow>
          <ZRow alignItems={ZFlexAlignItems.Center} gap={8}>
            <ZCheckbox value={false} text="Unchecked" />
          </ZRow>
          <ZRow alignItems={ZFlexAlignItems.Center} gap={8}>
            <ZCheckbox value={true} disabled text="Disabled" />
          </ZRow>
        </ZRow>
      </PageSession>
    </>
  );
};
export default CheckboxDemoScreen;
