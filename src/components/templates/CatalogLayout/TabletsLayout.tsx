import { CatalogLayout, type CatalogLayoutProps } from './CatalogLayout';

type Props = Omit<CatalogLayoutProps, 'title'>;

export const TabletsLayout = (props: Props) => (
  <CatalogLayout
    {...props}
    title="Tablets"
  />
);
