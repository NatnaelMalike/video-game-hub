import { create } from "zustand";


interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    searchText?: string;
}

export interface GameQueryStore {
    gameQuery: GameQuery;
    setSearchText: (searchText: string) => void;
    setSelectGenreId: (genreId: number) => void;
    setSelectPlatformId: (platformId: number) => void;
    setSelectOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
    gameQuery: {},
    setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
    setSelectGenreId: (genreId) =>
        set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
    setSelectPlatformId: (platformId) =>
        set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
    setSelectOrder: (sortOrder) =>
        set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

export default useGameQueryStore