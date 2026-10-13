/* eslint-disable react-hooks/set-state-in-effect */
import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useAutoplay } from '../js/EmblaCarouselAutoplay';
import { usePrevNextButtons } from '../js/EmblaCarouselArrowButtons';
import { Typography } from '../../../atoms/Typography/Typography';
import { ButtonIcon } from '../../../atoms/Buttons/ButtonIcon';
import { ICONS } from '../../../../constants/icons';
import '../css/base.css';
import '../css/sandbox.css';
import '../css/embla.css';
import { useCallback, useEffect, useState } from 'react';

const OPTIONS: EmblaOptionsType = { loop: true, align: 'start' };

type Props = {
  banners: string[];
  squareBanners: string[];
};

export const PromoCarousel: React.FC<Props> = ({ banners, squareBanners }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
    Autoplay({ playOnInit: false }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const { onAutoplayButtonClick } = useAutoplay(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      onAutoplayButtonClick(() => emblaApi.scrollTo(index));
    },
    [emblaApi, onAutoplayButtonClick],
  );

  const onInit = useCallback((api: EmblaCarouselType) => {
    setScrollSnaps(api.scrollSnapList());
  }, []);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);

    emblaApi.on('init', onInit);
    emblaApi.on('init', onSelect);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('init', onInit);
      emblaApi.off('init', onSelect);
      emblaApi.off('reInit', onInit);
      emblaApi.off('reInit', onSelect);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  return (
    <>
      <Typography
        level="h1"
        className="pb-8"
      >
        Welcome to Nice Gadgets store!
      </Typography>
      <div className="grid grid-cols-[auto_1fr_auto] md:gap-[19px] lg:gap-[16px]">
        <ButtonIcon
          className="w-8 h-full hidden md:block"
          handleClick={() => onAutoplayButtonClick(onPrevButtonClick)}
          isDisabled={prevBtnDisabled}
          src={ICONS.ARROW.LEFT}
        />
        <div
          className="embla flex-1 min-w-0"
          style={
            {
              '--slide-spacing': '0px',
            } as React.CSSProperties
          }
        >
          <div
            className="embla__viewport"
            ref={emblaRef}
          >
            <div className="embla__container">
              {banners.map((banner, index) => (
                <div
                  className="embla__slide"
                  key={banner}
                >
                  <img
                    className="w-full aspect-[2.6/1] object-cover hidden md:block"
                    src={banner}
                    alt={banner.split('.')[0]}
                  />

                  <img
                    className="w-full aspect-square object-cover block md:hidden"
                    src={squareBanners[index]}
                    alt={squareBanners[index].split('.')[0]}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <ButtonIcon
          className="w-8 h-full hidden md:block"
          handleClick={() => onAutoplayButtonClick(onNextButtonClick)}
          isDisabled={nextBtnDisabled}
          src={ICONS.ARROW.RIGHT}
        />
      </div>
      <div className="flex justify-center items-center gap-2 mt-4">
        {scrollSnaps.map((_, index) => (
          <div className="w-6 h-6 justify-center items-center md:flex hidden">
            <button
              key={index}
              type="button"
              onClick={() => onDotButtonClick(index)}
              className={`h-1 transition-all duration-300 ${
                index === selectedIndex ?
                  'w-[14px] bg-primary'
                : 'w-[14px] bg-elements hover:bg-secondary'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </>
  );
};
