import { useState } from 'react';
import { CartItem } from '../components/molecules/CartItem';
import { Icon } from '../components/atoms/Icon/Icon';
import { ICONS } from '../constants/icons';
import { Typography } from '../components/atoms/Typography/Typography';
import { Checkout } from '../components/molecules/Checkout/Checkout';

export const CartPage: React.FC = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <main
        className="
      grid grid-cols-1 gap-x-4 w-full mx-auto

      min-[1200px]:grid-cols-[repeat(24,32px)]
      min-[1200px]:w-fit

      min-[640px]:max-[1200px]:grid-cols-[repeat(12,minmax(0,1fr))]
      min-[640px]:max-[1200px]:px-6
      min-[640px]:max-[1200px]:gap-x-4

      min-[320px]:max-[640px]:grid-cols-[repeat(4,minmax(0,1fr))]
      min-[320px]:max-[640px]:px-4
      min-[320px]:max-[640px]:gap-x-4
      "
      >
        <section className="col-span-full grid grid-cols-subgrid">
          <button className="col-span-1 flex items-center whitespace-nowrap w-max mt-10">
            <Icon src={ICONS.ARROW.LEFT} />
            <Typography level="small">Back</Typography>
          </button>

          <Typography
            level="h1"
            className="col-span-full mt-4 mb-8"
          >
            Card
          </Typography>
          {/* <div>
              <p>Your cart is empty</p>
            </div> */}
          <div
            className="
          w-full flex flex-col gap-4
          min-[1200px]:col-span-16

          min-[640px]:max-[1200px]:col-span-12

          min-[320px]:max-[640px]:col-span-4
          "
          >
            <CartItem
              image="/img/phones/apple-iphone-11/purple/00.webp"
              title="Apple iPhone 11 128GB Purple"
              price={1050 * quantity}
              quantity={quantity}
              productPath="/phones/apple-iphone-11-128gb-purple"
              onRemove={() => console.log('remove')}
              onQuantityChange={setQuantity}
            />

            <CartItem
              image="/img/phones/apple-iphone-11/purple/00.webp"
              title="Apple iPhone 11 128GB Purple"
              price={1050 * quantity}
              quantity={quantity}
              productPath="/phones/apple-iphone-11-128gb-purple"
              onRemove={() => console.log('remove')}
              onQuantityChange={setQuantity}
            />
            <CartItem
              image="/img/phones/apple-iphone-11/purple/00.webp"
              title="Apple iPhone 11 128GB Purple"
              price={1050 * quantity}
              quantity={quantity}
              productPath="/phones/apple-iphone-11-128gb-purple"
              onRemove={() => console.log('remove')}
              onQuantityChange={setQuantity}
            />
          </div>
          <div
            className="
          min-[1200px]:col-span-8
          
          min-[640px]:max-[1200px]:col-span-12
          min-[640px]:max-[1200px]:mt-8

          min-[320px]:max-[640px]:col-span-4
          min-[320px]:max-[640px]:mt-8
          "
          >
            <Checkout />
          </div>
        </section>
      </main>
    </>
  );
};
