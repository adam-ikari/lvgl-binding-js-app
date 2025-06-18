import { create } from "zustand";

interface CounterState {
  count: number;
  inc: () => void;
  dec: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterState>((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

export { useCounterStore };
export type { CounterState };
