import { CartItem } from '../components/molecules/CartItem';
import { Icon } from '../components/atoms/Icon/Icon';
import { ICONS } from '../constants/icons';
import { Typography } from '../components/atoms/Typography/Typography';
import { Checkout } from '../components/molecules/Checkout/Checkout';
import { useAppState, useAppActions } from '../store/store';

import type { Phone } from '../types/api';

const testPhone: Phone = {
  id: 'apple-iphone-11-128gb-black',
  category: 'phones',
  namespaceId: 'apple-iphone-11',
  name: 'Apple iPhone 11 128GB Black',
  capacityAvailable: ['64GB', '128GB', '256GB'],
  capacity: '128GB',
  priceRegular: 1100,
  priceDiscount: 1050,
  colorsAvailable: ['black', 'green', 'yellow'],
  color: 'black',
  images: ['/img/phones/apple-iphone-11/black/00.webp'],
  description: [],
  screen: "6.1' IPS",
  resolution: '1792x828',
  processor: 'Apple A13 Bionic',
  ram: '4GB',
  camera: '12 Mp + 12 Mp + 12 Mp',
  zoom: 'Digital, 5x',
  cell: ['LTE'],
  year: 2015,
};

const testPhone2: Phone = {
  id: 'apple-iphone-11-128gb-green',
  category: 'phones',
  namespaceId: 'apple-iphone-11',
  name: 'Apple iPhone 11 128GB Green',
  capacityAvailable: ['64GB', '128GB', '256GB'],
  capacity: '128GB',
  priceRegular: 1100,
  priceDiscount: 1050,
  colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
  color: 'green',
  images: [
    'img/phones/apple-iphone-11/green/00.webp',
    'img/phones/apple-iphone-11/green/01.webp',
    'img/phones/apple-iphone-11/green/02.webp',
    'img/phones/apple-iphone-11/green/03.webp',
    'img/phones/apple-iphone-11/green/04.webp',
  ],
  description: [
    {
      title: 'And then there was Pro',
      text: [
        'A transformative triple-camera system that adds tons of capability without complexity.',
        'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
      ],
    },
    {
      title: 'Camera',
      text: [
        'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
      ],
    },
    {
      title:
        'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
      text: [
        'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
      ],
    },
  ],
  screen: "6.1' IPS",
  resolution: '1792x828',
  processor: 'Apple A13 Bionic',
  ram: '4GB',
  camera: '12 Mp + 12 Mp + 12MP',
  zoom: 'Digital, 5x',
  cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  year: 2015,
};

export const CartPage: React.FC = () => {
  const localCart = useAppState((state) => state.cart);

  console.log('Current cart:', localCart);
  const { addItemToCart, removeItemFromCart, decreaseAmountFromCart } =
    useAppActions();

  const cartTotal = Object.values(localCart).reduce((total, item) => {
    const currentItemPrice =
      item.product.priceDiscount || item.product.priceRegular;

    const priceOfMany = currentItemPrice * item.amountAdded;

    return priceOfMany + total;
  }, 0);

  const cartCount = Object.values(localCart).reduce(
    (count, item) => item.amountAdded + count,
    0,
  );

  return (
    <>
      <button
        className="align-center h-10 w-40 bg-primary text-white"
        onClick={() => {
          console.log('Button clicked');
          addItemToCart(testPhone);
          console.log('Action called');
        }}
      >
        add_item_1
      </button>
      <button
        className="align-center h-10 w-40 bg-primary text-white"
        onClick={() => {
          console.log('Button clicked');
          addItemToCart(testPhone2);
          console.log('Action called');
        }}
      >
        add_item_2
      </button>

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
          <button
            className="col-span-1 flex items-center whitespace-nowrap w-max mt-10"
            onClick={() => console.log(Object.values(localCart))}
          >
            <Icon src={ICONS.ARROW.LEFT} />
            <Typography level="small">Back</Typography>
          </button>

          <Typography
            level="h1"
            className="col-span-full mt-4 mb-8"
          >
            Card
          </Typography>
          {Object.values(localCart).length === 0 ?
            <div
              className="
              w-full flex justify-center items-center relative
              min-[1200px]:col-span-16
              min-[1200px]:mb-20

              min-[640px]:max-[1200px]:col-span-12

              min-[320px]:max-[640px]:col-span-4"
            >
              <Typography
                level="h2"
                className="text-center"
              >
                Oops! <br /> You haven't add anything to your cart yet.
              </Typography>
              <img
                src="/img/easter-egg.png"
                className="
              absolute rotate-12
              min-[1200px]:w-30
              min-[1200px]:bottom-20
              min-[1200px]:right-36
              
              min-[640px]:max-[1200px]:w-20
              min-[640px]:max-[1200px]:bottom-15
              min-[640px]:max-[1200px]:right-32
              
              min-[320px]:max-[640px]:w-15
              min-[320px]:max-[640px]:bottom-15
              min-[320px]:max-[640px]:right-16"
              />
            </div>
          : <div
              className="
              w-full flex flex-col gap-4
              min-[1200px]:col-span-16
              min-[1200px]:mb-20

              min-[640px]:max-[1200px]:col-span-12

              min-[320px]:max-[640px]:col-span-4
            "
            >
              {Object.values(localCart).map((item) => (
                <CartItem
                  key={item.product.id}
                  image={item.product.images[0]}
                  title={item.product.name}
                  price={
                    (item.product.priceDiscount || item.product.priceRegular) *
                    item.amountAdded
                  }
                  quantity={item.amountAdded}
                  productPath={`/${item.product.category}/${item.product.id}`}
                  onRemove={() => removeItemFromCart(item.product.id)}
                  onQuantityChange={(newQuantity) => {
                    if (newQuantity > item.amountAdded) {
                      addItemToCart(item.product);
                    } else if (newQuantity < item.amountAdded) {
                      decreaseAmountFromCart(item.product.id);
                    }
                  }}
                />
              ))}
            </div>
          }

          <div
            className="
          min-[1200px]:col-span-8
          min-[1200px]:mb-20
          
          min-[640px]:max-[1200px]:col-span-12
          min-[640px]:max-[1200px]:mt-8
          min-[640px]:max-[1200px]:mb-16

          min-[320px]:max-[640px]:col-span-4
          min-[320px]:max-[640px]:mt-8
          min-[320px]:max-[640px]:mb-14
          "
          >
            <Checkout
              sum={cartTotal}
              amount={cartCount}
            />
          </div>
        </section>
      </main>
    </>
  );
};
