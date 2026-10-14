import { BANNERS } from '../../constants/banners';
import { SQUARE_BANNERS } from '../../constants/squareBanners';
import { PromoCarousel } from '../organisms/Carousels/PromoCarousel/PromoCarousel';
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

export const HomeLayout = () => (
  <>
    <header>
      {/*хідер яку треба доробити з ссилками на сторінки і кнопки добавити змінні від стейту* */}
      <Header />
      <aside>{/*наша компонента бургер меню */}</aside>
    </header>

    <main>
      {/*мейн контент ще в опрацюванні* */}
      <div>
        <section>
          {/*перша частина Секція з слаййдером */}
          <PromoCarousel
            banners={BANNERS}
            squareBanners={SQUARE_BANNERS}
          />
        </section>

        <section>
          {/*друга частина Секція з 3 картами телефонів 2 2ма кнопками */}
          <section>
            <div>
              <h2>Brand new models</h2>
              <div>
                <button></button>
                {/*Кнопка лайд вліво*/}
                <button></button>
                {/*Кнопка лайд вправо*/}
              </div>
            </div>
            <div>
              {/*Контейнер грід сєтки по 3 картки*/}
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
            </div>
          </section>
        </section>
        {/*------------------------------------------*/}
        {/*------------------------------------------*/}
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
        {/*------------------------------------------*/}
        {/*------------------------------------------*/}
        <section>
          {/*четверта частина Секція з 3 картами телефонів 2 2ма кнопками З СКИДКАМИ*/}
          <section>
            <div>
              <h2>Hot prices</h2>
              <div>
                <button></button>
                {/*Кнопка лайд вліво*/}
                <button></button>
                {/*Кнопка лайд вправо*/}
              </div>
            </div>
            <div>
              {/*Контейнер грід сєтки по 3 картки*/}
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
            </div>
          </section>
        </section>
      </div>
    </main>
    <footer>
      <Footer />
    </footer>
  </>
);
