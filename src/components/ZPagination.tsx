import { ZButton, ZColorTypeEnum, ZColumn, ZRow, ZSizeEnum } from ".";
import React from "react";

interface ZPaginationProps {
  current: number;
  total: number;
  onChange?: (page: number) => void;
  size?: ZSizeEnum;
}

const ZPagination: React.FC<ZPaginationProps> = (props) => {
  const { current, total, onChange, size = ZSizeEnum.Default } = props;

  const handlePageChange = (page: number) => {
    if (page < 1) page = 1;
    if (page > total) page = total;
    onChange?.(page);
  };

  const renderPageItems = (): React.ReactNode[] => {
    const items: React.ReactElement[] = [];
    const maxVisible = 5;

    let start = Math.max(1, current - 2);
    let end = Math.min(total, start + maxVisible - 1);

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    // 页码按钮
    for (let i = start; i <= end; i++) {
      items.push(
        <ZButton
          key={`${i}`}
          size={size}
          onClick={() => handlePageChange(i)}
          type={i === current ? ZColorTypeEnum.Primary : ZColorTypeEnum.Default}
        >
          {`${i}`}
        </ZButton>,
      );
    }

    return (
      <ZRow>
        <ZButton
          key="prev"
          size={size}
          onClick={() => handlePageChange(current - 1)}
          disable={current === 1}
        >
          prev
        </ZButton>
        <ZRow>{items}</ZRow>
        <ZButton
          key="next"
          size={size}
          onClick={() => handlePageChange(current + 1)}
          disable={current === total}
        >
          next
        </ZButton>
      </ZRow>
    );
  };

  return <ZColumn>{renderPageItems() as React.ReactNode}</ZColumn>;
};

export type { ZPaginationProps };
export default ZPagination;
