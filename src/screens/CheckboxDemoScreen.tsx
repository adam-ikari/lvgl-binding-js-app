import PageSession from "./common/PageSession";
import { ZCheckbox, ZRow, ZSizeEnum } from "@/components";
import { ZFlexAlignItems } from "@/components/ZFlexContainer";
import React, { useState } from "react";

const CheckboxDemoScreen = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <PageSession title="Size Demo">
        <ZRow alignItems={ZFlexAlignItems.Center} gap={16}>
          {[
            { size: ZSizeEnum.Small, text: "Small" },
            { size: ZSizeEnum.Default, text: "Default" },
            { size: ZSizeEnum.Large, text: "Large" },
          ].map(({ size, text }, index) => (
            <ZRow key={index} alignItems={ZFlexAlignItems.Center} gap={8}>
              <ZCheckbox
                value={checked}
                onChange={setChecked}
                size={size}
                text={text}
              />
            </ZRow>
          ))}
        </ZRow>
      </PageSession>

      <PageSession title="State Demo">
        <ZRow alignItems={ZFlexAlignItems.Center} gap={16}>
          <ZRow alignItems={ZFlexAlignItems.Center} gap={8}>
            <ZCheckbox value={true} onChange={setChecked} text="Checked" />
          </ZRow>
          <ZRow alignItems={ZFlexAlignItems.Center} gap={8}>
            <ZCheckbox value={false} onChange={setChecked} text="Unchecked" />
          </ZRow>
          <ZRow alignItems={ZFlexAlignItems.Center} gap={8}>
            <ZCheckbox
              value={true}
              onChange={setChecked}
              disabled
              text="Disabled"
            />
          </ZRow>
        </ZRow>
      </PageSession>
    </>
  );
};
export default CheckboxDemoScreen;
