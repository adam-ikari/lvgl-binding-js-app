import { ZButton, ZColorTypeEnum, ZColumn, ZRow, ZSizeEnum } from ".";
import React from "react";

interface ZPaginationProps {
  current: number;
  total: number;
  onChange?: (page: number) => void;
  size?: ZSizeEnum;
}

const ZPagination = (props) => {
  const { current, total, onChange, size = ZSizeEnum.Default } = props;

  const handlePageChange = (page: number) => {
    if (page < 1) page = 1;
    if (page > total) page = total;
    onChange?.(page);
  };

  const renderPageItems = () => {
    const items: React.ReactElement[] = [];
    const maxVisible = 5;
    const halfVisible = Math.floor(maxVisible / 2);

    let start = Math.max(1, current - halfVisible);
    let end = Math.min(total, start + maxVisible - 1);

    // 调整起始页码确保显示足够数量的页码
    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    // 确保当前页码在中间位置
    if (current > halfVisible && current < total - halfVisible) {
      start = current - halfVisible;
      end = current + halfVisible;
    } else if (current >= total - halfVisible) {
      start = Math.max(1, total - maxVisible + 1);
      end = total;
    }

    // 页码按钮
    for (let i = start; i <= end; i++) {
      items.push(
        <ZButton
          key={`${i - start + 1}`}
          size={size}
          onClick={() => handlePageChange(i)}
          type={i === current ? ZColorTypeEnum.Primary : ZColorTypeEnum.Default}
        >
          {`${i}`}
        </ZButton>,
      );
    }

    return <ZRow>{items}</ZRow>;
  };

  return (
    <ZRow>
      <ZButton
        key={"prev"}
        size={size}
        onClick={() => handlePageChange(current - 1)}
        disable={current === 1}
      >
        prev
      </ZButton>
      {renderPageItems()}
      <ZButton
        key={"next"}
        size={size}
        onClick={() => handlePageChange(current + 1)}
        disable={current === total}
      >
        next
      </ZButton>
    </ZRow>
  );
};

export type { ZPaginationProps };
export default ZPagination;
