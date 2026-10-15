import { ProductCard } from '../components/organisms/ProductCard/ProductCard';
import type { Product } from '../types/Product';

const sampleRecommendedProduct: Product = {
  id: 'apple-iphone-13-mini-256gb-pink',
  category: 'phones',
  namespaceId: 'apple-iphone-13-mini',
  name: 'Apple iPhone 13 Mini 256GB Pink',
  capacityAvailable: ['64GB', '128GB', '256GB'],
  capacity: '256GB',
  priceRegular: 1180,
  priceDiscount: 1100,
  colorsAvailable: ['midnight', 'white', 'blue', 'pink'],
  color: 'pink',
  images: [
    'img/phones/apple-iphone-13-mini/pink/00.webp',
    'img/phones/apple-iphone-13-mini/pink/01.webp',
    'img/phones/apple-iphone-13-mini/pink/02.webp',
    'img/phones/apple-iphone-13-mini/pink/03.webp',
  ],
  description: [
    {
      title: 'Your new superpower.',
      text: [
        'A15 Bionic, the fastest chip ever in a smartphone. Super Retina XDR display with ProMotion. Durable Ceramic Shield with 4x better drop performance. New Night mode on all cameras. It’s the ultimate iPhone, powered by the ultimate chip.',
      ],
    },
    {
      title: 'A15 Bionic chip. Super power. Mini sized.',
      text: [
        'The A15 Bionic chip is the fastest chip ever in a smartphone. It powers everything from photography to gaming. And the incredible Machine Learning accelerators allow you to experience augmented reality like never before.',
      ],
    },
    {
      title: 'Amazing Camera. No Pro Required.',
      text: [
        'iPhone 13 Mini takes stunning photos and videos with its advanced dual-camera system, with a new Night mode on all cameras. And Photographic Styles personalizes your photos in the moment for a beautiful look.',
      ],
    },
  ],
  screen: "5.4' Super Retina XDR",
  resolution: '2532x1170',
  processor: 'Apple A15 Bionic',
  ram: '4GB',
  camera: '12 Mp + 12 Mp',
  zoom: 'Optical, 2x; Digital, 5x',
  cell: ['GSM', 'CDMA', 'HSPA', 'EVDO', 'LTE', '5G'],
  year: 2020,
};

export const FavouritesPage: React.FC = () => {
  return (
    <>
      <main>
        <section>
          {/*favorites*/}
          <div>
            <a></a> {/*ССилка з картинки на дім*/}
            {/* <img></img>  стрілка*/}
            <span></span> {/*Hана категорія*/}
          </div>
          <div>
            <h1>Favourites</h1>
            <p>0 items</p> {/*Думаю або пусто або те що було вибрано*/}
          </div>
          <p>Your favourites is empty</p>{' '}
          <div>
            <ProductCard
              product={sampleRecommendedProduct}
              cardHeight={506}
              isLiked={false}
              isSelected={false}
              handleLikeClick={() => {
                console.log('Like clicked');
              }}
              handleSelectClick={() => {
                console.log('Cart clicked');
              }}
            />
          </div>
        </section>
      </main>
    </>
  );
};
