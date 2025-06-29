import { ZButton, ZRow, ZWidthEnum } from "@/components";
import PageSession from "@/screens/common/PageSession";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-native";

const HomeScreen = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const indexData = [
    {
      text: t("BASIC_WIDGETS"),
      children: [
        { text: "Button Demo", path: "/button" },
        { text: "Icon Demo", path: "/icon" },
        { text: "Card Demo", path: "/card" },
        { text: "Progress Bar Demo", path: "/process-bar" },
        { text: "Image Demo", path: "/image" },
        { text: "Pagination Demo", path: "/pagination" },
      ],
    },
    {
      text: t("FORM_WIDGETS"),
      children: [
        { text: t("INPUT_DEMO"), path: "/input" },
        { text: t("SWITCH_DEMO"), path: "/switch" },
        { text: t("CHECKBOX_DEMO"), path: "/checkbox" },
        { text: t("DROPDOWN_DEMO"), path: "/dropdown" },
        { text: t("TEXTAREA_DEMO"), path: "/textarea" },
      ],
    },
    {
      text: t("FEEDBACK_WIDGETS"),
      children: [{ text: t("DIALOG_DEMO"), path: "/dialog" }],
    },
    {
      text: t("LIST_RENDER"),
      children: [{ text: t("LIST_DEMO"), path: "/list" }],
    },

    {
      text: t("STATE"),
      children: [
        { text: t("STATE_DEMO"), path: "/state" },
        { text: t("GLOBAL_STATE_DEMO"), path: "/global_state" },
      ],
    },
    {
      text: t("WEB_API"),
      children: [
        { text: t("WASM_DEMO"), path: "/wasm" },
        { text: t("WORKER_DEMO"), path: "/worker" },
        { text: t("LOCALSTORAGE_DEMO"), path: "/localstorage" },
      ],
    },
  ];

  return (
    <>
      {indexData.map((category, index) => (
        <PageSession key={index} title={category.text}>
          <ZRow wrap width={ZWidthEnum.Full}>
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
