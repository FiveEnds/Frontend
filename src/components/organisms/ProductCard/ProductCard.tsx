import type { Product } from '../../../types/Product';
import { Typography } from '../../atoms/Typography/Typography';
import { ProductCardSpecs } from '../../molecules/ProductCardSpecs/ProductCardSpecs';
import { ProductPrice } from '../../molecules/ProductPrice/ProductPrice';
import { ProductSelectActions } from '../../molecules/ProductSelectActions/ProductSelectActions';
import type { Spec } from '../../../types/Specifications';
import { SPECIFICATIONS } from '../../../constants/specifications';

type Props = {
  product: Product;
  className?: string;
  handleLikeClick: () => void;
  handleSelectClick: () => void;
  isSelected: boolean;
  isLiked: boolean;
  cardHeight: number;
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
  handleLikeClick,
  handleSelectClick,
  isSelected,
  className = '',
  isLiked,
  cardHeight,
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
