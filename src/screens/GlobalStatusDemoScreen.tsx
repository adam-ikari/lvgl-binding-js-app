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

const languageOptions = [
  { label: "system", value: "system" },
  { label: "en", value: "en" },
  { label: "zh", value: "zh" },
];

const GlobalStatusDemoScreen = () => {
  const { count, inc, dec, reset } = useCounterStore();
  const { theme, toggleTheme, language, setLanguage } = useSettingsStore();
  return (
    <>
      <PageSession title="Global Status">
        <ZText>{`counter: ${count}`}</ZText>
        <ZRow>
          <ZButton icon={ZIconSymbol.Minus} onClick={() => dec()}>
            dec
          </ZButton>
          <ZButton icon={ZIconSymbol.Plus} onClick={() => inc()}>
            inc
          </ZButton>
          <ZButton icon={ZIconSymbol.Refresh} onClick={() => reset()}>
            reset
          </ZButton>
        </ZRow>
      </PageSession>
      <PageSession title="Persist Status">
        <ZRow width={ZWidthEnum.Full}>
          <ZRow style={{ "flex-grow": 1 }}>
            <ZText>{`Theme: ${theme}`}</ZText>
          </ZRow>
          <ZSwitch value={theme === "dark"} onChange={() => toggleTheme()} />
        </ZRow>
        <ZRow width={ZWidthEnum.Full}>
          <ZRow style={{ "flex-grow": 1 }}>
            <ZText>{`Language: ${language}`}</ZText>
          </ZRow>
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
