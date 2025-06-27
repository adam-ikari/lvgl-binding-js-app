import PageSession from "./common/PageSession";
import { ZPagination, ZText } from "@/components/";
import React, { useState } from "react";

const BaseSession = React.memo(() => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  return (
    <PageSession title="Basic">
      <ZText>{`currentPage: ${currentPage}`}</ZText>
      <ZText>{`totalPages: ${totalPages}`}</ZText>
      <ZPagination
        current={currentPage}
        total={totalPages}
        onChange={setCurrentPage}
      />
    </PageSession>
  );
});

const CumstomMaxVisibleSession = React.memo(() => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const maxVisible = 8;
  return (
    <PageSession title="Cumstom Max Visible">
      <ZText>{`currentPage: ${currentPage}`}</ZText>
      <ZText>{`totalPages: ${totalPages}`}</ZText>
      <ZText>{`cumstom max visible: ${maxVisible}`}</ZText>
      <ZPagination
        current={currentPage}
        total={totalPages}
        maxVisible={8}
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
