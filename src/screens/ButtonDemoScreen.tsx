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
import React, { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const ButtonDemoScreen = () => {
  const { t } = useTranslation();

  const buttonTypeData = [
    { text: t("BUTTON.TYPES.DEFAULT"), type: ZColorTypeEnum.Default },
    { text: t("BUTTON.TYPES.PRIMARY"), type: ZColorTypeEnum.Primary },
    { text: t("BUTTON.TYPES.SUCCESS"), type: ZColorTypeEnum.Success },
    { text: t("BUTTON.TYPES.INFO"), type: ZColorTypeEnum.Info },
    { text: t("BUTTON.TYPES.DANGER"), type: ZColorTypeEnum.Danger },
    { text: t("BUTTON.TYPES.WARNING"), type: ZColorTypeEnum.Warning },
  ];

  const buttonGroupData = [
    { text: t("BUTTON.GROUP.ONE"), type: ZColorTypeEnum.Primary },
    { text: t("BUTTON.GROUP.TWO") },
    { text: t("BUTTON.GROUP.THREE") },
  ];

  const DisableButtonSection = () => {
    const [disable, setDisable] = useState(false);
    const handleSwitchChange = useCallback((value: boolean) => {
      setDisable(value);
    }, []);

    const buttons = useMemo(
      () =>
        buttonTypeData.map((item) => (
          <ZButton key={item.text} type={item.type} disable={disable}>
            {item.text}
          </ZButton>
        )),
      [disable],
    );

    return (
      <PageSession title={t("BUTTON.DISABLE")}>
        <ZSwitch
          value={disable}
          onChange={handleSwitchChange}
          activeText={t("BUTTON.STATES.DISABLED")}
          inactiveText={t("BUTTON.STATES.ENABLED")}
        />
        <ZRow gap={8}>{buttons}</ZRow>
      </PageSession>
    );
  };

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

      <DisableButtonSection />

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
