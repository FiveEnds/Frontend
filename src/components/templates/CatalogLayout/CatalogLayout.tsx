import type { Product } from '../../../types/Product';
import { Breadcrumbs } from '../../molecules/BreadCrumbs/BreadCrumbs';
import { Dropdown } from '../../molecules/Dropdown';
import { HeadingWithCount } from '../../molecules/HeadingWithCount';
import { Pagination } from '../../molecules/Pagination';
import { ProductCard } from '../../organisms/ProductCard/ProductCard';

export type CatalogLayoutProps = {
  title: string;
  products: Product[];
  totalItems: number;
  sortOptions: string[];
  sortBy: string;
  onSortChange: (value: string) => void;
  itemsOptions: string[];
  itemsPerPage: string;
  onItemsPerPageChange: (value: string) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export const CatalogLayout = ({
  title,
  products,
  totalItems,
  sortOptions,
  sortBy,
  onSortChange,
  itemsOptions,
  itemsPerPage,
  onItemsPerPageChange,
  currentPage,
  totalPages,
  onPageChange,
}: CatalogLayoutProps) => (
  <div className="mx-auto w-full max-w-300 px-4 pt-6 pb-20 md:px-6 lg:px-8">
    <Breadcrumbs />

    <div className="mt-6">
      <HeadingWithCount
        title={title}
        itemsCount={totalItems}
      />
    </div>

    <div className="mt-8 grid max-w-[320px] grid-cols-2 gap-4">
      <Dropdown
        label="Sort by"
        options={sortOptions}
        value={sortBy}
        onChange={onSortChange}
      />
      <Dropdown
        label="Items on page"
        options={itemsOptions}
        value={itemsPerPage}
        onChange={onItemsPerPageChange}
      />
    </div>

    <section
      aria-label={title}
      className="mt-6 grid grid-cols-4 gap-x-4 gap-y-10 md:grid-cols-12 lg:grid-cols-24"
    >
      {products.map((product) => (
        <div
          key={product.id}
          className="col-span-4 min-w-0 sm:col-span-2 md:col-span-6 em:col-span-4 lg:col-span-6"
        >
          <ProductCard
            className="h-110 md:h-126.5"
            product={product}
          />
        </div>
      ))}
    </section>

    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={onPageChange}
    />
  </div>
);
