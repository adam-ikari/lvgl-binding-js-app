import { ZRow, ZSizeEnum, ZSwitch } from "../components";
import ZTextArea from "../components/ZTextArea";
import PageSession from "./common/PageSession";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const TextAreaDemoScreen = () => {
  const { t } = useTranslation();
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <PageSession title={t("TEXTAREA.BASIC")}>
        <ZRow>
          <ZTextArea
            placeholder={t("TEXTAREA.PLACEHOLDER")}
            value={text1}
            onChange={(value) => setText1(value)}
          />
        </ZRow>
      </PageSession>

      <PageSession title={t("TEXTAREA.SIZES")}>
        <ZRow direction="column" gap={16}>
          <ZTextArea
            size={ZSizeEnum.Small}
            placeholder={t("TEXTAREA.SMALL")}
            value={text2}
            onChange={(value) => setText2(value)}
          />
          <ZTextArea
            size={ZSizeEnum.Default}
            placeholder={t("TEXTAREA.DEFAULT")}
            value={text2}
            onChange={(value) => setText2(value)}
          />
          <ZTextArea
            size={ZSizeEnum.Large}
            placeholder={t("TEXTAREA.LARGE")}
            value={text2}
            onChange={(value) => setText2(value)}
          />
        </ZRow>
      </PageSession>

      <PageSession title={t("TEXTAREA.DISABLED")}>
        <ZRow>
          <ZSwitch
            value={disabled}
            onChange={setDisabled}
            activeText={t("TEXTAREA.STATES.DISABLED")}
            inactiveText={t("TEXTAREA.STATES.ENABLED")}
          />
          <ZTextArea
            placeholder={t("TEXTAREA.PLACEHOLDER")}
            value={text3}
            onChange={(value) => setText3(value)}
            disable={disabled}
          />
        </ZRow>
      </PageSession>

      <PageSession title={t("TEXTAREA.CLEARABLE")}>
        <ZRow>
          <ZTextArea
            placeholder={t("TEXTAREA.PLACEHOLDER")}
            value={text3}
            onChange={(value) => setText3(value)}
            allowClean
          />
        </ZRow>
      </PageSession>
    </>
  );
};

export default TextAreaDemoScreen;