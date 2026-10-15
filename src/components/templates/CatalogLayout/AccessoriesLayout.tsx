import { CatalogLayout, type CatalogLayoutProps } from './CatalogLayout';

type Props = Omit<CatalogLayoutProps, 'title'>;

export const AccessoriesLayout = (props: Props) => (
  <CatalogLayout
    {...props}
    title="Accessories"
  />
);
