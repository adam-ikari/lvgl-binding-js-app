import React from "react";

// 扩展React类型声明
declare module "react" {
  function useSyncExternalStore(
    subscribe: (onStoreChange: () => void) => () => void,
    getSnapshot: () => any
  ): any;
}

if (!React.useSyncExternalStore) {
  React.useSyncExternalStore = function (subscribe, getSnapshot) {
    const [state, setState] = React.useState(getSnapshot);

    React.useEffect(() => {
      // 标记组件是否挂载（避免内存泄漏）
      let isMounted = true;

      const unsubscribe = subscribe(() => {
        if (isMounted) {
          // 获取最新快照并更新状态
          setState(getSnapshot());
        }
      });

      return () => {
        isMounted = false;
        unsubscribe?.();
      };
    }, [subscribe, getSnapshot]);

    return state;
  };
}
