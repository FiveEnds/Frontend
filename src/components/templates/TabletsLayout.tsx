import { Footer } from '../organisms/Footer/Footer';
import { Header } from '../organisms/Header/Header';
import { ProductCard } from '../organisms/ProductCard/ProductCard';

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

export const TabletsLayout = () => (
  <>
    <header>
      <Header />
      <aside></aside>
    </header>
    <main>
      <section>
        <div>
          <a></a> {/*ССилка з картинки на дім*/}
          {/* <img></img>  стрілка*/}
          <span></span> {/*Hана категорія*/}
        </div>
        <div>
          <h1>tablets</h1>
        </div>
        <div>
          <p>{Number()} models</p>
          {/*якийсь калькулятор скільки там речей в категорії*/}
        </div>
        <div>
          {/* чисто блок сортування*/}
          <div></div>
          {/*Сортування по новизні*/}
          <div></div>
          {/*Сортування по кількості речей на сторінці*/}
        </div>
        <section>
          {/* наща сторінка з телефонами*/}
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
          <div>
            {/*Кнопки сторінок в залежності скільки ми вибрали в фільтрі*/}
          </div>
        </section>
      </section>
    </main>
    <footer>
      <Footer />
    </footer>
  </>
);
