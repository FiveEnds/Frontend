import type { Products } from '../../../types/Product';
import { Typography } from '../../atoms/Typography/Typography';
import { ProductCardSpecs } from '../../molecules/ProductCardSpecs/ProductCardSpecs';
import { ProductPrice } from '../../molecules/ProductPrice/ProductPrice';
import { ProductSelectActions } from '../../molecules/ProductSelectActions/ProductSelectActions';
import type { Spec } from '../../../types/Specifications';
import { SPECIFICATIONS } from '../../../constants/specifications';
import { Link } from 'react-router-dom';

type Props = {
  product: Products;
  className?: string;
  handleLikeClick: () => void;
  handleSelectClick: () => void;
  isSelected: boolean;
  isLiked: boolean;
  cardHeight: number;
  hasDiscount?: boolean;
};

function getSpecifications(product: Products): Spec[] {
  return [
    [SPECIFICATIONS.SCREEN, product.screen],
    [SPECIFICATIONS.CAPACITY, product.capacity],
    [SPECIFICATIONS.RAM, product.ram],
  ];
}

export const ProductCard: React.FC<Props> = ({
  product,
  handleLikeClick,
  handleSelectClick,
  isSelected,
  className = '',
  isLiked,
  cardHeight,
  hasDiscount = true,
}) => (
  <div
    className={`p-8 flex flex-col gap-2 border border-elements ${className}`}
    style={{ height: cardHeight }}
  >
    <div className="flex-1 min-h-0 flex items-center justify-center w-full">
      <Link
        to={`/${product.category}/${product.id}`}
        className="flex justify-center w-full h-full"
      >
        <img
          className="max-h-full max-w-full object-contain"
          src={product.image}
          alt={product.itemId}
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
    {hasDiscount && product.fullPrice && product.fullPrice > product.price ?
      <ProductPrice
        currentPrice={product.price}
        oldPrice={product.fullPrice}
      />
    : <ProductPrice currentPrice={product.fullPrice || product.price} />}
    <ProductCardSpecs specifications={getSpecifications(product)} />
    <ProductSelectActions
      handleSelectClick={handleSelectClick}
      handleLikeClick={handleLikeClick}
      isSelected={isSelected}
      isLiked={isLiked}
    />
  </div>
);
