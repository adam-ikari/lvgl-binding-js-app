import { StyleProps } from "lvgljs-ui/core/style";
import { ColorType } from "lvgljs-ui/core/style/color";

const CONSTANTS = {
  MIN_HEIGHT_32: 32,
  MAX_RADIUS: 0x7fff,
};

const COLORS: Record<string, ColorType> = {
  // 主题色
  PRIMARY: "#409EFF", // 主品牌色
  SUCCESS: "#67C23A", // 成功状态
  INFO: "#909399", // 信息提示
  DANGER: "#F56C6C", // 危险状态
  WARNING: "#E6A23C", // 警告状态

  // 基础色
  WHITE: "#FFFFFF", // 纯白
  BLACK: "#000000", // 纯黑

  // 边框色
  BORDER: "#DEDFE2", // 默认边框
  BORDER_LIGHT: "#EBEEF5", // 浅色边框
  BORDER_DARK: "#DCDFE6", // 深色边框

  // 背景色
  PAGE_BACKGROUND: "#F2F3F5", // 页面背景
  CARD_BACKGROUND: "#FFFFFF", // 卡片背景
  BUTTON_BACKGROUND: "#FFFFFF", // 按钮背景
  INPUT_BACKGROUND: "#FFFFFF", // 输入框背景
  SELECT_BACKGROUND: "#FFFFFF", // 选择框背景

  // 其他背景色
  BACKGROUND: "#F5F7FA", // 默认背景
  BACKGROUND_LIGHT: "#FAFAFA", // 浅色背景
  BACKGROUND_DARK: "#E4E7ED", // 深色背景

  // 文本色
  PRIMARY_TEXT: "#303133", // 主要文字
  REGULAR_TEXT: "#606266", // 常规文字
  SECONDARY_TEXT: "#909399", // 次要文字
  PLACEHOLDER_TEXT: "#C0C4CC", // 占位文字

  // 灰色系
  GREY: "#F0F0F0", // 默认灰
  GREY_LIGHT: "#F5F5F5", // 浅灰
  GREY_DARK: "#DCDCDC", // 深灰
};

const COMMON_STYLE: Record<string, StyleProps> = {
  flexRow: {
    display: "flex",
    "flex-direction": "row",
  },
  flexColumn: {
    display: "flex",
    "flex-direction": "column",
  },
  justifyContentCenter: {
    "justify-content": "center",
  },
  alignItemsCenter: {
    "align-items": "center",
  },
  noBorder: {
    "border-width": 0,
  },
  border1: {
    "border-width": 1,
  },
  borderLight: {
    "border-width": 1,
    "border-color": COLORS.BORDER,
  },
  radius4: {
    "border-radius": 4,
  },
  radiusMax: {
    "border-radius": CONSTANTS.MAX_RADIUS,
  },
  autoWidth: {
    width: "auto",
  },
  fullWidth: {
    width: "100%",
  },
  minWidth10: {
    "min-width": 10,
  },
  minWidth20: {
    "min-width": 20,
  },
  minWidth32: {
    "min-width": 32,
  },
  minWidth36: {
    "min-width": 36,
  },
  minWidth40: {
    "min-width": 40,
  },
  minWidth48: {
    "min-width": 48,
  },
  minWidth50: {
    "min-width": 50,
  },
  width10: {
    "min-width": 10,
  },
  width20: {
    "min-width": 20,
  },
  width32: {
    "min-width": 32,
  },
  width36: {
    "min-width": 36,
  },
  width40: {
    "min-width": 40,
  },
  width48: {
    "min-width": 48,
  },
  width50: {
    "min-width": 50,
  },
  fullHeight: {
    height: "100%",
  },
  autoHeight: {
    height: "auto",
  },
  minHeight12: {
    height: 12,
  },
  minHeight24: {
    height: 24,
  },
  minHeight32: {
    height: 32,
  },
  minHeight36: {
    height: 36,
  },
  minHeight40: {
    height: 40,
  },
  minHeight48: {
    height: 48,
  },
  height12: {
    height: 12,
  },
  height24: {
    height: 24,
  },
  height32: {
    height: 32,
  },
  height36: {
    height: 36,
  },
  height40: {
    height: 40,
  },
  height48: {
    height: 48,
  },
  padding0: {
    padding: 0,
  },
  padding10: {
    padding: 10,
  },
  padding20: {
    padding: 20,
  },
  paddingHorizontal4: {
    "padding-left": 4,
    "padding-right": 4,
  },
  paddingHorizontal8: {
    "padding-left": 8,
    "padding-right": 8,
  },
  paddingHorizontal16: {
    "padding-left": 16,
    "padding-right": 16,
  },
  fontSizeSmall: {
    "font-size": 12,
  },
  fontSizeDefault: {
    "font-size": 14,
  },
  fontSizeLarge: {
    "font-size": 16,
  },
  radius0: {
    "border-radius": 0,
  },
};

export { COMMON_STYLE, COLORS, CONSTANTS };
