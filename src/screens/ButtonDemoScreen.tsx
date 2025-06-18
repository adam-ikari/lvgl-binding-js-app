import {
  ZButton,
  ZButtonGroup,
  ZColorTypeEnum,
  ZRow,
  ZSizeEnum,
  ZSwitch,
} from "@/components";
import { ZIconSymbol } from "@/components";
import PageSession from "@/screens/common/PageSession";
import React, { useState } from "react";

const buttonTypeData = [
  { text: "Default", type: ZColorTypeEnum.Default },
  { text: "Primary", type: ZColorTypeEnum.Primary },
  { text: "Success", type: ZColorTypeEnum.Success },
  { text: "Info", type: ZColorTypeEnum.Info },
  { text: "Danger", type: ZColorTypeEnum.Danger },
  { text: "Warning", type: ZColorTypeEnum.Warning },
];

const buttonGroupData = [
  { text: "One", type: ZColorTypeEnum.Primary },
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
            { text: "Small", size: ZSizeEnum.Small },
            { text: "Default", size: ZSizeEnum.Default },
            { text: "Large", size: ZSizeEnum.Large },
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
            <ZButton key={index} size={ZSizeEnum.Small} icon={icon} round />
          ))}
        </ZRow>
        <ZRow>
          {[
            { icon: ZIconSymbol.Audio, size: ZSizeEnum.Small },
            { icon: ZIconSymbol.Bluetooth, size: ZSizeEnum.Default },
            { icon: ZIconSymbol.Image, size: ZSizeEnum.Large },
          ].map(({ icon, size }, index) => (
            <ZButton key={index} size={size} icon={icon} round />
          ))}
        </ZRow>
        <ZRow>
          <ZButton type={ZColorTypeEnum.Primary} icon={ZIconSymbol.Home}>
            Home
          </ZButton>
          <ZButton icon={ZIconSymbol.Call} text>
            Call
          </ZButton>
          <ZButton type={ZColorTypeEnum.Danger} icon={ZIconSymbol.Trash} round>
            Delete
          </ZButton>
          <ZButton
            type={ZColorTypeEnum.Info}
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
            <ZButton key={index} size={ZSizeEnum.Large} icon={icon} text />
          ))}
        </ZRow>
      </PageSession>

      <PageSession title="Button Group">
        <ZRow>
          <ZButtonGroup size={ZSizeEnum.Small}>
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
          <ZButtonGroup size={ZSizeEnum.Large}>
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
