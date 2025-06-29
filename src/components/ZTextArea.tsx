import { ZButton, ZIconSymbol, ZSizeEnum, ZStyleProps } from ".";
import { useMergeStyle } from "@/hooks/styleHooks";
import { COMMON_STYLE, CONSTANTS } from "@/styles/common_style";
import React, { useLayoutEffect, useMemo, useState } from "react";
import { EAlignType, Textarea, View } from "sdk-ui";

const mergeStyle = useMergeStyle();

const enum ZTextAreaModeEnum {
  TEXT = "text",
  PASSWORD = "password",
}

interface ZTextAreaProps {
  placeholder?: string;
  mode?: ZTextAreaModeEnum;
  allowClean?: boolean;
  size?: ZSizeEnum;
  value?: string;
  maxLength?: number;
  round?: boolean;
  rows?: number;
  onChange?: (value: string) => void;
}

const style = {
  textarea: mergeStyle(COMMON_STYLE.noBorder),
  view: mergeStyle(
    COMMON_STYLE.autoWidth,
    COMMON_STYLE.radius4,
    COMMON_STYLE.border1,
    COMMON_STYLE.padding0,
  ),
};

const sizeStyleMap: Record<string, ZStyleProps> = {
  small: mergeStyle(
    COMMON_STYLE.minWidth36,
    COMMON_STYLE.heightAuto,
    COMMON_STYLE.fontSizeSmall,
  ),
  default: mergeStyle(
    COMMON_STYLE.minWidth40,
    COMMON_STYLE.heightAuto,
    COMMON_STYLE.fontSizeDefault,
  ),
  large: mergeStyle(
    COMMON_STYLE.minWidth48,
    COMMON_STYLE.heightAuto,
    COMMON_STYLE.fontSizeLarge,
  ),
};

interface ClearButtonProps {
  size: ZSizeEnum;
  onClick?: () => void;
  display?: boolean;
}

const ClearButton = React.memo<ClearButtonProps>(({ size, onClick }) => {
  return (
    <ZButton
      size={size}
      icon={ZIconSymbol.Backspace}
      onClick={onClick}
      round
      text
      align={{
        type: EAlignType.ALIGN_OUT_RIGHT_TOP,
      }}
    ></ZButton>
  );
});

const ZTextArea = (props: ZTextAreaProps) => {
  const {
    placeholder = "",
    mode = "text",
    size = ZSizeEnum.Default,
    value: propValue = "",
    allowClean = false,
    maxLength = 256,
    round = false,
    rows = 3,
    onChange,
  } = props;

  const [input, setInput] = useState(propValue);

  useLayoutEffect(() => {
    if (input !== propValue) {
      onChange?.(input);
    }
  }, [propValue]);

  useLayoutEffect(() => {
    if (input !== propValue && onChange) {
      onChange(input);
    }
  }, [input]);

  const computedTextAreaStyle = useMemo(() => {
    return mergeStyle(
      sizeStyleMap[size],
      round && { "border-radius": CONSTANTS.MAX_RADIUS },
      { "min-height": "auto" },
    );
  }, [size, round, mergeStyle]);

  const clearInput = () => {
    setInput("");
  };

  return (
    <View style={mergeStyle(style.view, computedTextAreaStyle)}>
      <Textarea
        style={mergeStyle(style.textarea, computedTextAreaStyle)}
        placeholder={placeholder}
        value={input}
        onChange={(e) => {
          setInput(String(e.value));
        }}
        onFocusStyle={COMMON_STYLE.noBorder}
        mode={mode}
        autoKeyBoard={false}
        align={{
          type: EAlignType.ALIGN_OUT_LEFT_TOP,
        }}
      ></Textarea>
      {allowClean && input && input.length > 0 ? (
        <ClearButton onClick={clearInput} size={size} />
      ) : null}
    </View>
  );
};

export type { ZTextAreaProps };
export { ZTextAreaModeEnum };
export default ZTextArea;
