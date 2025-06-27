import PageSession from "./common/PageSession";
import { ZPagination, ZText } from "@/components/";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const BaseSession = React.memo(() => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  return (
    <PageSession title={t("PAGINATION.BASIC")}>
      <ZText>{`${t("PAGINATION.CURRENT_PAGE")}: ${currentPage}`}</ZText>
      <ZText>{`${t("PAGINATION.TOTAL_PAGES")}: ${totalPages}`}</ZText>
      <ZPagination
        current={currentPage}
        total={totalPages}
        onChange={setCurrentPage}
      />
    </PageSession>
  );
});

const CumstomMaxVisibleSession = React.memo(() => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 50;
  const maxVisible = 10;
  return (
    <PageSession title={t("PAGINATION.CUSTOM_MAX_VISIBLE")}>
      <ZText>{`${t("PAGINATION.CURRENT_PAGE")}: ${currentPage}`}</ZText>
      <ZText>{`${t("PAGINATION.TOTAL_PAGES")}: ${totalPages}`}</ZText>
      <ZText>{`${t("PAGINATION.MAX_VISIBLE")}: ${maxVisible}`}</ZText>
      <ZPagination
        style={{ width: "100%" }} // 如果页码过多，可以设置宽度，防止溢出
        current={currentPage}
        total={totalPages}
        maxVisible={maxVisible}
        onChange={setCurrentPage}
      />
    </PageSession>
  );
});

const PaginationDemoScreen = () => {
  return (
    <>
      <BaseSession></BaseSession>
      <CumstomMaxVisibleSession></CumstomMaxVisibleSession>
    </>
  );
};

export default PaginationDemoScreen;
