import { useNavigate, useParams } from 'react-router-dom';
import { useAppActions, useAppState } from '../store/store';
import type { Category } from '../types/category';
import type { Product } from '../types/Product';
import { useEffect, useState } from 'react';
import { ProductItemLayout } from '../components/templates/ProductItemLayout/ProductItemLayout';
import { ProductItemTopBar } from '../components/molecules/ProductItemTopBar/ProductItemTopBar';
import { PhotoGallery } from '../components/molecules/PhotoGallery/PhotoGallery';
import { ProductConfigurator } from '../components/organisms/ProductConfigurator/ProductConfigurator';
import { ProductAbout } from '../components/molecules/ProductAbout/ProductAbout';
import { PhoneTechSpecs } from '../components/organisms/PhoneTechSpecs/PhoneTechSpecs';
import { PhoneSpecsTable } from '../components/molecules/PhoneSpecsTable/PhoneSpecsTable';
import { ProductsCarousel } from '../components/organisms/Carousels/ProductsCarousel/ProductsCarousel';
import { shuffle } from '../utils/shuffle';

type Props = {
  category: Category;
};

function getProducts(products: Product[], productId: string) {
  const splitId = productId.split('-');
  const sliceProductId = splitId.slice(0, splitId.length - 2).join('-');

  console.log(products);

  return shuffle(
    products.filter((product) => {
      const splitProductId = product.id.split('-');
      const sliceCurrentProductId = splitProductId
        .slice(0, splitProductId.length - 2)
        .join('-');

      return sliceProductId !== sliceCurrentProductId;
    }),
  );
}

export const ProductItemPage: React.FC<Props> = ({ category }) => {
  const [carouselParams, setCarouselParams] = useState({
    slides: 4,
    height: 506,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCarouselParams({
          slides: 1.3,
          height: 440,
        });
      } else if (width < 1200) {
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

  const { setProductItem, addItemToCart } = useAppActions();
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [productId]);

  const products = useAppState((state) => state[category]);

  useEffect(() => {
    if (products.length === 0) {
      return;
    }

    const product = products.find(
      (product: Product) => product.id === productId,
    );

    if (product) {
      setProductItem(product);
    } else {
      navigate('/*', { replace: true });
    }
  }, [productId, products, setProductItem, navigate]);

  const product = useAppState((state) => state.selectedProduct);
  const cart = useAppState((state) => state.cart);

  if (!product) {
    return <></>;
  }

  const handleAddItem = (isAdded: boolean) => {
    if (isAdded) {
      return;
    }

    addItemToCart(product);
  };

  const itemInCart = Object.hasOwn(cart, product.id);

  const handleCapacitySelect = (
    selectedValue: string,
    option: 'color' | 'capacity',
  ) => {
    const newLink = productId
      ?.split('-')
      .map((part) => {
        console.log('here', part.toLowerCase(), product.capacity.toLowerCase());

        if (
          option === 'capacity' &&
          part.toLowerCase() === product.capacity.toLowerCase()
        ) {
          return selectedValue.toLowerCase();
        }

        if (
          option === 'color' &&
          part.toLowerCase() === product.color.toLowerCase()
        ) {
          return selectedValue.toLowerCase();
        }

        return part;
      })
      .join('-');

    navigate(`/${product.category}/${newLink}`, { replace: true });
  };

  return (
    <ProductItemLayout
      pageProductDetails={<ProductItemTopBar title={product.name} />}
      productGallery={
        <PhotoGallery
          product={product}
          key={product.id}
        />
      }
      productConfigurator={
        <ProductConfigurator
          product={product}
          handleColorSelect={handleCapacitySelect}
          handleCapacitySelect={handleCapacitySelect}
          handleAddToCart={() => handleAddItem(itemInCart)}
          handleLikeClick={() => {}}
          isLiked={false}
          isSelected={itemInCart}
        />
      }
      productAbout={<ProductAbout description={product.description} />}
      techSpecs={
        <PhoneTechSpecs>
          <PhoneSpecsTable specs={product} />
        </PhoneTechSpecs>
      }
      productsCarousel={
        <ProductsCarousel
          title="You may also like"
          products={getProducts(products, product.id) as Product[]}
          productCardHeight={carouselParams.height}
          displayedSlides={carouselParams.slides}
        />
      }
    />
  );
};
