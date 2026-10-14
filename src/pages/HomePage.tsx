import { useEffect, useMemo, useState } from 'react';
import { Header } from '../components/organisms/Header/Header';
import { PromoCarousel } from '../components/organisms/Carousels/PromoCarousel/PromoCarousel';
import { BANNERS } from '../constants/banners';
import { ProductsCarousel } from '../components/organisms/Carousels/ProductsCarousel/ProductsCarousel';
import { Footer } from '../components/organisms/Footer/Footer';
import { SQUARE_BANNERS } from '../constants/squareBanners';

const productsData = [
  {
    id: 'apple-iphone-11-128gb-black',
    namespaceId: 'apple-iphone-11',
    name: 'Apple iPhone 11 128GB Black',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '128GB',
    priceRegular: 1100,
    priceDiscount: 1050,
    colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
    color: 'black',
    images: [
      'img/phones/apple-iphone-11/black/00.webp',
      'img/phones/apple-iphone-11/black/01.webp',
      'img/phones/apple-iphone-11/black/02.webp',
      'img/phones/apple-iphone-11/black/03.webp',
      'img/phones/apple-iphone-11/black/04.webp',
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
  },

  {
    id: 'apple-iphone-11-256gb-red',
    namespaceId: 'apple-iphone-11',
    name: 'Apple iPhone 11 256GB Red',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '256GB',
    priceRegular: 1172,
    priceDiscount: 1115,
    colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
    color: 'red',
    images: [
      'img/phones/apple-iphone-11/red/00.webp',
      'img/phones/apple-iphone-11/red/01.webp',
      'img/phones/apple-iphone-11/red/02.webp',
      'img/phones/apple-iphone-11/red/03.webp',
      'img/phones/apple-iphone-11/red/04.webp',
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
  },

  {
    id: 'apple-iphone-11-128gb-purple',
    namespaceId: 'apple-iphone-11',
    name: 'Apple iPhone 11 128GB Purple',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '128GB',
    priceRegular: 1100,
    priceDiscount: 0,
    colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
    color: 'purple',
    images: [
      'img/phones/apple-iphone-11/purple/00.webp',
      'img/phones/apple-iphone-11/purple/01.webp',
      'img/phones/apple-iphone-11/purple/02.webp',
      'img/phones/apple-iphone-11/purple/03.webp',
      'img/phones/apple-iphone-11/purple/04.webp',
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
  },
];

export const HomePage: React.FC = () => {
  const [carouselParams, setCarouselParams] = useState({
    slides: 4,
    height: 506,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCarouselParams({
          slides: 1,
          height: 400,
        });
      } else if (width < 1200) {
        setCarouselParams({
          slides: 2.5,
          height: 460,
        });
      } else {
        setCarouselParams({
          slides: 4,
          height: 506,
        });
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const brandNewProducts = useMemo(() => {
    return productsData.filter(
      (product) =>
        !product.priceDiscount ||
        product.priceDiscount === product.priceRegular,
    );
  }, []);

  const hotPriceProducts = useMemo(() => {
    return productsData.filter(
      (product) => product.priceDiscount < product.priceRegular,
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header className=" sticky top-0 z-50">
        <Header />
        <aside>{/*наша компонента бургер меню */}</aside>
      </header>

      <main className="flex-1 max-w-[1200px] w-full mx-auto px-4 sm:px-8 py-6">
        <section>
          <PromoCarousel
            banners={BANNERS}
            squareBanners={SQUARE_BANNERS}
          />
        </section>

        <section>
          <ProductsCarousel
            title="Brand new models"
            products={brandNewProducts}
            productCardHeight={carouselParams.height}
            displayedSlides={carouselParams.slides}
          />
        </section>

        <section>
          {/*третя частина Секція з 3 hspybvb папками/ видами товарів */}
          <section>
            <h3>Shop by category</h3>
            <div>
              {/*сітка грід для категорій */}
              <div>
                <a>{/*Категорія телефонів */}</a>
                <p>124 models</p>
                {/*якийсь калькулятор скільки там речей в категорії*/}
              </div>
              <div>
                <a>{/*Категорія планшетів */}</a>
                <p>124 models</p>
                {/*якийсь калькулятор скільки там речей в категорії*/}
              </div>
              <div>
                <a>{/*Категорія все інше */}</a>
                <p>124 models</p>
                {/*якийсь калькулятор скільки там речей в категорії*/}
              </div>
            </div>
          </section>
        </section>

        <section className="pb-12">
          <ProductsCarousel
            title="Hot prices"
            products={
              hotPriceProducts.length > 0 ? hotPriceProducts : productsData
            }
            productCardHeight={carouselParams.height}
            displayedSlides={carouselParams.slides}
          />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};
