import type { EmblaOptionsType } from 'embla-carousel';
import { Typography } from '../../atoms/Typography/Typography';
// Change this line to import your local component file (adjust the relative path if needed):
import React from 'react';
import './css/base.css';
import './css/sandbox.css';
import './css/embla.css';
import { ButtonIcon } from '../../atoms/Buttons/ButtonIcon';
import { Icon } from '../../atoms/Icon/Icon';
import { ICONS } from '../../../constants/icons';
import { useAutoplay } from './js/EmblaCarouselAutoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { usePrevNextButtons } from './js/EmblaCarouselArrowButtons';
import type { Product } from '../../../types/Product';
import { ProductCard } from '../ProductCard/ProductCard';

type Props = {
  title: string;
  displayedSlides?: number;
  products: Product[];
  productCardHeight: number;
};

const OPTIONS: EmblaOptionsType = { loop: false, align: 'start' };

export const ProductsCarousel: React.FC<Props> = ({
  title,
  displayedSlides = 1,
  products,
  productCardHeight,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
    Autoplay({ delay: 3000 }),
  ]);

  const { onAutoplayButtonClick } = useAutoplay(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <>
      <div className="flex justify-between pb-6">
        <Typography level="h2">{title}</Typography>
        <div className="flex gap-4">
          <ButtonIcon
            className="w-8 h-8 flex justify-center items-center"
            handleClick={() => onAutoplayButtonClick(onPrevButtonClick)}
            isDisabled={prevBtnDisabled}
          >
            <Icon
              src={ICONS.ARROW.LEFT}
              isDisabled={prevBtnDisabled}
            />
          </ButtonIcon>
          <ButtonIcon
            className="w-8 h-8 flex justify-center items-center"
            handleClick={() => onAutoplayButtonClick(onNextButtonClick)}
            isDisabled={nextBtnDisabled}
          >
            <Icon
              src={ICONS.ARROW.RIGHT}
              isDisabled={nextBtnDisabled}
            />
          </ButtonIcon>
        </div>
      </div>
      <div
        className="embla"
        style={
          { '--slide-size': `${100 / displayedSlides}%` } as React.CSSProperties
        }
      >
        <div
          className="embla__viewport"
          ref={emblaRef}
        >
          <div className="embla__container">
            {products.map((product) => (
              <div
                className="embla__slide"
                key={product.id}
              >
                <ProductCard
                  product={product}
                  isSelected={false}
                  handleClick={() => console.log('Click')}
                  className={`w-full h-[${productCardHeight}px]`}
                  isLiked={true}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
