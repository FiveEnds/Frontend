import { create } from 'zustand';
import type { Accessory, Phone, Tablet } from '../types/api';
import type { Product } from '../types/Product';

type StoreState = {
  phones: Phone[];
  tablets: Tablet[];
  accessories: Accessory[];
  favorites: string[];
  cart: string[];
  selectedProduct: Product | null;
  actions: {
    loadPhones: (phonesToAdd: Phone[]) => void;
    loadTablets: (tabletsToAdd: Tablet[]) => void;
    loadAccessories: (accessoriesToAdd: Accessory[]) => void;
    setProductItem: (itemToAdd: Tablet | Phone | Accessory) => void;
  };
};

export const useAppState = create<StoreState>()((set) => ({
  phones: [],
  tablets: [],
  accessories: [],
  favorites: [],
  cart: [],
  selectedProduct: null,

  actions: {
    loadPhones: (phonesToAdd) => set({ phones: phonesToAdd }),
    loadTablets: (tabletsToAdd) => set({ tablets: tabletsToAdd }),
    loadAccessories: (accessoriesToAdd) =>
      set({ accessories: accessoriesToAdd }),
    setProductItem: (productItem) => set({ selectedProduct: productItem }),
  },

  // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 }),
  // updateBears: (newBears) => set({ bears: newBears }),
}));

export const useAppActions = () => useAppState((state) => state.actions);
