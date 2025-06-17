import { ZSizeEnum, ZStyleProps } from ".";
import { COMMON_STYLE } from "../common_style";
import { useMergeStyle } from "../hooks/styleHooks";
import * as _ from "radash";
import React from "react";
import { Image } from "sdk-ui";

interface ZImageProps {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  style?: ZStyleProps;
  round?: boolean;
  onClick?: () => void;
  [key: string]: any;
}

const ZImage = (props: ZImageProps) => {
  const mergeStyle = useMergeStyle();

  const baseStyle: ZStyleProps = mergeStyle(
    COMMON_STYLE.autoWidth,
    COMMON_STYLE.autoHeight,
    {
      "object-fit": "contain",
    },
  );

  const roundStyle: ZStyleProps = COMMON_STYLE.radiusMax;

  const {
    src,
    alt = "",
    width,
    height,
    style: propStyle = {},
    size = ZSizeEnum.Default,
    round = false,
    onClick,
    ...restProps
  } = props;

  const handleClick = () => {
    if (onClick && _.isFunction(onClick)) {
      onClick();
    }
  };

  const computedStyle = {
    ...baseStyle,
    ...(round ? roundStyle : {}),
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
    ...propStyle,
  };

  return (
    <Image
      src={src}
      // style={computedStyle}
      onClick={handleClick}
      {...restProps}
    />
  );
};

export type { ZImageProps };
export default ZImage;
