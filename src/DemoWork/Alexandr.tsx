import { useState } from 'react';
import { CartItem } from '../components/molecules/CartItem/CartItem';
import { Dropdown } from '../components/molecules/Dropdown';

const options = ['Newest', 'Alphabetically', 'Cheapest', '1', '2', '3'];

export const Alexandr = () => {
  const [quantity, setQuantity] = useState(1);
  const [sortBy, setSortBy] = useState(options[0]);

  return (
    <>
      <CartItem
        image="/img/phones/apple-iphone-11/purple/00.webp"
        title="Apple iPhone 11 128GB Purple"
        price={1050 * quantity}
        quantity={quantity}
        productPath="/phones/apple-iphone-11-128gb-purple"
        onRemove={() => console.log('remove')}
        onQuantityChange={setQuantity}
      />
      <div className="max-w-xs space-y-4">
        <Dropdown
          label="Sort by"
          options={options}
          value={sortBy}
          onChange={setSortBy}
        />
      </div>
    </>
  );
};
