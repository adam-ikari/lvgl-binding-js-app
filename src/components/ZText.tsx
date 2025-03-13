import { ZSizeEnum } from ".";
import { Text } from "lvgljs-ui";
import { StyleProps } from "lvgljs-ui/core/style";
import React from "react";

interface ZTextProps {
  children?: string;
  style?: StyleProps;
  size?: number | ZSizeEnum;
}

const ZText = (props: ZTextProps) => {
  const { children, style: propStyle = {} } = props;
  if (children == undefined) {
    return null;
  } else {
    return (
      <Text
        style={{
          ...propStyle,
        }}
      >
        {children}
      </Text>
    );
  }
};

export { ZText, ZTextProps };
