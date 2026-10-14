export type Product = {
  id: string;
  images: string[];
  namespaceId: string;
  name: string;
  priceRegular: number;
  priceDiscount?: number;
  screen: string;
  capacity: string;
  ram: string;
  resolution: string;
  processor: string;
  [key: string]: unknown;
};
