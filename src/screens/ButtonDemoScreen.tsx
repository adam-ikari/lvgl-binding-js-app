import {
  ZButton,
  ZButtonGroup,
  ZButtonType,
  ZRow,
  ZSize,
  ZSwitch,
} from "@/components";
import { ZIconSymbol } from "@/components";
import PageSession from "@/screens/common/PageSession";
import React, { useState } from "react";

const buttonTypeData = [
  { text: "Default", type: ZButtonType.Default },
  { text: "Primary", type: ZButtonType.Primary },
  { text: "Success", type: ZButtonType.Success },
  { text: "Info", type: ZButtonType.Info },
  { text: "Danger", type: ZButtonType.Danger },
  { text: "Warning", type: ZButtonType.Warning },
];

const buttonGroupData = [
  { text: "One", type: ZButtonType.Primary },
  { text: "Two" },
  { text: "Three" },
];

const ButtonDemoScreen = () => {
  const [disable, setDisable] = useState(false);
  return (
    <>
      <PageSession title="type">
        <ZRow>
          {buttonTypeData.map((item, index) => (
            <ZButton key={index} type={item.type}>
              {item.text}
            </ZButton>
          ))}
        </ZRow>
      </PageSession>
      <PageSession title="size">
        <ZRow>
          {[
            { text: "Small", size: ZSize.Small },
            { text: "Default", size: ZSize.Default },
            { text: "Large", size: ZSize.Large },
          ].map(({ text, size }, index) => (
            <ZButton key={index} size={size}>
              {text}
            </ZButton>
          ))}
        </ZRow>
      </PageSession>

      <PageSession title="Text Button">
        <ZRow>
          {buttonTypeData.map((item, index) => (
            <ZButton key={index} type={item.type} text>
              {item.text}
            </ZButton>
          ))}
        </ZRow>
      </PageSession>

      <PageSession title="Disable Button">
        <ZRow>
          <ZRow>
            {buttonTypeData.map((item, index) => (
              <ZButton key={index} type={item.type} disable={disable}>
                {item.text}
              </ZButton>
            ))}
          </ZRow>
          <ZSwitch
            value={disable}
            onChange={(value) => setDisable(value)}
          ></ZSwitch>
        </ZRow>
      </PageSession>

      <PageSession title="Round Button">
        <ZRow>
          {buttonTypeData.map((item, index) => (
            <ZButton key={index} type={item.type} round>
              {item.text}
            </ZButton>
          ))}
        </ZRow>
      </PageSession>

      <PageSession title="Icon Button">
        <ZRow>
          {[
            { icon: ZIconSymbol.Up },
            { icon: ZIconSymbol.Down },
            { icon: ZIconSymbol.Left },
            { icon: ZIconSymbol.Right },
          ].map(({ icon }, index) => (
            <ZButton key={index} size={ZSize.Small} icon={icon} round />
          ))}
        </ZRow>
        <ZRow>
          {[
            { icon: ZIconSymbol.Audio, size: ZSize.Small },
            { icon: ZIconSymbol.Bluetooth, size: ZSize.Default },
            { icon: ZIconSymbol.Image, size: ZSize.Large },
          ].map(({ icon, size }, index) => (
            <ZButton key={index} size={size} icon={icon} round />
          ))}
        </ZRow>
        <ZRow>
          <ZButton type={ZButtonType.Primary} icon={ZIconSymbol.Home}>
            Home
          </ZButton>
          <ZButton icon={ZIconSymbol.Call} text>
            Call
          </ZButton>
          <ZButton type={ZButtonType.Danger} icon={ZIconSymbol.Trash} round>
            Delete
          </ZButton>
          <ZButton
            type={ZButtonType.Info}
            icon={ZIconSymbol.Trash}
            disable
            round
          >
            Delete
          </ZButton>
        </ZRow>
        <ZRow>
          {[
            { icon: ZIconSymbol.Battery1 },
            { icon: ZIconSymbol.Battery2 },
            { icon: ZIconSymbol.Battery3 },
          ].map(({ icon }, index) => (
            <ZButton key={index} size={ZSize.Large} icon={icon} text />
          ))}
        </ZRow>
      </PageSession>

      <PageSession title="Button Group">
        <ZRow>
          <ZButtonGroup size={ZSize.Small}>
            {buttonGroupData.map(({ text, type }, index) => (
              <ZButton key={index} type={type}>
                {text}
              </ZButton>
            ))}
          </ZButtonGroup>
        </ZRow>
        <ZRow>
          <ZButtonGroup>
            {buttonGroupData.map(({ text, type }, index) => (
              <ZButton key={index} type={type}>
                {text}
              </ZButton>
            ))}
          </ZButtonGroup>
        </ZRow>
        <ZRow>
          <ZButtonGroup size={ZSize.Large}>
            {buttonGroupData.map(({ text, type }, index) => (
              <ZButton key={index} type={type}>
                {text}
              </ZButton>
            ))}
          </ZButtonGroup>
        </ZRow>
      </PageSession>
    </>
  );
};

export default ButtonDemoScreen;
