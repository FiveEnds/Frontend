import { create } from 'zustand';
import type { Accessory, Phone, Tablet } from '../types/api';
import type { Product } from '../types/Product';

type CartItemInfo = {
  product: Product;
  amountAdded: number;
};

type StoreState = {
  phones: Phone[];
  tablets: Tablet[];
  accessories: Accessory[];
  favorites: string[];
  cart: Record<string, CartItemInfo>;
  selectedProduct: Product | null;
  actions: {
    loadPhones: (phonesToAdd: Phone[]) => void;
    loadTablets: (tabletsToAdd: Tablet[]) => void;
    loadAccessories: (accessoriesToAdd: Accessory[]) => void;
    setProductItem: (itemToAdd: Product) => void;
    addItemToCart: (productToAdd: Product) => void;
    removeItemFromCart: (productIdToRemove: string) => void;
    decreaseAmountFromCart: (productId: string) => void;
  };
};

export const useAppState = create<StoreState>()((set, get) => ({
  phones: [],
  tablets: [],
  accessories: [],
  favorites: [],
  cart: {},
  selectedProduct: null,

  actions: {
    loadPhones: (phonesToAdd) => set({ phones: phonesToAdd }),
    loadTablets: (tabletsToAdd) => set({ tablets: tabletsToAdd }),
    loadAccessories: (accessoriesToAdd) =>
      set({ accessories: accessoriesToAdd }),
    setProductItem: (productItem) => set({ selectedProduct: productItem }),
    addItemToCart: (productToAdd) => {
      const currentCart = get().cart;
      const productId = productToAdd.id;

      if (Object.hasOwn(currentCart, productId)) {
        set({
          cart: {
            ...currentCart,
            [productId]: {
              ...currentCart[productId],
              amountAdded: currentCart[productId].amountAdded + 1,
            },
          },
        });
      } else {
        set({
          cart: {
            ...currentCart,
            [productId]: {
              product: productToAdd,
              amountAdded: 1,
            },
          },
        });
      }
    },
    removeItemFromCart: (productId) => {
      const currentCart = { ...get().cart };
      delete currentCart[productId];

      set({ cart: currentCart });
    },
    decreaseAmountFromCart: (productId) => {
      const currentCart = { ...get().cart };
      currentCart[productId] = {
        ...currentCart[productId],
        amountAdded: currentCart[productId].amountAdded - 1,
      };

      if (currentCart[productId].amountAdded === 0) {
        delete currentCart[productId];
      }

      set({ cart: currentCart });
    },
  },

  // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 }),
  // updateBears: (newBears) => set({ bears: newBears }),
}));

export const useAppActions = () => useAppState((state) => state.actions);
