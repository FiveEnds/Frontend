import { useState } from 'react';
import { CartItem } from '../components/molecules/CartItem/CartItem';

export const Alexandr = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <CartItem
      image="/img/phones/apple-iphone-11/purple/00.webp"
      title="Apple iPhone 11 128GB Purple"
      price={1050 * quantity}
      quantity={quantity}
      productPath="/phones/apple-iphone-11-128gb-purple"
      onRemove={() => console.log('remove')}
      onQuantityChange={setQuantity}
    />
  );
};
