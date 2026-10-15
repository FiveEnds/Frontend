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

export type Products = {
  id: number;
  category: string;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  resolution?: string;
  processor?: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
  phoneId?: string;
  camera?: string;
  zoom?: string;
  cell?: string[];
};
