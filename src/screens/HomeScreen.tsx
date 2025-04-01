import { COLORS, COMMON_STYLE } from "@/common_style";
import { ZButton, ZCard, ZRow, ZSizeEnum, ZText } from "@/components";
import { useMergeStyle } from "@/hooks/styleHooks";
import React from "react";
import { useNavigate } from "react-router-native";

const mergeStyle = useMergeStyle();

const indexData = [
  {
    text: "Basic Widgets",
    children: [
      { text: "Button Demo", path: "/button" },
      { text: "Icon Demo", path: "/icon" },
      { text: "Card Demo", path: "/card" },
      { text: "Switch Demo", path: "/switch" },
      { text: "Dropdown Demo", path: "/dropdown" },
    ],
  },
  {
    text: "Form Widgets",
    children: [{ text: "Input Demo", path: "/input" }],
  },
  {
    text: "Feedback Widgets",
    children: [{ text: "Dialog Demo", path: "/dialog" }],
  },
  { text: "List Render", children: [{ text: "List Demo", path: "/list" }] },
  { text: "State", children: [{ text: "State Demo", path: "/state" }] },
];

const PageSession = ({ children, title }) => (
  <ZCard
    style={mergeStyle(COMMON_STYLE.fullWidth)}
    header={<ZText size={ZSizeEnum.Large}>{title}</ZText>}
  >
    {children}
  </ZCard>
);

const HomeScreen = () => {
  const navigate = useNavigate();
  return (
    <>
      {indexData.map((category, index) => (
        <PageSession key={index} title={category.text}>
          <ZRow wrap>
            {category.children.map((item, index) => (
              <ZButton key={index} onClick={() => navigate(item.path)}>
                {item.text}
              </ZButton>
            ))}
          </ZRow>
        </PageSession>
      ))}
    </>
  );
};

export default HomeScreen;
