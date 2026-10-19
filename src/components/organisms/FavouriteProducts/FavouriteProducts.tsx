import type { FavouriteProduct } from '../../../types/FavouriteProduct';
import { Typography } from '../../atoms/Typography/Typography';
import { ProductCard } from '../ProductCard/ProductCard';

type Props = {
  favouriteProducts: FavouriteProduct[];
  toggleFavorite: (product: FavouriteProduct) => void;
};

export const FavouriteProducts: React.FC<Props> = ({ favouriteProducts }) => {
  return (
    <div
      className="grid grid-cols-4 gap-x-4 gap-y-10 md:grid-cols-12
    lg:grid-cols-24"
    >
      {favouriteProducts.length === 0 ?
        <Typography
          className="col-span-full"
          level="h4"
        >
          Add products to your favourites
        </Typography>
      : favouriteProducts.map((product) => {
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
