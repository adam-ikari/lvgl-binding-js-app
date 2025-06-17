import { create } from "zustand";

interface CounterStoreProps {
  count: number;
  increase: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterStoreProps>((set) => ({
  count: 1,
  increase: () => set((state) => ({ count: state.count + 1 })),
  reset: () => set((state) => ({ count: (state.count = 0) })),
}));

export { useCounterStore };
export type { CounterStoreProps };
