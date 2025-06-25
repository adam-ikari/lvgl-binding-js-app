import PageSession from "./common/PageSession";
import { ZPagination } from "@/components/";
import React, { useState } from "react";

const PaginationDemoScreen: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  return (
    <PageSession title="Basic">
      <ZPagination
        current={currentPage}
        total={totalPages}
        onChange={setCurrentPage}
      />
    </PageSession>
  );
};

export default PaginationDemoScreen;
