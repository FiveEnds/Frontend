import type { Product } from '../../../types/Product';
import { Typography } from '../../atoms/Typography/Typography';
import { ProductCardSpecs } from '../ProductCardSpecs/ProductCardSpecs';
import { ProductPrice } from '../ProductPrice/ProductPrice';
import { ProductSelectActions } from '../ProductSelectActions/ProductSelectActions';
import type { Spec } from '../../../types/Specifications';
import { SPECIFICATIONS } from '../../../constants/specifications';
import { Link } from 'react-router-dom';
import { useAppActions, useAppState } from '../../../store/store';
import type { FavouriteProduct } from '../../../types/FavouriteProduct';

type Props = {
  product: FavouriteProduct;
  className?: string;
  handleSelectClick: () => void;
  isSelected: boolean;
};

function getSpecifications(product: Product): Spec[] {
  return [
    [SPECIFICATIONS.SCREEN, product.screen],
    [SPECIFICATIONS.CAPACITY, product.capacity],
    [SPECIFICATIONS.RAM, product.ram],
  ];
}

export const ProductCard: React.FC<Props> = ({
  product,
  isSelected,
  className = '',
  handleSelectClick,
}) => {
  const isLiked = useAppState((state) =>
    state.favorites.some(
      (favorite) =>
        favorite.id === product.id && favorite.category === product.category,
    ),
  );

  const { toggleFavorite } = useAppActions();

  const handleLikeClick = () => {
    toggleFavorite(product);
  };

  return (
    <div
      className={`p-8 flex flex-col gap-2 border border-elements ${className}`}
    >
      <div className="flex-1 min-h-0 flex items-center justify-center w-full">
        <Link
          to={`/${product.category}/${product.id}`}
          className="flex justify-center w-full h-full"
        >
          <img
            className="max-h-full max-w-full object-contain"
            src={product.images[0]}
            alt={product.namespaceId}
          />
        </Link>
      </div>
      <Link
        to={{
          pathname: `${product.category}/${product.id}`,
        }}
      >
        <Typography>{product.name}</Typography>
      </Link>
      {product.priceDiscount ?
        <ProductPrice
          currentPrice={product.priceDiscount}
          oldPrice={product.priceRegular}
        />
      : <ProductPrice currentPrice={product.priceRegular} />}
      <ProductCardSpecs specifications={getSpecifications(product)} />
      <ProductSelectActions
        handleSelectClick={handleSelectClick}
        handleLikeClick={handleLikeClick}
        isSelected={isSelected}
        isLiked={isLiked}
      />
    </div>
  );
};
