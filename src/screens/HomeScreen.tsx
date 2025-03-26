import { COLORS } from "@/common_style";
import { ZButton, ZButtonTypeEnum, ZColumn, ZRow, ZText } from "@/components";
import { ZNavScreenLayout } from "@/layouts";
import React from "react";
import { useNavigate } from "react-router-native";

const style = {
  BackgroundStyle: {
    "background-color": COLORS.PAGE_BACKGROUND,
  },
};

const indexData = [
  {
    text: "Basic Widgets",
    children: [
      { text: "Button Demo", name: "button" },
      { text: "Icon Demo", name: "icon" },
    ],
  },
  {
    text: "Form Widgets",
    children: [{ text: "Input Demo", name: "input" }],
  },
  {
    text: "Feedback Widgets",
    children: [{ text: "Dialog Demo", name: "dialog" }],
  },
  { text: "List Render", children: [{ text: "List Demo", name: "list" }] },
  { text: "State", children: [{ text: "State Demo", name: "state" }] },
];

const HomeScreen = () => {
  const navigate = useNavigate();
  return (
    <ZNavScreenLayout title="Home">
      {indexData.map((category) => (
        <ZColumn
          style={{
            ...style.BackgroundStyle,
          }}
        >
          <ZText>{category.text}</ZText>
          <ZRow
            wrap
            style={{
              ...style.BackgroundStyle,
            }}
          >
            {category.children.map((item) => (
              <ZButton onClick={() => navigate(item.name)}>{item.text}</ZButton>
            ))}
          </ZRow>
        </ZColumn>
      ))}
    </ZNavScreenLayout>
  );
};

export default HomeScreen;
