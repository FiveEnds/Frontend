import { useMemo } from 'react';
import type { FavouriteProduct } from '../../../types/FavouriteProduct';
import { Typography } from '../../atoms/Typography/Typography';
import { ProductCard } from '../ProductCard/ProductCard';

type Props = {
  favouriteProducts: Map<string, FavouriteProduct>;
  toggleFavorite: (product: FavouriteProduct) => void;
};

export const FavouriteProducts: React.FC<Props> = ({ favouriteProducts }) => {
  const productsList = useMemo(
    () => [...favouriteProducts.values()],
    [favouriteProducts],
  );

  return (
    <div
      className="grid grid-cols-4 gap-x-4 gap-y-10 md:grid-cols-12
    lg:grid-cols-24"
    >
      {favouriteProducts.size === 0 ?
        <div className="relative col-span-full w-fit">
          <Typography
            className="text-primary dark:text-white"
            level="h4"
          >
            Add products to your favourites
          </Typography>

          <img
            src="/img/empty-favourites.png"
            className="absolute bottom-0 left-full ml-2 h-12 w-12 translate-y-2 object-contain sm:h-18 sm:w-18"
          />
        </div>
      : productsList.map((product) => {
          return (
            <ProductCard
              className="col-span-4 h-110 sm:col-span-2 md:col-span-6 md:h-126.5 em:col-span-4 lg:col-span-6"
              key={`${product.category}-${product.id}`}
              product={product}
            />
          );
        })
      }
    </div>
  );
};
