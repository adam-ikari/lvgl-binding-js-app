import { ZStyleProps } from "@/components";
import React, { useEffect, useState } from "react";
import { ProgressBar } from "sdk-ui";

interface ZProcessBarProps {
  value: number;
  min?: number;
  max?: number;
  height?: number;
  color?: string;
  backgroundColor?: string;
  animated?: boolean;
  animationDuration?: number;
  style?: ZStyleProps;
  [key: string]: any;
}

const ZProcessBar = ({
  value = 0,
  min = 0,
  max = 100,
  height = 8,
  color = "#4CAF50",
  backgroundColor = "#E0E0E0",
  animated = true,
  animationDuration = 300,
  style: propStyle = {},
  ...restProps
}: ZProcessBarProps) => {
  const [currentValue, setCurrentValue] = useState(value);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setCurrentValue(value);
      }, animationDuration);
      return () => clearTimeout(timer);
    } else {
      setCurrentValue(value);
    }
  }, [value, animated, animationDuration]);

  const progressBarStyle: ZStyleProps = {
    height: height,
    backgroundColor,
    borderRadius: height / 2,
    ...propStyle,
  };

  return (
    <ProgressBar
      style={progressBarStyle}
      range={[min, max]}
      value={currentValue}
      {...restProps}
    />
  );
};

export type { ZProcessBarProps };
export default ZProcessBar;
