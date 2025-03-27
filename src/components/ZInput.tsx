import { ZButton, ZIconSymbol, ZRow, ZSizeEnum, ZStyleProps } from ".";
import { COMMON_STYLE, CONSTANTS } from "@/common_style";
import { useMergeStyle } from "@/hooks/styleHooks";
import { Input } from "lvgljs-ui";
import React, { useEffect, useMemo, useRef, useState } from "react";

interface ZInputProps {
  placeholder?: string;
  password?: boolean;
  allowClean?: boolean;
  size?: ZSizeEnum;
  value?: string;
  maxLength?: number;
  round?: boolean;
  onChange?: (value: string) => void;
}

const mergeStyle = useMergeStyle();

const style = {
  input: mergeStyle(COMMON_STYLE.noBorder),
  view: mergeStyle(
    COMMON_STYLE.flexRow,
    COMMON_STYLE.alignItemsCenter,
    COMMON_STYLE.justifyContentCenter,
    COMMON_STYLE.autoWidth,
    COMMON_STYLE.autoHeight,
    COMMON_STYLE.radius4,
    COMMON_STYLE.border1,
  ),
};

const sizeStyleMap: Record<string, ZStyleProps> = {
  small: mergeStyle(
    COMMON_STYLE.minWidth36,
    COMMON_STYLE.minHeight36,
    COMMON_STYLE.fontSizeSmall,
  ),
  default: mergeStyle(
    COMMON_STYLE.minWidth40,
    COMMON_STYLE.minHeight40,
    COMMON_STYLE.fontSizeDefault,
  ),
  large: mergeStyle(
    COMMON_STYLE.minWidth48,
    COMMON_STYLE.minHeight48,
    COMMON_STYLE.fontSizeLarge,
  ),
};

interface ClearButtonProps {
  size: ZSizeEnum;
  onClick?: () => void;
  round: boolean;
  display?: boolean;
}

const ClearButton = React.memo<ClearButtonProps>(
  ({ size, onClick, round, display = true }) => {
    if (display) {
      return (
        <ZButton
          size={size}
          onClick={onClick}
          icon={ZIconSymbol.Backspace}
          round={round}
          text
        ></ZButton>
      );
    } else {
      return (
        <ZButton
          size={size}
          icon={ZIconSymbol.Backspace}
          round={round}
          text
          disable
          style={{ opacity: 0 }}
        ></ZButton>
      );
    }
  },
);

const ZInput = (props: ZInputProps) => {
  const {
    placeholder = "",
    password = false,
    size = ZSizeEnum.Default,
    value = "",
    allowClean = false,
    maxLength = 256,
    round = false,
    onChange,
  } = props;

  const [input, setInput] = useState(value);
  const inputRef = useRef();

  useEffect(() => {
    if (onChange) {
      onChange(input);
    }
  }, [input]);

  const computedInputStyle = useMemo(() => {
    return mergeStyle(
      sizeStyleMap[size],
      round ? { "border-radius": CONSTANTS.MAX_RADIUS } : {},
    );
  }, [size, round, mergeStyle]);

  const clearInput = () => {
    setInput("");
    console.log(inputRef.current);
    // inputRef.current.focus(); // not work
  };

  return (
    <ZRow style={style.view} gap={0}>
      <Input
        // ref={inputRef}
        style={mergeStyle(style.input, computedInputStyle)}
        placeholder={placeholder}
        maxlength={maxLength}
        value={input}
        onChange={(e) => {
          setInput(String(e.value));
        }}
        onFocusStyle={COMMON_STYLE.noBorder}
        autoKeyBoard={true}
        mode={password ? "password" : "text"}
      ></Input>
      <ClearButton
        onClick={clearInput}
        size={size}
        round={round}
        display={allowClean && input && input.length > 0}
      />
    </ZRow>
  );
};

export type { ZInputProps };
export { ZInput };
