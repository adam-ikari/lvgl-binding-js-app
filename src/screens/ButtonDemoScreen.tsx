import { COLORS, COMMON_STYLE } from "@/common_style";
import {
  ZButton,
  ZButtonSize,
  ZButtonType,
  ZCard,
  ZColumn,
  ZRow,
} from "@/components";
import { Text, View } from "lvgljs-ui";
import React from "react";
import { useNavigate } from "react-router-native";

const buttonsData = [
  { text: "Default", type: ZButtonType.Default },
  { text: "Primary", type: ZButtonType.Primary },
  { text: "Success", type: ZButtonType.Success },
  { text: "Info", type: ZButtonType.Info },
  { text: "Danger", type: ZButtonType.Danger },
  { text: "Warning", type: ZButtonType.Warning },
];

const ButtonDemoScreen = () => {
  const navigate = useNavigate();
  return (
    <View
      style={{
        ...COMMON_STYLE.noBorder,
        ...COMMON_STYLE.fullHeight,
        ...COMMON_STYLE.fullWidth,
        "background-color": COLORS.PAGE_BACKGROUND,
      }}
    >
      <ZRow
        style={{
          ...COMMON_STYLE.padding20,
          "background-color": COLORS.PAGE_BACKGROUND,
        }}
      >
        <ZCard header={<Text>Button</Text>}>
          <ZColumn>
            <ZRow>
              {buttonsData.map((item, index) => (
                <ZButton
                  key={index}
                  size={ZButtonSize.Small}
                  type={item.type}
                  text={item.text}
                />
              ))}
            </ZRow>
            <ZRow>
              {buttonsData.map((item, index) => (
                <ZButton key={index} type={item.type} text={item.text} />
              ))}
            </ZRow>
            <ZRow>
              {buttonsData.map((item, index) => (
                <ZButton
                  key={index}
                  size={ZButtonSize.Large}
                  type={item.type}
                  text={item.text}
                />
              ))}
            </ZRow>
          </ZColumn>
        </ZCard>
        <ZCard>
          <ZColumn>
            <ZRow>
              <ZButton onClick={() => navigate(-1)} text="Back"></ZButton>
            </ZRow>
          </ZColumn>
        </ZCard>
      </ZRow>
    </View>
  );
};

export default ButtonDemoScreen;
