import { create } from 'zustand';
import type { Accessory, Phone, Tablet } from '../types/api';
import type { FavouriteProduct } from '../types/FavouriteProduct';

type StoreState = {
  phones: Phone[];
  tablets: Tablet[];
  accessories: Accessory[];
  favorites: FavouriteProduct[];
  cart: string[];
  actions: {
    loadPhones: (phonesToAdd: Phone[]) => void;
    loadTablets: (tabletsToAdd: Tablet[]) => void;
    loadAccessories: (accessoriesToAdd: Accessory[]) => void;
    toggleFavorite: (product: FavouriteProduct) => void;
  };
};

export const useAppState = create<StoreState>()((set) => ({
  phones: [],
  tablets: [],
  accessories: [],
  favorites: [],
  cart: [],

  actions: {
    loadPhones: (phonesToAdd: Phone[]) => set({ phones: phonesToAdd }),
    loadTablets: (tabletsToAdd: Tablet[]) => set({ tablets: tabletsToAdd }),
    loadAccessories: (accessoriesToAdd: Accessory[]) =>
      set({ accessories: accessoriesToAdd }),
    toggleFavorite: (product) =>
      set((state) => ({
        favorites:
          (
            state.favorites.some(
              (favorite) =>
                favorite.id === product.id &&
                favorite.category === product.category,
            )
          ) ?
            state.favorites.filter(
              (favorite) =>
                !(
                  favorite.id === product.id &&
                  favorite.category === product.category
                ),
            )
          : [...state.favorites, product],
      })),
  },

  // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 }),
  // updateBears: (newBears) => set({ bears: newBears }),
}));

export const useAppActions = () => useAppState((state) => state.actions);
