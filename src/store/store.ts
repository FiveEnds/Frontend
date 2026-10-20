import { create } from 'zustand';
import type { Accessory, Phone, Tablet } from '../types/api';
import type { FavouriteProduct } from '../types/FavouriteProduct';
import type { Product } from '../types/Product';
import { supabase } from '../services/supabase';

type CartItemInfo = {
  product: Product;
  amountAdded: number;
};

type StoreState = {
  phones: Phone[];
  tablets: Tablet[];
  accessories: Accessory[];
  favourites: FavouriteProduct[];
  cart: Record<string, CartItemInfo>;
  selectedProduct: Product | null;
  ratings: Record<string, number>;
  actions: {
    loadPhones: (phonesToAdd: Phone[]) => void;
    loadTablets: (tabletsToAdd: Tablet[]) => void;
    loadAccessories: (accessoriesToAdd: Accessory[]) => void;
    toggleFavorite: (product: FavouriteProduct) => void;
    setProductItem: (itemToAdd: Product) => void;
    addItemToCart: (productToAdd: Product) => void;
    removeItemFromCart: (productIdToRemove: string) => void;
    decreaseAmountFromCart: (productId: string) => void;
    fetchRatings: () => Promise<void>;
    addProductReview: (product: Product, newRating: number) => Promise<void>;
  };
};

export const useAppState = create<StoreState>()((set, get) => ({
  phones: [],
  tablets: [],
  accessories: [],
  favourites: [],
  cart: {},
  selectedProduct: null,
  ratings: {},

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

    fetchRatings: async () => {
      const { data, error } = await supabase
        .from('reviews')
        .select('product_id, rating');
      if (error) {
        console.error('Failed to get review:', error);
        return;
      }

      if (data) {
        const grouping: Record<string, { total: number; count: number }> = {};

        data.forEach((item) => {
          if (!grouping[item.product_id]) {
            grouping[item.product_id] = { total: 0, count: 0 };
          }
          grouping[item.product_id].total += item.rating;
          grouping[item.product_id].count += 1;
        });
        const averageRatingsMap: Record<string, number> = {};
        Object.keys(grouping).forEach((productId) => {
          const avg = grouping[productId].total / grouping[productId].count;
          averageRatingsMap[productId] = Math.round(avg * 10) / 10;
        });
        set({ ratings: averageRatingsMap });
      }
    },
    addProductReview: async (product, newRating) => {
      let deviceId = localStorage.getItem('device_id');
      if (!deviceId) {
        deviceId = crypto.randomUUID();
        localStorage.setItem('device_id', deviceId);
      }

      const { error } = await supabase.from('reviews').insert([
        {
          device_id: deviceId,
          category: product.category,
          product_id: product.id,
          rating: newRating,
        },
      ]);

      if (error) {
        console.error('Error saving to Supabase', error);
        return;
      }
      await get().actions.fetchRatings();
    },
  },
}));

export const useAppActions = () => useAppState((state) => state.actions);
