import {
  ZButton,
  ZDropdown,
  ZIconSymbol,
  ZRow,
  ZSwitch,
  ZText,
  ZWidthEnum,
} from "@/components";
import PageSession from "@/screens/common/PageSession";
import { useCounterStore } from "@/stores/useCounterStore";
import { useSettingsStore } from "@/stores/useSettingsStore";
import React from "react";
import { useTranslation } from "react-i18next";

const languageOptions = [
  { label: "system", value: "system" },
  { label: "en", value: "en" },
  { label: "zh", value: "zh" },
];

const GlobalStatusDemoScreen = () => {
  const { t } = useTranslation();
  const { count, inc, dec, reset } = useCounterStore();
  const { theme, toggleTheme, language, setLanguage } = useSettingsStore();
  return (
    <>
      <PageSession title={t("GLOBAL_STATUS.TITLE")}>
        <ZText>{`${t("GLOBAL_STATUS.COUNTER")}: ${count}`}</ZText>
        <ZRow>
          <ZButton icon={ZIconSymbol.Minus} onClick={() => dec()}>
            {t("BUTTON.DEC")}
          </ZButton>
          <ZButton icon={ZIconSymbol.Plus} onClick={() => inc()}>
            {t("BUTTON.INC")}
          </ZButton>
          <ZButton icon={ZIconSymbol.Refresh} onClick={() => reset()}>
            {t("BUTTON.RESET")}
          </ZButton>
        </ZRow>
      </PageSession>
      <PageSession title={t("GLOBAL_STATUS.PERSIST_TITLE")}>
        <ZRow>
          <ZText>{`${t("GLOBAL_STATUS.THEME")}: ${theme}`}</ZText>
          <ZSwitch value={theme === "dark"} onChange={() => toggleTheme()} />
        </ZRow>
        <ZRow>
          <ZText>{`${t("GLOBAL_STATUS.LANGUAGE")}: ${language}`}</ZText>
          <ZDropdown
            options={languageOptions}
            value={language}
            onChange={(value) => {
              console.log(value);
              setLanguage(value);
            }}
          ></ZDropdown>
        </ZRow>
      </PageSession>
    </>
  );
};

export default GlobalStatusDemoScreen;
