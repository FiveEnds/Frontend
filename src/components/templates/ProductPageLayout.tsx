import { AboutPhone } from '../molecules/AboutPhone/AboutPhone';
import { Footer } from '../organisms/Footer/Footer';
import { Header } from '../organisms/Header/Header';
import { PhoneSpecsTable } from '../molecules/PhoneSpecsTable/PhoneSpecsTable';
import { ProductCard } from '../organisms/ProductCard/ProductCard';

const productDescriptionData = [
  {
    title: 'And then there was Pro',
    text: [
      'A transformative triple camera system that adds tons of capability without complexity.',
      'An unprecedented leap in battery life.And a mind blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do.Welcome to the first iPhone powerful enough to be called Pro.',
    ],
  },
  {
    title: 'Camera',
    text: [
      'Meet the first triple camera system to combine cutting edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest quality video in a smartphone — then edit with the same tools you love for photos. You ve never shot with anything like it.',
    ],
  },
  {
    title:
      'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
    text: [
      'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
    ],
  },
];

const phoneSpecsData = {
  screen: '6.5" OLED',
  resolution: '2688x1242',
  processor: 'Apple A12 Bionic',
  ram: '3 GB',
  capacity: '64 GB',
  camera: '12 Mp + 12 Mp + 12 Mp (Triple)',
  zoom: 'Optical, 2x',
  cell: ['GSM', 'LTE', 'UMTS'],
};

const sampleRecommendedProduct = {
  id: '2',
  category: 'phones',
  phoneId: 'apple-iphone-11-pro-max-64gb-gold',
  itemId: 'apple-iphone-11-pro-max-64gb-gold',
  name: 'Apple iPhone 11 Pro Max 64GB Gold',
  fullPrice: 1100,
  price: 999,
  priceRegular: 1100,
  priceDiscount: 999,
  screen: '6.5" OLED',
  capacity: '64GB',
  color: 'gold',
  ram: '4GB',
  year: 2019,
  image: 'img/phones/apple-iphone-11-pro-max/gold/00.jpg',
  images: ['https://via.placeholder.com/200'],
  namespaceId: 'apple-iphone-11-pro-max',
};

export const ProductPagelayout = () => (
  <>
    <header>
      <Header />
      <aside></aside>
    </header>
    <main>
      <section>
        <div>
          <a></a> {/*ССилка з картинки на дім*/}
          {/* <img></img> стрілка*/}
          <span></span> {/*Hаша категорія*/}
          {/* <img></img> стрілка*/}
          <span></span> {/*Hаш товар*/}
        </div>
        <div>
          <button>
            {/* <img></img> Стрілочка*/}
            <p></p> {/*back*/}
          </button>
        </div>
        <div>
          <section>
            <p></p> {/*Назва товару*/}
            {/* <img></img> Картинка товару*/}
          </section>
          <div>
            <section>
              <div>
                <p></p> {/*Наявні кольори*/}
                <p></p> {/*ID або Slug?*/}
              </div>
              <div>
                <button></button> {/*Колір?*/}
                <button></button> {/*Колір?*/}
                <button></button> {/*Колір?*/}
                <button></button> {/*Колір?*/}
              </div>
              <div>
                <p></p> {/*Характеристика розміру*/}
                <div>
                  <button></button> {/*розмір S?*/}
                  <button></button> {/*розмір M?*/}
                  <button></button> {/*розмір L?*/}
                </div>
              </div>
            </section>
            <section>
              <div>
                <p></p> {/*ціна звичайна*/}
                <p></p> {/*ціна скидки перекреслили*/}
              </div>
              <div>
                <button></button> {/* Кнопочка добавити в корзину */}
                <button></button> {/* Кнопочка добавити в улюблене (серце)*/}
              </div>
            </section>
            <section>
              {' '}
              {/* Секція характеристик */}
              <div>
                <p></p> {/* Screen */}
                <p></p>
              </div>
              <div>
                <p></p> {/* Resolution */}
                <p></p>
              </div>
              <div>
                <p></p> {/* Processor */}
                <p></p>
              </div>
              <div>
                <p></p> {/* RAM */}
                <p></p>
              </div>
            </section>
          </div>
        </div>
        <div>
          <section>
            <h1>About Page</h1>
            <AboutPhone description={productDescriptionData} />
          </section>
          <div>
            <section>
              <h2>Tech specs</h2>
              <PhoneSpecsTable specs={phoneSpecsData} />
            </section>
          </div>
        </div>

        <section>
          {' '}
          {/* You may also like */}
          <div>
            <h2>You may also like</h2>
            <div>
              <button></button> {/* Стрілка вліво */}
              <button></button> {/* Стрілка Вправо */}
            </div>
          </div>
          <div>
            <div>
              {/* Щось схоче до слайдера? */}
              <div className="flex gap-4 mt-4">
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
            </div>
          </div>
        </section>
      </section>
    </main>
    <footer>
      <Footer />
    </footer>
  </>
);
