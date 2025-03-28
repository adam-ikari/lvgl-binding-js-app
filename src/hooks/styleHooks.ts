import { ZStyleProps } from "@/components";

const useMergeStyle = () => {
  const mergeStyle = (...styleProps: ZStyleProps[]) => {
    return styleProps.reduce((acc, curr) => {
      if (curr) {
        return { ...acc, ...curr };
      }
      return acc;
    }, {});
  };

  return mergeStyle;
};

export { useMergeStyle };
