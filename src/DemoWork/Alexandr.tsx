import { useEffect, useState } from 'react';
import { CartItem } from '../components/molecules/CartItem/CartItem';
import type { Phone } from '../types/api';
import { getPhones } from '../services/api';
import { Dropdown } from '../components/molecules/Dropdown';
import { HeadingWithCount } from '../components/molecules/HeadingWithCount/HeadingWithCount';
import { ShopByCategory } from '../components/organisms/ShopByCategory';

const options = ['Newest', 'Alphabetically', 'Cheapest', '1', '2', '3'];

export const Alexandr = () => {
  const [quantity, setQuantity] = useState(1);
  const [sortBy, setSortBy] = useState(options[0]);
  const [phones, setPhones] = useState<Phone[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getPhones()
      .then(setPhones)
      .catch((reason: unknown) => {
        setError(
          reason instanceof Error ?
            reason.message
          : 'Не удалось загрузить телефоны',
        );
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

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

      <section>
        <p>Phones: {phones.length}</p>
        <ul>
          {phones.slice(0, 2).map((phone) => (
            <li key={phone.id}>
              {phone.name} — ${phone.priceDiscount}
            </li>
          ))}
        </ul>
      </section>

      <div className="max-w-xs space-y-4">
        <Dropdown
          label="Sort by"
          options={options}
          value={sortBy}
          onChange={setSortBy}
        />
      </div>

      <HeadingWithCount
        title="Mobile phones"
        itemsCount={phones.length}
        titleLevel="h1"
        countLabel="item"
      />

      <ShopByCategory
        categories={[
          {
            title: 'Mobile phones',
            image: '/img/banners/SquarePhones.png',
            count: 95,
            to: '/phones',
          },
          {
            title: 'Tablets',
            image: '/img/banners/SquareTablets.png',
            count: 24,
            to: '/tablets',
          },
          {
            title: 'Accessories',
            image: '/img/accessories/apple-watch-se/gold/00.webp',
            count: 100,
            to: '/accessories',
          },
        ]}
      />
    </>
  );
};
