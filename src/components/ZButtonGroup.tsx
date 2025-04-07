import { COMMON_STYLE } from "@/common_style";
import { ZButton, ZRow, ZSize } from "@/components";
import { useMergeStyle } from "@/hooks/styleHooks";
import * as _ from "radash";
import React from "react";

interface ZButtonGroupProps {
  children?: React.ReactNode | React.ReactNode[];
  size?: ZSize;
}

const ZButtonGroup = (props: ZButtonGroupProps) => {
  const mergeStyle = useMergeStyle();

  const { children, size = ZSize.Default } = props;

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
