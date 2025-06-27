import { ZButton, ZColorTypeEnum, ZColumn, ZRow, ZSizeEnum } from ".";
import React from "react";

interface ZPaginationProps {
  current: number;
  total: number;
  maxVisible?: number;
  onChange?: (page: number) => void;
  size?: ZSizeEnum;
  prevText?: string;
  nextText?: string;
}

const ZPagination = (props) => {
  const {
    current,
    total,
    maxVisible = 5,
    onChange,
    size = ZSizeEnum.Default,
    prevText = "prev",
    nextText = "next",
    style: propsStyle,
    ...restProps
  } = props;

  const handlePageChange = (page: number) => {
    if (page < 1) page = 1;
    if (page > total) page = total;
    onChange?.(page);
  };

  const renderPageItems = (maxVisible: number) => {
    const items = [];
    let start = 1;
    let end = total;

    if (total > maxVisible) {
      // 计算左右两侧应显示的页码数
      const leftCount = Math.floor((maxVisible - 1) / 2);
      const rightCount = Math.ceil((maxVisible - 1) / 2);

      if (current <= leftCount + 1) {
        // 靠近左侧边界
        start = 1;
        end = maxVisible;
      } else if (current >= total - rightCount) {
        // 靠近右侧边界
        start = total - maxVisible + 1;
        end = total;
      } else {
        // 中间位置
        start = current - leftCount;
        end = current + rightCount;
      }
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

    return <>{items}</>;
  };

  return (
    <ZRow wrap {...restProps} style={propsStyle}>
      <ZButton
        key={"prev"}
        size={size}
        onClick={() => handlePageChange(current - 1)}
        disable={current === 1}
      >
        {prevText}
      </ZButton>
      {renderPageItems(maxVisible)}
      <ZButton
        key={"next"}
        size={size}
        onClick={() => handlePageChange(current + 1)}
        disable={current === total}
      >
        {nextText}
      </ZButton>
    </ZRow>
  );
};

export type { ZPaginationProps };
export default ZPagination;
