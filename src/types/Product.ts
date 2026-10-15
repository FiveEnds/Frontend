import type { ProductDescriptionBlock } from './api';
import type { Category } from './category';

export type Product = {
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
