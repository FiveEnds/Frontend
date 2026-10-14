import { SPECIFICATIONS } from '../../../constants/specifications';
import type { Product } from '../../../types/Product';
import type { Spec } from '../../../types/Specifications';
import { AvailableColors } from '../../molecules/AvailableColors/AvailableColors';
import { ProductCardSpecs } from '../../molecules/ProductCardSpecs/ProductCardSpecs';
import { ProductPrice } from '../../molecules/ProductPrice/ProductPrice';
import { ProductSelectActions } from '../../molecules/ProductSelectActions/ProductSelectActions';
import { SelectCapacity } from '../../molecules/SelectCapacity/SelectCapacity';

type Props = {
  productColors: string[];
  handleColorSelect: () => void;
  selectedColor: string;
  availableCapacities: string[];
  selectedCapacity: string;
  handleCapacitySelect: () => void;
  currentPrice: number;
  oldPrice?: number;
  handleSelectClick: () => void;
  isSelected: boolean;
  isLiked: boolean;
  handleLikeClick: () => void;
  product: Product;
};

function getSpecifications(product: Product): Spec[] {
  return [
    [SPECIFICATIONS.SCREEN, product.screen],
    [SPECIFICATIONS.RESOLUTION, product.resolution],
    [SPECIFICATIONS.PROCESSOR, product.processor],
    [SPECIFICATIONS.RAM, product.ram],
  ];
}

export const ProductConfigurator: React.FC<Props> = ({
  productColors,
  handleColorSelect,
  selectedColor,
  availableCapacities,
  selectedCapacity,
  handleCapacitySelect,
  currentPrice,
  oldPrice = 0,
  handleLikeClick,
  handleSelectClick,
  isSelected,
  isLiked,
  product,
}) => (
  <>
    <AvailableColors
      colors={productColors}
      handleClick={handleColorSelect}
      isSelected={selectedColor}
      classNames="pb-6"
    />
    <div className="lg:w-[62.5%]">
      <div className="py-6 border-y border-elements">
        <SelectCapacity
          availableCapacities={availableCapacities}
          selectedCapacity={selectedCapacity}
          handleClick={handleCapacitySelect}
        />
      </div>
      <div className="py-8">
        <div className="pb-4">
          <ProductPrice
            currentPrice={currentPrice}
            oldPrice={oldPrice}
            currentPriceSize="h2"
          />
        </div>
        <ProductSelectActions
          handleLikeClick={handleLikeClick}
          handleSelectClick={handleSelectClick}
          isSelected={isSelected}
          isLiked={isLiked}
        />
      </div>
      <ProductCardSpecs specifications={getSpecifications(product)} />
    </div>
  </>
);
