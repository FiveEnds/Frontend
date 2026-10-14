import type { Accessory, Phone, ProductSummary, Tablet } from '../types/api';

const API_URL = './api';

function load<T>(file: string): Promise<T> {
  return fetch(`${API_URL}/${file}.json`).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to load ${file}.json: ${response.status}`);
    }

    return response.json() as Promise<T>;
  });
}

export const getProducts = () => load<ProductSummary[]>('products');
export const getPhones = () => load<Phone[]>('phones');
export const getTablets = () => load<Tablet[]>('tablets');
export const getAccessories = () => load<Accessory[]>('accessories');
