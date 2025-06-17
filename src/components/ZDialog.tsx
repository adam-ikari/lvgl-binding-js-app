import {
  ZButton,
  ZButtonTypeEnum,
  ZFlexAlignItems,
  ZFlexJustifyContent,
  ZIconSymbol,
  ZModal,
  ZRow,
  ZSizeEnum,
  ZText,
  ZWidthEnum,
} from ".";
import { COMMON_STYLE } from "@/styles/common_style";
import { useMergeStyle } from "@/hooks/styleHooks";
import { Dimensions, EAlignType, View } from "sdk-ui";
import React, { useMemo } from "react";

interface ZDialogProps {
  children?: React.ReactNode | React.ReactNode[];
  title?: string;
  showClose?: boolean;
  onMaskClick?: () => void;
  onClose?: () => void;
  onCancel?: () => void;
  onConfirm?: () => void;
}

const ZDialog = (props: ZDialogProps) => {
  const { width: windowWidth, height: windowHeight } = Dimensions.window;

  const mergeStyle = useMergeStyle();

  const {
    children,
    title,
    showClose = true,
    onMaskClick = () => {},
    onClose = () => {},
    onCancel = () => {},
    onConfirm = () => {},
  } = props;

  const computedWidthStyle = useMemo(() => {
    return {
      "min-width": windowWidth * 0.3,
      "max-width": windowWidth * 0.8,
    };
  }, [windowWidth]);

  const computedHeightStyle = useMemo(() => {
    return {
      "min-height": windowHeight * 0.3,
      "max-height": windowHeight * 0.8,
    };
  }, [windowHeight]);

  return (
    <ZModal onMaskClick={onMaskClick}>
      <View
        style={mergeStyle(
          computedWidthStyle,
          computedHeightStyle,
          COMMON_STYLE.flexColumn,
          COMMON_STYLE.padding10,
          COMMON_STYLE.noBorder,
          COMMON_STYLE.radius4,
        )}
        align={{
          type: EAlignType.ALIGN_CENTER,
        }}
      >
        <ZRow width={ZWidthEnum.Full} alignItems={ZFlexAlignItems.Center}>
          <ZRow style={{ "flex-grow": 1 }}>
            {title && <ZText size={ZSizeEnum.Large}>{title}</ZText>}
          </ZRow>
          {showClose && (
            <ZButton
              size={ZSizeEnum.Small}
              icon={ZIconSymbol.Close}
              round
              text
              onClick={onClose}
            ></ZButton>
          )}
        </ZRow>
        <ZRow width={ZWidthEnum.Full} style={{ "flex-grow": 1 }}>
          {children}
        </ZRow>
        <ZRow
          width={ZWidthEnum.Full}
          justifyContent={ZFlexJustifyContent.End}
          alignItems={ZFlexAlignItems.Center}
        >
          <ZButton onClick={onCancel}>Cancel</ZButton>
          <ZButton type={ZButtonTypeEnum.Primary} onClick={onConfirm}>
            Confirm
          </ZButton>
        </ZRow>
      </View>
    </ZModal>
  );
};

export default ZDialog;
