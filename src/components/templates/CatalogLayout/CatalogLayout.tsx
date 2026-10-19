import type { CatalogFilters, FilterOptions } from '../../../types/Catalog';
import type { Product } from '../../../types/Product';
import { Typography } from '../../atoms/Typography/Typography';
import { Breadcrumbs } from '../../molecules/BreadCrumbs/BreadCrumbs';
import { CatalogFilterBar } from '../../molecules/CatalogFilterBar/CatalogFilterBar';
import { Dropdown } from '../../molecules/Dropdown';
import { HeadingWithCount } from '../../molecules/HeadingWithCount';
import { Pagination } from '../../molecules/Pagination';
import { ProductCard } from '../../organisms/ProductCard/ProductCard';

const loadMoreButtonClass =
  'flex h-12 w-full max-w-[380px] items-center justify-center rounded-sm border border-elements bg-white text-primary transition-colors hover:border-primary dark:bg-surface-2-dark dark:text-white';

export type CatalogLayoutProps = {
  title: string;
  products: Product[];
  totalItems: number;
  sortOptions: string[];
  sortBy: string;
  onSortChange: (value: string) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  canLoadMore: boolean;
  onLoadMore: () => void;
  filters: CatalogFilters;
  filterOptions: FilterOptions;
  onFiltersChange: (filters: CatalogFilters) => void;
};

export const CatalogLayout = ({
  title,
  products,
  totalItems,
  sortOptions,
  sortBy,
  onSortChange,
  currentPage,
  totalPages,
  onPageChange,
  canLoadMore,
  onLoadMore,
  filters,
  filterOptions,
  onFiltersChange,
}: CatalogLayoutProps) => (
  <div className="mx-auto w-full max-w-300 px-4 pt-6 pb-20 md:px-6 lg:px-8">
    <Breadcrumbs />

    <div className="mt-6">
      <HeadingWithCount
        title={title}
        itemsCount={totalItems}
      />
    </div>

    <div className="mt-8 grid grid-cols-1 items-end gap-4 sm:grid-cols-2">
      <div className="w-full">
        <Dropdown
          label="Sort by"
          options={sortOptions}
          value={sortBy}
          onChange={onSortChange}
        />
      </div>

      <div className="w-full">
        <CatalogFilterBar
          filters={filters}
          filterOptions={filterOptions}
          onFiltersChange={onFiltersChange}
        />
      </div>
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

    {(canLoadMore || totalPages > 1) && (
      <div className="mt-5 flex flex-col items-center gap-5">
        {canLoadMore && (
          <button
            type="button"
            onClick={onLoadMore}
            className={loadMoreButtonClass}
          >
            <Typography level="button">Show more</Typography>
          </button>
        )}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    )}
  </div>
);
