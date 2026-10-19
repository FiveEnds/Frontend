import { useEffect, useMemo, useState } from 'react';
import { PromoCarousel } from '../components/organisms/Carousels/PromoCarousel/PromoCarousel';
import { BANNERS } from '../constants/banners';
import { ProductsCarousel } from '../components/organisms/Carousels/ProductsCarousel/ProductsCarousel';
import { SQUARE_BANNERS } from '../constants/squareBanners';
import { ShopByCategory } from '../components/organisms/ShopByCategory';
import { HomeLayout } from '../components/templates/HomeLayout';
import { useAppState } from '../store/store';
import { BREAKPOINTS } from '../constants/breakpoints';

export const HomePage: React.FC = () => {
  const phones = useAppState((state) => state.phones);
  const tablets = useAppState((state) => state.tablets);
  const accessories = useAppState((state) => state.accessories);

  const productsData = useMemo(() => {
    return [...phones, ...tablets, ...accessories];
  }, [phones, tablets, accessories]);

  const [carouselParams, setCarouselParams] = useState({
    slides: 4,
    height: 506,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < BREAKPOINTS.md) {
        setCarouselParams({
          slides: 1.4,
          height: 439,
        });
      } else if (width < BREAKPOINTS.lg) {
        setCarouselParams({
          slides: 2.5,
          height: 512,
        });
      } else {
        setCarouselParams({
          slides: 4,
          height: 506,
        });
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const newProducts = useMemo(() => {
    return [...productsData].sort((a, b) => b.year - a.year);
  }, [productsData]);

  const hotPriceProducts = useMemo(() => {
    return [...productsData]
      .filter(
        (p) =>
          p.priceRegular && p.priceDiscount && p.priceDiscount < p.priceRegular,
      )
      .sort(
        (a, b) =>
          b.priceRegular - b.priceDiscount - (a.priceRegular - a.priceDiscount),
      );
  }, [productsData]);

  return (
    <HomeLayout
      heroSlider={
        <PromoCarousel
          banners={BANNERS}
          squareBanners={SQUARE_BANNERS}
        />
      }
      brandNewCarousel={
        <ProductsCarousel
          title="Brand new models"
          products={newProducts}
          productCardHeight={carouselParams.height}
          displayedSlides={carouselParams.slides}
          hasDiscount={false}
        />
      }
      shopByCategory={
        <ShopByCategory
          categories={[
            {
              title: 'Mobile phones',
              image: '/img/banners/SquarePhones.png',
              count: phones.length,
              to: '/phones',
            },
            {
              title: 'Tablets',
              image: '/img/banners/SquareTablets.png',
              count: tablets.length,
              to: '/tablets',
            },
            {
              title: 'Accessories',
              image: '/img/accessories/apple-watch-se/gold/00.webp',
              count: accessories.length,
              to: '/accessories',
            },
          ]}
        />
      }
      hotPricesCarousel={
        <ProductsCarousel
          title="Hot prices"
          products={
            hotPriceProducts.length > 0 ? hotPriceProducts : productsData
          }
          productCardHeight={carouselParams.height}
          displayedSlides={carouselParams.slides}
        />
      }
    />
  );
};
