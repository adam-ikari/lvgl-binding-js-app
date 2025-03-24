import { COLORS } from "@/common_style";
import { ZButton, ZButtonTypeEnum, ZColumn, ZRow, ZText } from "@/components";
import { ZNavHeaderLayout } from "@/layouts";
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
      { text: "Button Demo", path: "/button" },
      { text: "Icon Demo", path: "/icon" },
    ],
  },
  {
    text: "Feedback Widgets",
    children: [{ text: "Dialog Demo", path: "/dialog" }],
  },
  { text: "List Render", children: [{ text: "List Demo", path: "/list" }] },
  { text: "State", children: [{ text: "State Demo", path: "/state" }] },
];

const HomeScreen = () => {
  const navigate = useNavigate();
  return (
    <ZNavHeaderLayout title="Home">
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
              <ZButton
                type={ZButtonTypeEnum.Primary}
                onClick={() => navigate(item.path)}
              >
                {item.text}
              </ZButton>
            ))}
          </ZRow>
        </ZColumn>
      ))}
    </ZNavHeaderLayout>
  );
};

export default HomeScreen;
