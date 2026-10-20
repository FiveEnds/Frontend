import { Typography } from '../../atoms/Typography/Typography';
import { ProductCardSpecs } from '../../molecules/ProductCardSpecs/ProductCardSpecs';
import { ProductPrice } from '../../molecules/ProductPrice/ProductPrice';
import { ProductSelectActions } from '../../molecules/ProductSelectActions/ProductSelectActions';
import type { Spec } from '../../../types/Specifications';
import { SPECIFICATIONS } from '../../../constants/specifications';
import { Link } from 'react-router-dom';
import type { Product } from '../../../types/Product';
import { useAppActions, useAppState } from '../../../store/store';
import { getScreenLabel } from '../../../utils/formatScreen';
import { ProductRating } from '../../atoms/ProductRating/ProductRating';

type Props = {
  product: Product;
  className?: string;
  cardHeight?: number;
  hasDiscount?: boolean;
};

function getSpecifications(product: Product): Spec[] {
  return [
    [SPECIFICATIONS.SCREEN, getScreenLabel(product.screen)],
    [SPECIFICATIONS.CAPACITY, product.capacity],
    [SPECIFICATIONS.RAM, product.ram],
  ];
}

export const ProductCard: React.FC<Props> = ({
  product,
  className = '',
  cardHeight,
  hasDiscount = true,
}) => {
  const { toggleFavorite, addItemToCart, removeItemFromCart } = useAppActions();

  const isLiked = useAppState((state) => state.favourites.has(product.id));

  const isSelected = useAppState((state) => state.cart.has(product.id));

  const handleCartClick = () => {
    if (isSelected) {
      removeItemFromCart(product.id);
    } else {
      addItemToCart(product);
    }
  };

  return (
    <div
      className={`p-8 flex flex-col gap-2 border dark:bg-surface-1-dark border-elements dark:border-surface-1-dark transition-transform duration-300 ease-in-out hover:scale-105 hover:border-transparent ${className}`}
      style={{ height: cardHeight }}
    >
      <div className="flex-1 min-h-0 flex items-center justify-center w-full">
        <Link
          to={`/${product.category}/${product.id}`}
          className="flex justify-center w-full h-full overflow-hidden"
        >
          <img
            className="max-h-full max-w-full object-contain"
            src={product.images[0]}
            alt={product.id}
          />
        </Link>
      </div>
      <Link
        to={{
          pathname: `/${product.category}/${product.id}`,
        }}
      >
        <Typography>{product.name}</Typography>
      </Link>
      <div className="mt-1 mb-1">
        <ProductRating product={product} />
      </div>
      <div className="border-b border-elements pb-2">
        {(
          hasDiscount &&
          product.priceRegular &&
          product.priceRegular > product.priceDiscount
        ) ?
          <ProductPrice
            currentPrice={product.priceDiscount}
            oldPrice={product.priceRegular}
          />
        : <ProductPrice
            currentPrice={product.priceRegular || product.priceDiscount}
          />
        }
      </div>

      <ProductCardSpecs specifications={getSpecifications(product)} />
      <ProductSelectActions
        handleSelectClick={handleCartClick}
        handleLikeClick={() => toggleFavorite(product)}
        isSelected={isSelected}
        isLiked={isLiked}
      />
    </div>
  );
};
