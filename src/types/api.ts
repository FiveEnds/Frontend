import type { Category } from './category';
import type { Product } from './Product';

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

export type Phone = Product & { category: 'phones' };
export type Tablet = Product & { category: 'tablets' };
export type Accessory = Product & { category: 'accessories' };
