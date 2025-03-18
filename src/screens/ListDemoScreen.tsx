import { COLORS } from "@/common_style";
import {
  ZButton,
  ZColumn,
  ZHeightEnum,
  ZNavHeader,
  ZRow,
  ZText,
  ZWidthEnum,
} from "@/components";
import React, { useState } from "react";
import { v1 as uuidv1 } from "uuid";

function initItems() {
  const items = [];
  for (let i = 0; i < 5; i++) {
    const uuid = uuidv1();
    items.push({
      id: uuid,
      text: uuid,
    });
  }
  return items;
}

const ListDemoScreen = () => {
  const [items, setItems] = useState(initItems);
  return (
    <ZColumn
      width={ZWidthEnum.Full}
      height={ZHeightEnum.Full}
      style={{
        "background-color": COLORS.PAGE_BACKGROUND,
      }}
    >
      <ZNavHeader withBack={true} title={"List Demo"}></ZNavHeader>
      <ZColumn
        style={{
          "background-color": COLORS.PAGE_BACKGROUND,
        }}
      >
        {items.map((item) => (
          <ZText key={item.id}>{item.text}</ZText>
        ))}
      </ZColumn>
      <ZRow
        style={{
          "background-color": COLORS.PAGE_BACKGROUND,
        }}
      >
        <ZButton
          onClick={() => {
            if (items.length > 0) {
              const new_todo = items.slice(0, -1);
              console.log(new_todo);
              setItems(new_todo);
            }
          }}
        >
          -1
        </ZButton>
        <ZButton
          onClick={() => {
            const uuid = uuidv1();
            const new_todo = [
              ...items,
              {
                id: uuid,
                text: uuid,
              },
            ];
            console.log(new_todo);
            setItems(new_todo);
          }}
        >
          +1
        </ZButton>
      </ZRow>
    </ZColumn>
  );
};

export default ListDemoScreen;
