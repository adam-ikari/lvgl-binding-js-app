import {
  ZButton,
  ZButtonTypeEnum,
  ZColumn,
  ZRow,
  ZSizeEnum,
  ZStyleProps,
} from ".";
import { COMMON_STYLE } from "@/common_style";
import React, { useMemo } from "react";

enum ZButtonGroupDirectionEnum {
  Horizontal = "horizontal",
  Vertical = "vertical",
}

interface ZButtonGroupProps {
  children: React.ReactNode;
  direction?: ZButtonGroupDirectionEnum;
  type?: ZButtonTypeEnum;
  size?: ZSizeEnum;
  style?: ZStyleProps;
  gap?: number;
  round?: boolean;
}

const baseStyle: ZStyleProps = {
  ...COMMON_STYLE.flexRow,
  "border-radius": 4,
  "border-width": 1,
  "border-color": "#dedfe2",
  "shadow-width": 0,
};

const directionStyleMap: Record<string, ZStyleProps> = {
  horizontal: {
    ...COMMON_STYLE.flexRow,
  },
  vertical: {
    ...COMMON_STYLE.flexColumn,
  },
};

const ZButtonGroup = (props: ZButtonGroupProps) => {
  const {
    children,
    direction = ZButtonGroupDirectionEnum.Horizontal,
    size,
  } = props;

  const buttons = (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === ZButton) {
          return React.cloneElement(child, {
            size: size || child.props.size,
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
