import { useNavigate, useParams } from 'react-router-dom';
import { useAppActions, useAppState } from '../store/store';
import type { Category } from '../types/category';
import type { Product } from '../types/Product';
import { useEffect } from 'react';
import { ProductItemLayout } from '../components/templates/ProductItemLayout/ProductItemLayout';
import { ProductItemTopBar } from '../components/molecules/ProductItemTopBar/ProductItemTopBar';
import { PhotoGallery } from '../components/molecules/PhotoGallery/PhotoGallery';
import { ProductConfigurator } from '../components/organisms/ProductConfigurator/ProductConfigurator';

type Props = {
  category: Category;
};

export const ProductItemPage: React.FC<Props> = ({ category }) => {
  const { setProductItem, addItemToCart } = useAppActions();
  const { productId } = useParams();
  const navigate = useNavigate();

  const products = useAppState((state) => state[category]);
  console.log(products);

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
      // navigate('/*', { replace: true });
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
    console.log(option);

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
    />
  );
};
