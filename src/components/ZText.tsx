import { Text } from "lvgljs-ui";
import { StyleProps } from "lvgljs-ui/core/style";
import React from "react";

enum ZTextSize {
  Small = "small",
  Default = "default",
  Large = "large",
}

interface ZTextProps {
  children?: string;
  style?: StyleProps;
  size?: number | ZTextSize;
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

export default ZText;
