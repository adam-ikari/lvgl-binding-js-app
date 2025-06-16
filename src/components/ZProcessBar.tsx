import { ProgressBar } from "sdk/ui";
import React, { useEffect, useState } from "react";
import { StyleProp } from "@/types";

interface ZProcessBarProps {
  value: number;
  min?: number;
  max?: number;
  height?: number;
  color?: string;
  backgroundColor?: string;
  animated?: boolean;
  animationDuration?: number;
  style?: StyleProp;
  onChange?: (value: number) => void;
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
  style: customStyle = {},
  onChange,
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

  const progressBarStyle = {
    height: `${height}px`,
    backgroundColor,
    borderRadius: `${height / 2}px`,
    ...customStyle,
  };

  const progressStyle = {
    backgroundColor: color,
    borderRadius: `${height / 2}px`,
  };

  return (
    <ProgressBar
      style={progressBarStyle}
      progressStyle={progressStyle}
      range={[min, max]}
      value={currentValue}
      onChange={onChange}
    />
  );
};

export type { ZProcessBarProps };
export default ZProcessBar;
