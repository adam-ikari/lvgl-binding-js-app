import { ZButton, ZRow } from "@/components";
import PageSession from "@/screens/common/PageSession";
import React from "react";
import { useNavigate } from "react-router-native";

const indexData = [
  {
    text: "Basic Widgets",
    children: [
      { text: "Button Demo", path: "/button" },
      { text: "Icon Demo", path: "/icon" },
      { text: "Card Demo", path: "/card" },
      { text: "Progress Bar Demo", path: "/process-bar" },
      { text: "Image Demo", path: "/image" },
    ],
  },
  {
    text: "Form Widgets",
    children: [
      { text: "Input Demo", path: "/input" },
      { text: "Switch Demo", path: "/switch" },
      { text: "Checkbox Demo", path: "/checkbox" },
      { text: "Dropdown Demo", path: "/dropdown" },
    ],
  },
  {
    text: "Feedback Widgets",
    children: [{ text: "Dialog Demo", path: "/dialog" }],
  },
  { text: "List Render", children: [{ text: "List Demo", path: "/list" }] },
  {
    text: "State",
    children: [
      { text: "State Demo", path: "/state" },
      { text: "Global State Demo", path: "/global_state" },
    ],
  },
  { text: "Web API", children: [{ text: "WASM Demo", path: "/wasm" }] },
];

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
