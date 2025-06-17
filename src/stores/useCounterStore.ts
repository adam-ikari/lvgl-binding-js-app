import { create } from "zustand";

interface CounterState {
  count: number;
  inc: () => void;
}

const useCounterStore = create<CounterState>((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

export { useCounterStore };
export type { CounterState };
