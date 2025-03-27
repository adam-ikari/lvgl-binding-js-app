import { ZButton, ZRow, ZSizeEnum } from "@/components";
import { useMergeStyle } from "@/hooks/styleHooks";
import React from "react";

const mergeStyle = useMergeStyle();

interface ZButtonGroupProps {
  children?: React.ReactNode | React.ReactNode[];
  size?: ZSizeEnum;
}

const ZButtonGroup = (props: ZButtonGroupProps) => {
  const { children, size = ZSizeEnum.Default } = props;

  return (
    <ZRow gap={0}>
      {children &&
        React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === ZButton) {
            return React.cloneElement(child, {
              size,
              style: mergeStyle(child.props.style, { "border-radius": 0 }),
              round: false,
            });
          }
          return child;
        })}
    </ZRow>
  );
};

export type { ZButtonGroupProps };
export { ZButtonGroup };
