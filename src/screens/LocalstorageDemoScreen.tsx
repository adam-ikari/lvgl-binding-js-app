import { ZButton, ZCard, ZInput, ZRow, ZSizeEnum, ZText, ZButtonTypeEnum } from "@/components";
import { COLORS } from "@/styles/common_style";
import React, { useState } from "react";

const LocalstorageDemoScreen = () => {
  const [key, setKey] = useState("key");
  const [value, setValue] = useState("value");
  const [kv, setKV] = useState<{ [key: string]: string }>({});

  const loadAllItems = () => {
    const allItems: { [key: string]: string } = {};
    for (let i = 0; i < window.localStorage.length; i++) {
      const key = window.localStorage.key(i);
      if (key) {
        allItems[key] = window.localStorage.getItem(key) || '';
      }
    }
    setKV(allItems);
  };

  const clearAllItems = () => {
    window.localStorage.clear();
    setKV({});
  };

  return (
    <ZCard style={{ padding: 20 }}>
      <ZRow style={{ marginBottom: 16 }}>
        <ZText size={ZSizeEnum.Default} style={{ width: 80 }}>Key</ZText>
        <ZInput value={key} onChange={(val) => setKey(val)} />
      </ZRow>
      <ZRow style={{ marginBottom: 16 }}>
        <ZText size={ZSizeEnum.Default} style={{ width: 80 }}>Value</ZText>
        <ZInput value={value} onChange={(val) => setValue(val)} />
      </ZRow>

      <ZRow style={{ gap: 8, marginBottom: 16 }}>
        <ZButton
          type={ZButtonTypeEnum.Primary}
          onClick={() => window.localStorage.setItem(key, value)}
        >
          Save
        </ZButton>
        <ZButton
          type={ZButtonTypeEnum.Info}
          onClick={() => setKV({ [key]: window.localStorage.getItem(key) || '' })}
        >
          Load
        </ZButton>
        <ZButton
          type={ZButtonTypeEnum.Success}
          onClick={loadAllItems}
        >
          Load All
        </ZButton>
        <ZButton
          type={ZButtonTypeEnum.Danger}
          onClick={clearAllItems}
        >
          Clear All
        </ZButton>
      </ZRow>

      <ZCard style={{ background: COLORS.LIGHT_BACKGROUND, padding: 16 }}>
        <ZText size={ZSizeEnum.Default} style={{ marginBottom: 8 }}>
          Stored Data:
        </ZText>
        {Object.entries(kv).map(([k, v]) => (
          <ZRow key={k} style={{ marginBottom: 4 }}>
            <ZText size={ZSizeEnum.Small} style={{ color: COLORS.PRIMARY }}>
              {k}:
            </ZText>
            <ZText size={ZSizeEnum.Small} style={{ marginLeft: 8 }}>
              {v}
            </ZText>
          </ZRow>
        ))}
      </ZCard>
    </ZCard>
  );
};

export default LocalstorageDemoScreen;
