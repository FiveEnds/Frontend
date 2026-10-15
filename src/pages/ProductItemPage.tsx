import { useAppState } from '../store/store';
import type { Category } from '../types/category';

type Props = {
  category: Category;
};

export const ProductItemPage: React.FC<Props> = ({ category }) => {
  // const { setProductItem } = useAppActions();

  const products = useAppState((state) => state[category]);

  console.log(products);

  // return <ProductItemPage />;
  return <></>;
};
