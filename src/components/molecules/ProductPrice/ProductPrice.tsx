import type { HeadingLevel } from '../../../types/HeadingLevel';
import { Typography } from '../../atoms/Typography/Typography';

type Props = {
  currentPrice: number;
  oldPrice?: number;
  currentPriceSize?: HeadingLevel;
};

export const ProductPrice: React.FC<Props> = ({
  currentPrice,
  oldPrice = 0,
  currentPriceSize = 'h3',
}) => (
  <>
    {oldPrice ?
      <div className="flex gap-2">
        <Typography level={currentPriceSize}>${currentPrice}</Typography>
        <Typography level="h3">
          <span className="relative inline-block text-secondary">
            ${oldPrice}
            <span className="absolute inset-x-0 top-11/26 h-[1px] bg-secondary mix-blend-color-dodge" />
          </span>
        </Typography>
      </div>
    : <Typography level={currentPriceSize}>${currentPrice}</Typography>}
  </>
);
