import { create } from "zustand";

interface isPlayingState {
  isPlaying: boolean;
  setIsPlaying: (playingOption: boolean) => void;
}

const useIsPlaying = create<isPlayingState>()((set) => ({
  isPlaying: false,
  setIsPlaying: (playingOption) => set({ isPlaying: playingOption }),
}));

export default useIsPlaying;