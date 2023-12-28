import { create } from "zustand";

interface OptionState {
  timerMinutes: number;
  setTimerMinutes: (minutesOption: number) => void;
}

const useUserOption = create<OptionState>()((set) => ({
  timerMinutes: 25,
  setTimerMinutes: (minutesOption) =>
    set({ timerMinutes: minutesOption }),
}));

export default useUserOption;