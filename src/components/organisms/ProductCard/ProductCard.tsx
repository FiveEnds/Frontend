import { ICONS } from '../../../constants/icons';
import type { Product } from '../../../types/Product';
import { ButtonCart } from '../../atoms/Buttons/ButtonCart';
import { ButtonIcon } from '../../atoms/Buttons/ButtonIcon';
import { Typography } from '../../atoms/Typography/Typography';
import { ProductCardSpecs } from '../../molecules/ProductCardSpecs/ProductCardSpecs';

type Props = {
  product: Product;
  className?: string;
  handleLikeClick: () => void;
  handleSelectClick: () => void;
  isSelected: boolean;
  isLiked: boolean;
  cardHeight: number;
};

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
      <img
        className="max-h-full max-w-full object-contain"
        src={product.images[0]}
        alt={product.namespaceId}
      />
    </div>
    <Typography>{product.name}</Typography>
    {product.priceDiscount ?
      <div className="pb-2 border-b border-elements flex gap-2">
        <Typography level="h3">${product.priceDiscount}</Typography>
        <Typography level="h3">
          <span className="relative inline-block text-secondary">
            ${product.priceRegular}
            <span className="absolute inset-x-0 top-11/26 h-[1px] bg-secondary mix-blend-color-dodge" />
          </span>
        </Typography>
      </div>
    : <Typography
        level="h3"
        className="pb-2 border-b border-elements"
      >
        ${product.priceRegular}
      </Typography>
    }
    <ProductCardSpecs
      screen={product.screen}
      capacity={product.capacity}
      ram={product.ram}
    />
    <div className="flex gap-2">
      <ButtonCart
        handleClick={handleSelectClick}
        isSelected={isSelected}
        className="flex-1 h-10"
        content="Add to cart"
      />
      <ButtonIcon
        className={'w-10 h-10 flex items-center justify-center'}
        isSelected={isLiked}
        handleClick={handleLikeClick}
        src={isLiked ? ICONS.HEART_FILLED : ICONS.HEART_EMPTY}
      />
    </div>
  </div>
);
