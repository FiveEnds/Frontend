import { create } from 'zustand';
import type { Accessory, Phone, Tablet } from '../types/api';
import type { FavouriteProduct } from '../types/FavouriteProduct';
import type { Product } from '../types/Product';
import { supabase } from '../services/supabase';
import type { User } from '@supabase/supabase-js';

import {
  saveFavorite,
  removeFavorite,
  fetchFavoriteProducts,
} from '../services/favorites';

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
  favourites: Map<string, Product>;
  cart: Map<string, CartItemInfo>;
  selectedProduct: Product | null;
  cartAnimation: CartAnimation | null;
  ratings: Record<string, number>;
  user: User | null;
  actions: {
    loadPhones: (phonesToAdd: Phone[]) => void;
    loadTablets: (tabletsToAdd: Tablet[]) => void;
    loadAccessories: (accessoriesToAdd: Accessory[]) => void;
    setProductItem: (itemToAdd: Product) => void;
    addItemToCart: (productToAdd: Product) => void;
    removeItemFromCart: (productIdToRemove: string) => void;
    decreaseAmountFromCart: (productId: string) => void;
    fetchRatings: () => Promise<void>;
    addProductReview: (product: Product, newRating: number) => Promise<void>;
    setUser: (user: User | null) => void;
    setFavorites: (favorites: FavouriteProduct[]) => void;
    toggleFavorite: (product: FavouriteProduct) => Promise<void>;
    syncFavorites: (userId: string) => Promise<void>;
  };
  startCartAnimation: (animation: CartAnimation) => void;
  finishCartAnimation: () => void;
};

export const useAppState = create<StoreState>()((set, get) => ({
  phones: [],
  tablets: [],
  accessories: [],
  favourites: new Map(),
  cart: new Map(),
  selectedProduct: null,
  cartAnimation: null,
  ratings: {},
  user: null,
  actions: {
    loadPhones: (phonesToAdd) => set({ phones: phonesToAdd }),
    loadTablets: (tabletsToAdd) => set({ tablets: tabletsToAdd }),
    loadAccessories: (accessoriesToAdd) =>
      set({ accessories: accessoriesToAdd }),
    setProductItem: (productItem) => set({ selectedProduct: productItem }),
    addItemToCart: (productToAdd) => {
      const newCart = new Map(get().cart);
      const productId = productToAdd.id;
      const itemValue = newCart.get(productId);

      if (itemValue) {
        newCart.set(productId, {
          ...itemValue,
          amountAdded: itemValue.amountAdded + 1,
        });
      } else {
        newCart.set(productId, { product: productToAdd, amountAdded: 1 });
      }

      set({ cart: newCart });
    },
    removeItemFromCart: (productId) => {
      const currentCart = new Map(get().cart);
      currentCart.delete(productId);

      set({ cart: currentCart });
    },
    decreaseAmountFromCart: (productId) => {
      const currentCart = new Map(get().cart);
      const currentProductInCart = currentCart.get(productId);

      if (!currentProductInCart) {
        return;
      }

      if (currentProductInCart.amountAdded > 1) {
        currentCart.set(productId, {
          product: currentProductInCart?.product,
          amountAdded: currentProductInCart?.amountAdded - 1,
        });
      } else {
        currentCart.delete(productId);
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
      get().actions.fetchRatings();
    },
    setUser: (user) => set({ user }),
    setFavorites: (favorites) => set({ favourites: favorites }),
    toggleFavorite: async (product) => {
      const { user, favourites } = get();

      const isFavorite = favourites.some(
        (favorite) =>
          favorite.id === product.id && favorite.category === product.category,
      );

      try {
        if (user) {
          if (isFavorite) {
            await removeFavorite(user.id, product);
          } else {
            await saveFavorite(user.id, product);
          }
        }

        set({
          favourites:
            isFavorite ?
              favourites.filter(
                (favorite) =>
                  !(
                    favorite.id === product.id &&
                    favorite.category === product.category
                  ),
              )
            : [...favourites, product],
        });
      } catch (error) {
        console.error('Failed to update favorites:', error);
      }
    },
    syncFavorites: async (userId) => {
      try {
        // Сохраняем товары, выбранные до авторизации.
        const localFavorites = get().favourites;

        await Promise.all(
          localFavorites.map((product) => saveFavorite(userId, product)),
        );

        // Загружаем итоговый список из Supabase.
        const remoteFavorites = await fetchFavoriteProducts(userId);

        set({ favourites: remoteFavorites });
      } catch (error) {
        console.error('Failed to sync favorites:', error);
      }
    },
  },
  startCartAnimation: (animation) => set({ cartAnimation: animation }),
  finishCartAnimation: () => set({ cartAnimation: null }),
}));

export const useAppActions = () => useAppState((state) => state.actions);
