import { useEffect, useMemo, useState } from 'react';
import { PromoCarousel } from '../components/organisms/Carousels/PromoCarousel/PromoCarousel';
import { BANNERS } from '../constants/banners';
import { ProductsCarousel } from '../components/organisms/Carousels/ProductsCarousel/ProductsCarousel';
import { SQUARE_BANNERS } from '../constants/squareBanners';
import { ShopByCategory } from '../components/organisms/ShopByCategory';
import { HomeLayout } from '../components/templates/HomeLayout';
import productsDataRaw from '../../public/api/products.json';
import type { Products } from '../types/Product';

const productsData: Products[] = productsDataRaw as Products[];
{
  /*Підготовка для завантаження з сайту  
  const [productsData, setProductsData] = useState<Products[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setErrorMessage('');
    getProducts()
      .then(setProductsData)
      .catch(() => setErrorMessage('Unable to load products'))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => setError(''), 3000);

      return () => clearTimeout(timeout);
    }
  }, [error]);

   */
}

export const HomePage: React.FC = () => {
  const [carouselParams, setCarouselParams] = useState({
    slides: 4,
    height: 506,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCarouselParams({
          slides: 1,
          height: 400,
        });
      } else if (width < 1200) {
        setCarouselParams({
          slides: 2.5,
          height: 460,
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
  }, []);

  const hotPriceProducts = useMemo(() => {
    return [...productsData]
      .filter((p) => p.fullPrice && p.price && p.price < p.fullPrice)
      .sort((a, b) => b.fullPrice - b.price - (a.fullPrice - a.price));
  }, []);

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
              count: 95,
              to: '/phones',
            },
            {
              title: 'Tablets',
              image: '/img/banners/SquareTablets.png',
              count: 24,
              to: '/tablets',
            },
            {
              title: 'Accessories',
              image: '/img/accessories/apple-watch-se/gold/00.webp',
              count: 100,
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
