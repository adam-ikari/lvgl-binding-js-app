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

const style = {
  BackgroundStyle: {
    "background-color": COLORS.PAGE_BACKGROUND,
  },
};

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
      style={{ ...style.BackgroundStyle }}
    >
      <ZNavHeader withBack={true} title={"List Demo"}></ZNavHeader>
      <ZColumn style={{ ...style.BackgroundStyle }}>
        {items.map((item) => (
          <ZRow key={item.id} style={{ ...style.BackgroundStyle }}>
            <ZText>{item.text}</ZText>
            <ZButton
              onClick={() => {
                const new_todos = items.filter((todo) => todo.id !== item.id);
                console.log(new_todos);
                setItems(new_todos);
              }}
            >
              x
            </ZButton>
          </ZRow>
        ))}
      </ZColumn>
      <ZRow style={{ ...style.BackgroundStyle }}>
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
