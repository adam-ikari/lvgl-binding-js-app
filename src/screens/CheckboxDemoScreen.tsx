import { ZRow, ZSizeEnum, ZText, ZCheckbox } from "@/components";
import { ZFlexAlignItems } from "@/components/ZFlexContainer";
import React, { useState } from "react";
import PageSession from "./common/PageSession";

const CheckboxDemoScreen = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <PageSession title="Size Demo">
        <ZRow alignItems={ZFlexAlignItems.Center} gap={16}>
          {[
            { size: ZSizeEnum.Small, label: "Small" },
            { size: ZSizeEnum.Default, label: "Default" },
            { size: ZSizeEnum.Large, label: "Large" },
          ].map(({ size, label }, index) => (
            <ZRow key={index} alignItems={ZFlexAlignItems.Center} gap={8}>
              <ZCheckbox
                value={checked}
                onChange={setChecked}
                size={size}
              />
              <ZText>{label}</ZText>
            </ZRow>
          ))}
        </ZRow>
      </PageSession>

      <PageSession title="State Demo">
        <ZRow alignItems={ZFlexAlignItems.Center} gap={16}>
          <ZRow alignItems={ZFlexAlignItems.Center} gap={8}>
            <ZCheckbox
              value={true}
              onChange={setChecked}
              label="Checked"
            />
          </ZRow>
          <ZRow alignItems={ZFlexAlignItems.Center} gap={8}>
            <ZCheckbox
              value={false}
              onChange={setChecked}
              label="Unchecked"
            />
          </ZRow>
          <ZRow alignItems={ZFlexAlignItems.Center} gap={8}>
            <ZCheckbox
              value={true}
              onChange={setChecked}
              disabled
              label="Disabled"
            />
          </ZRow>
        </ZRow>
      </PageSession>

      <PageSession title="Combination Demo">
        <ZRow direction="column" gap={12}>
          <ZCheckbox
            value={checked}
            onChange={setChecked}
            label="Basic Checkbox"
          />
          <ZCheckbox
            value={checked}
            onChange={setChecked}
            label="Checkbox with long description text to test text wrapping"
          />
          <ZRow alignItems={ZFlexAlignItems.Center} gap={16}>
            <ZCheckbox
              value={checked}
              onChange={setChecked}
              size={ZSizeEnum.Small}
              label="Small"
            />
            <ZCheckbox
              value={checked}
              onChange={setChecked}
              size={ZSizeEnum.Default}
              label="Default"
            />
            <ZCheckbox
              value={checked}
              onChange={setChecked}
              size={ZSizeEnum.Large}
              label="Large"
            />
          </ZRow>
        </ZRow>
      </PageSession>
    </>
  );
};
export default CheckboxDemoScreen;