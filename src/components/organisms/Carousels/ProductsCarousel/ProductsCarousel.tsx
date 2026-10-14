import type { EmblaOptionsType } from 'embla-carousel';
import { Typography } from '../../../atoms/Typography/Typography';
// Change this line to import your local component file (adjust the relative path if needed):
import React, { useState } from 'react';
import '../css/base.css';
import '../css/sandbox.css';
import '../css/embla.css';
import { ButtonIcon } from '../../../atoms/Buttons/ButtonIcon';
import { ICONS } from '../../../../constants/icons';
import { useAutoplay } from '../js/EmblaCarouselAutoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { usePrevNextButtons } from '../js/EmblaCarouselArrowButtons';
import type { Product } from '../../../../types/Product';
import { ProductCard } from '../../ProductCard/ProductCard';

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
    Autoplay({ playOnInit: false }),
  ]);

  const { onAutoplayButtonClick } = useAutoplay(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const [like, setLike] = useState(false);
  const [select, setSelect] = useState(false);

  return (
    <>
      <div className="flex justify-between pb-6">
        <Typography level="h2">{title}</Typography>
        <div className="flex gap-4">
          <ButtonIcon
            className="w-8 h-8"
            handleClick={() => onAutoplayButtonClick(onPrevButtonClick)}
            isDisabled={prevBtnDisabled}
            src={ICONS.ARROW.LEFT}
          />
          <ButtonIcon
            className="w-8 h-8"
            handleClick={() => onAutoplayButtonClick(onNextButtonClick)}
            isDisabled={nextBtnDisabled}
            src={ICONS.ARROW.RIGHT}
          />
        </div>
      </div>
      <div
        className="embla -mr-4 md:-mr-6 lg:-mr-4"
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
                  isSelected={select}
                  handleSelectClick={() => setSelect((current) => !current)}
                  handleLikeClick={() => setLike((current) => !current)}
                  className={'w-full'}
                  cardHeight={productCardHeight}
                  isLiked={like}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
