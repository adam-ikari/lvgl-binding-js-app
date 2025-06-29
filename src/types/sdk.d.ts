declare module "sdk/ui/core/style" {
  interface StyleProps {
    /** CSS 类名 */
    className?: string;
    /** 内联样式 */
    style?: React.CSSProperties;
    /** 子元素 */
    children?: React.ReactNode;
  }

  export { StyleProps };
}