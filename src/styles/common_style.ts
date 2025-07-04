import { ZStyleProps } from "@/components";

const CONSTANTS = {
  MIN_HEIGHT_32: 32,
  MAX_RADIUS: 0x7fff,
};

const COLORS: Record<string, string> = {
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

const COMMON_STYLE: Record<string, ZStyleProps> = {
  flexRow: {
    display: "flex",
    "flex-direction": "row",
  },
  flexColumn: {
    display: "flex",
    "flex-direction": "column",
  },
  justifyContentFlexStart: {
    /**
     * 默认对齐方式，子元素在主轴（flex-direction定义的方向）上从起点开始对齐
     */
    "justify-content": "flex-start",
  },
  justifyContentCenter: {
    /**
     * 居中对齐，子元素在主轴（flex-direction定义的方向）上居中对齐
     */
    "justify-content": "center",
  },
  justifyContentFlexEnd: {
    /**
     * 结束对齐，子元素在主轴（flex-direction定义的方向）上从终点开始对齐
     */
    "justify-content": "flex-end",
  },
  justifyContentBetween: {
    /**
     * 两端对齐，子元素之间的空间平均分布
     */
    "justify-content": "space-between",
  },
  justifyContentAround: {
    /**
     * 环绕对齐，子元素之间的空间平均分布，首尾元素与边框距离相等
     */
    "justify-content": "space-around",
  },
  justifyContentEvenly: {
    /**
     * 平均分布，子元素之间的空间平均分布，首尾元素与边框距离相等
     */
    "justify-content": "space-evenly",
  },
  alignItemsStart: {
    "align-items": "start",
  },
  alignItemsCenter: {
    "align-items": "center",
  },
  alignItemsEnd: {
    "align-items": "end",
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
    width: 10,
  },
  width20: {
    width: 20,
  },
  width24: {
    width: 24,
  },
  width32: {
    width: 32,
  },
  width36: {
    width: 36,
  },
  width40: {
    width: 40,
  },
  width42: {
    width: 42,
  },
  width48: {
    width: 48,
  },
  width50: {
    width: 50,
  },
  width56: {
    width: 56,
  },
  width64: {
    width: 50,
  },
  width72: {
    width: 72,
  },
  width80: {
    width: 80,
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
  height20: {
    height: 20,
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
  paddingHorizontal0: {
    "padding-left": 0,
    "padding-right": 0,
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
  paddingVertical0: {
    "padding-top": 0,
    "padding-bottom": 0,
  },
  paddingVertical4: {
    "padding-top": 4,
    "padding-bottom": 4,
  },
  paddingVertical8: {
    "padding-top": 8,
    "padding-bottom": 8,
  },
  paddingVertical16: {
    "padding-top": 16,
    "padding-bottom": 16,
  },
  cardHover: {
    "transition": "all 0.3s ease",
    "transform": "translateY(-2px)",
    "shadow-opacity": 80,
    "shadow-width": 32,
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
