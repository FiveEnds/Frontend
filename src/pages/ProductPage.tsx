import { PhoneSpecsTable } from '../components/molecules/PhoneSpecsTable/PhoneSpecsTable';
import { ProductAbout } from '../components/molecules/ProductAbout/ProductAbout';

const productsData = [
  {
    id: 'apple-iphone-11-128gb-purple',
    namespaceId: 'apple-iphone-11',
    name: 'Apple iPhone 11 128GB Purple',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '128GB',
    priceRegular: 1100,
    priceDiscount: 1050,
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

export const ProductPage: React.FC = () => {
  const product = productsData[0];

  return (
    <>
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
              <ProductAbout description={product.description} />
            </section>
            <div>
              <section>
                <h2>Tech specs</h2>
                <PhoneSpecsTable
                  specs={{
                    screen: product.screen,
                    resolution: product.resolution,
                    processor: product.processor,
                    ram: product.ram,
                    camera: product.camera,
                    zoom: product.zoom,
                    cell: product.cell,
                  }}
                />
              </section>
            </div>
          </div>

          <section>
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
                <div className="flex gap-4 mt-4"></div>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};
