import { CatalogLayout, type CatalogLayoutProps } from './CatalogLayout';

type Props = Omit<CatalogLayoutProps, 'title'>;

export const PhoneLayout = (props: Props) => (
  <CatalogLayout
    {...props}
    title="Mobile phones"
  />
);
