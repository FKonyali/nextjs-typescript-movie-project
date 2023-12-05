import { create } from 'zustand'
/**
 * This is an example use of store.
 * You should change this store variables and setters
 * according to your needs whenever you need global state
 */

interface StoreState {
  movieActivePage: number;
  setMovieActivePage: (value: number) => void;
  allMovieData: any[];
  setAllMovieData: (value: any[]) => void;
  homeScrollOffset: number;
  setHomeScrollOffset: (value: number) => void;
}

const useStore = create<StoreState>((set) => ({
  movieActivePage: 1,
  setMovieActivePage: (value) => set(() => ({ movieActivePage: value })),
  allMovieData: [],
  setAllMovieData: (value) => set(() => ({ allMovieData: value })),
  homeScrollOffset: 0,
  setHomeScrollOffset: (value) => set(() => ({ homeScrollOffset: value})),
}))

export default useStore
