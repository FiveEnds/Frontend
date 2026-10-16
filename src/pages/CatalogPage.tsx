import { useMemo, useState } from 'react';

import { CatalogLayout } from '../components/templates/CatalogLayout/CatalogLayout';
import { useAppState } from '../store/store';
import type { Category } from '../types/category';

const sortOptions = ['Newest', 'Price low', 'Price high'];
const itemsOptions = ['4', '8', '16', 'All'];

const categoryTitles: Record<Category, string> = {
  phones: 'Mobile phones',
  tablets: 'Tablets',
  accessories: 'Accessories',
};

type Props = {
  category: Category;
};

export const CatalogPage: React.FC<Props> = ({ category }) => {
  const products = useAppState((state) => state[category]);

  const [sortBy, setSortBy] = useState(sortOptions[0]);
  const [itemsPerPage, setItemsPerPage] = useState('16');
  const [pagesByCategory, setPagesByCategory] = useState<
    Partial<Record<Category, number>>
  >({});

  const currentPage = pagesByCategory[category] ?? 1;

  const resetPage = () => {
    setPagesByCategory((pages) => ({ ...pages, [category]: 1 }));
  };

  const sortedProducts = useMemo(() => {
    return [...products].sort((first, second) => {
      switch (sortBy) {
        case 'Price low':
          return first.priceDiscount - second.priceDiscount;
        case 'Price high':
          return second.priceDiscount - first.priceDiscount;
        case 'Newest':
          return second.year - first.year;
        default:
          return 0;
      }
    });
  }, [products, sortBy]);

  const pageSize =
    itemsPerPage === 'All' ?
      Math.max(products.length, 1)
    : Number(itemsPerPage);
  const totalPages = Math.ceil(products.length / pageSize);
  const visibleProducts = sortedProducts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  const handleSortChange = (value: string) => {
    setSortBy(value);
    resetPage();
  };

  const handleItemsPerPageChange = (value: string) => {
    setItemsPerPage(value);
    resetPage();
  };

  const handlePageChange = (page: number) => {
    setPagesByCategory((pages) => ({ ...pages, [category]: page }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <CatalogLayout
      title={categoryTitles[category]}
      products={visibleProducts}
      totalItems={products.length}
      sortOptions={sortOptions}
      sortBy={sortBy}
      onSortChange={handleSortChange}
      itemsOptions={itemsOptions}
      itemsPerPage={itemsPerPage}
      onItemsPerPageChange={handleItemsPerPageChange}
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
  );
};
