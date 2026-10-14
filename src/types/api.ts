export type Category = 'phones' | 'tablets' | 'accessories';

export type ProductSummary = {
  id: number;
  category: Category;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
};

export type ProductDescriptionBlock = {
  title: string;
  text: string[];
};

export type ProductDetails = {
  id: string;
  category: Category;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description: ProductDescriptionBlock[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera?: string;
  zoom?: string;
  cell: string[];
};

export type Phone = ProductDetails & { category: 'phones' };
export type Tablet = ProductDetails & { category: 'tablets' };
export type Accessory = ProductDetails & { category: 'accessories' };
