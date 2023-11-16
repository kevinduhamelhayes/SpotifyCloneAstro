import { create } from "zustand";

export const usePlayerStore = create((set) => ({
  isPlaying: false,
  currentMusic: {playlist: null, songs: [], song: null},
  volume: 1,
  setVolume: (volume) => set({volume}),
  setIsPlaying: (isPlaying) => set({isPlaying}),
  setCurrentMusic: (currentMusic) => set({currentMusic}),
}));