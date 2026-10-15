import { create } from 'zustand';
import type { Accessory, Phone, Tablet } from '../types/api';

type ProductItem = Phone | Tablet | Accessory;

type StoreState = {
  phones: Phone[];
  tablets: Tablet[];
  accessories: Accessory[];
  favorites: string[];
  cart: string[];
  selectedProduct: ProductItem | null;
  actions: {
    loadPhones: (phonesToAdd: Phone[]) => void;
    loadTablets: (tabletsToAdd: Tablet[]) => void;
    loadAccessories: (accessoriesToAdd: Accessory[]) => void;
    setProductItem: (itemToAdd: ProductItem) => void;
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
    loadPhones: (phonesToAdd: Phone[]) => set({ phones: phonesToAdd }),
    loadTablets: (tabletsToAdd: Tablet[]) => set({ tablets: tabletsToAdd }),
    loadAccessories: (accessoriesToAdd: Accessory[]) =>
      set({ accessories: accessoriesToAdd }),
    setProductItem: (productItem: ProductItem) =>
      set({ selectedProduct: productItem }),
  },

  // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 }),
  // updateBears: (newBears) => set({ bears: newBears }),
}));

export const useAppActions = () => useAppState((state) => state.actions);
