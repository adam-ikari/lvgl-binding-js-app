import { ZButton, ZIconSymbol, ZRow, ZSizeEnum, ZStyleProps } from ".";
import { COMMON_STYLE } from "@/common_style";
import { Input } from "lvgljs-ui";
import React, { useEffect, useMemo, useState } from "react";

interface ZInputProps {
  placeholder?: string;
  password?: boolean;
  allowClean?: boolean;
  size?: ZSizeEnum;
  value?: string;
  maxLangth?: number;
  onChange?: (value: string) => void;
}

const style = {
  input: {
    "border-width": 0,
  },
  view: {
    "border-radius": 4,
    "border-width": 1,
  },
};

const sizeStyleMap: Record<string, ZStyleProps> = {
  small: {
    ...COMMON_STYLE.minWidth36,
    ...COMMON_STYLE.minHeight36,
    ...COMMON_STYLE.fontSizeSmall,
  },
  default: {
    ...COMMON_STYLE.minWidth40,
    ...COMMON_STYLE.minHeight40,
    ...COMMON_STYLE.fontSizeDefault,
  },
  large: {
    ...COMMON_STYLE.minWidth48,
    ...COMMON_STYLE.minHeight48,
    ...COMMON_STYLE.fontSizeLarge,
  },
};

const ZInput = (props: ZInputProps) => {
  const {
    placeholder = "",
    password = false,
    size = ZSizeEnum.Default,
    value = "",
    allowClean = false,
    maxLangth = 256,
    onChange,
  } = props;

  const [input, setInput] = useState(value);

  const computedStyle = useMemo(() => {
    return { ...sizeStyleMap[size] };
  }, [size]);

  useEffect(() => {
    if (onChange) {
      onChange(input);
    }
  }, [input]);

  return (
    <ZRow style={style.view} gap={0}>
      <Input
        style={{ ...style.input, ...computedStyle }}
        placeholder={placeholder}
        maxlength={maxLangth}
        value={input}
        onChange={(e) => {
          setInput(e.value);
        }}
        onFocusStyle={{ "border-width": 0 }}
        autoKeyBoard={true}
        mode={password ? "password" : "text"}
      ></Input>
      {allowClean && (
        <ZButton
          size={size}
          onClick={() => {
            setInput("");
          }}
          icon={ZIconSymbol.Backspace}
          text
        ></ZButton>
      )}
    </ZRow>
  );
};

export type { ZInputProps };
export { ZInput };
