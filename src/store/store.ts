import { create } from 'zustand';
import type { Accessory, Phone, Tablet } from '../types/api';
import type { FavouriteProduct } from '../types/FavouriteProduct';
import type { Product } from '../types/Product';

type CartItemInfo = {
  product: Product;
  amountAdded: number;
};

type AnimationCoords = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type CartAnimation = {
  imageSrc: string;
  start: AnimationCoords;
  end: AnimationCoords;
  id: number;
};

type StoreState = {
  phones: Phone[];
  tablets: Tablet[];
  accessories: Accessory[];
  favourites: FavouriteProduct[];
  cart: Record<string, CartItemInfo>;
  selectedProduct: Product | null;
  cartAnimation: CartAnimation | null;
  actions: {
    loadPhones: (phonesToAdd: Phone[]) => void;
    loadTablets: (tabletsToAdd: Tablet[]) => void;
    loadAccessories: (accessoriesToAdd: Accessory[]) => void;
    toggleFavorite: (product: FavouriteProduct) => void;
    setProductItem: (itemToAdd: Product) => void;
    addItemToCart: (productToAdd: Product) => void;
    removeItemFromCart: (productIdToRemove: string) => void;
    decreaseAmountFromCart: (productId: string) => void;
  };
  startCartAnimation: (animation: CartAnimation) => void;
  finishCartAnimation: () => void;
};

export const useAppState = create<StoreState>()((set, get) => ({
  phones: [],
  tablets: [],
  accessories: [],
  favourites: [],
  cart: {},
  selectedProduct: null,
  cartAnimation: null,
  actions: {
    loadPhones: (phonesToAdd) => set({ phones: phonesToAdd }),
    loadTablets: (tabletsToAdd) => set({ tablets: tabletsToAdd }),
    loadAccessories: (accessoriesToAdd) =>
      set({ accessories: accessoriesToAdd }),
    toggleFavorite: (product) =>
      set((state) => ({
        favourites:
          (
            state.favourites.some(
              (favorite) =>
                favorite.id === product.id &&
                favorite.category === product.category,
            )
          ) ?
            state.favourites.filter(
              (favourite) =>
                !(
                  favourite.id === product.id &&
                  favourite.category === product.category
                ),
            )
          : [...state.favourites, product],
      })),
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
  startCartAnimation: (animation) => set({ cartAnimation: animation }),
  finishCartAnimation: () => set({ cartAnimation: null }),
}));

export const useAppActions = () => useAppState((state) => state.actions);
