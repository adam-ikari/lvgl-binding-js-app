import { COMMON_STYLE } from "@/common_style";
import {
  ZButton,
  ZButtonTypeEnum,
  ZColumn,
  ZRow,
  ZSizeEnum,
  ZStyleProps,
} from "@/components";
import React, { useMemo } from "react";

enum ZButtonGroupDirectionEnum {
  Horizontal = "horizontal",
  Vertical = "vertical",
}

interface ZButtonGroupProps {
  children: React.ReactNode;
  direction?: ZButtonGroupDirectionEnum;
  size?: ZSizeEnum;
}

const ZButtonGroup = (props: ZButtonGroupProps) => {
  const {
    children,
    direction = ZButtonGroupDirectionEnum.Horizontal,
    size = ZSizeEnum.Default,
  } = props;

  const buttons = (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === ZButton) {
          return React.cloneElement(child, {
            size: child.props.size,
            style: {
              ...child.props.style,
              "border-radius": 0,
            },
            round: false,
          });
        }
        return child;
      })}
    </>
  );

  if (direction == ZButtonGroupDirectionEnum.Horizontal) {
    return <ZRow gap={0}>{buttons}</ZRow>;
  } else {
    return <ZColumn gap={0}>{buttons}</ZColumn>;
  }
};

export type { ZButtonGroupProps };
export { ZButtonGroup, ZButtonGroupDirectionEnum };
