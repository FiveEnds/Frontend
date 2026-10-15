import { useNavigate, useParams } from 'react-router-dom';
import { useAppActions, useAppState } from '../store/store';
import type { Category } from '../types/category';
import type { Product } from '../types/Product';
import { useEffect } from 'react';
// import { ProductItemLayout } from '../components/templates/ProductItemLayout/ProductItemLayout';
// import { Breadcrumbs } from '../components/molecules/BreadCrumbs/BreadCrumbs';
// import { ProductItemTopBar } from '../components/molecules/ProductItemTopBar/ProductItemTopBar';

type Props = {
  category: Category;
};

export const ProductItemPage: React.FC<Props> = ({ category }) => {
  const { setProductItem } = useAppActions();
  const { productId } = useParams();
  const navigate = useNavigate();

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

  console.log(product);

  if (!product) {
    return <></>;
  }

  return (
    <></>
    // <ProductItemLayout
    //   pageProductDetails={<ProductItemTopBar title={product.name} />}
    // />
  );
};
