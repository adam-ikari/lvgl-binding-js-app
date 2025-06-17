import { COMMON_STYLE } from "@/styles/common_style";
import { ZButton, ZRow, ZSizeEnum } from "@/components";
import { useMergeStyle } from "@/hooks/styleHooks";
import React from "react";

interface ZButtonGroupProps {
  children?: React.ReactNode | React.ReactNode[];
  size?: ZSizeEnum;
}

const ZButtonGroup = (props: ZButtonGroupProps) => {
  const mergeStyle = useMergeStyle();

  const { children, size = ZSizeEnum.Default } = props;

  return (
    <ZRow gap={0}>
      {children &&
        React.Children.map(children, (child: typeof ZButton) => {
          if (React.isValidElement(child) && child.type === ZButton) {
            return React.cloneElement(child, {
              size,
              style: mergeStyle(child.props.style, COMMON_STYLE.radius0),
              round: false,
            });
          }
          return child;
        })}
    </ZRow>
  );
};

export type { ZButtonGroupProps };
export default ZButtonGroup;
