import {
  ZButton,
  ZColorTypeEnum,
  ZColumn,
  ZIconSymbol,
  ZRow,
  ZSizeEnum,
  ZText,
} from "@/components";
import { COLORS } from "@/styles/common_style";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const style = {
  BackgroundStyle: {
    "background-color": COLORS.PAGE_BACKGROUND,
  },
};

function initItems() {
  const items = [];
  for (let i = 0; i < 10; i++) {
    const uuid = uuidv4();
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
    <>
      <ZColumn style={{ ...style.BackgroundStyle }}>
        {items.map((item) => (
          <ZRow key={item.id} style={{ ...style.BackgroundStyle }}>
            <ZText>{item.text}</ZText>
            <ZButton
              icon={ZIconSymbol.Trash}
              type={ZColorTypeEnum.Danger}
              size={ZSizeEnum.Small}
              onClick={() => {
                const new_todos = items.filter((todo) => todo.id !== item.id);
                console.log(new_todos);
                setItems(new_todos);
              }}
              round
            ></ZButton>
          </ZRow>
        ))}
      </ZColumn>
      <ZRow style={{ ...style.BackgroundStyle }}>
        <ZButton
          icon={ZIconSymbol.Minus}
          onClick={() => {
            if (items.length > 0) {
              const new_todo = items.slice(0, -1);
              console.log(new_todo);
              setItems(new_todo);
            }
          }}
        ></ZButton>
        <ZButton
          icon={ZIconSymbol.Plus}
          onClick={() => {
            const uuid = uuidv4();
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
        ></ZButton>
      </ZRow>
    </>
  );
};

export default ListDemoScreen;
