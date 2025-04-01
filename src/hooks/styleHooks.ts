import { ZStyleProps } from "@/components";

const useMergeStyle = () => {
  const cache = new WeakMap<ZStyleProps[], ZStyleProps>();
  
  const mergeStyle = (...styleProps: ZStyleProps[]) => {
    // 检查缓存
    if (cache.has(styleProps)) {
      return cache.get(styleProps)!;
    }

    // 空参数检查
    if (styleProps.length === 0) return {};
    if (styleProps.length === 1) return styleProps[0] || {};

    // 使用Object.assign优化性能
    const result = Object.assign({}, ...styleProps.filter(Boolean));
    
    // 缓存结果
    cache.set(styleProps, result);
    return result;
  };

  return mergeStyle;
};

export { useMergeStyle };
