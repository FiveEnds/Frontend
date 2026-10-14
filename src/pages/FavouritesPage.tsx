import { Footer } from '../components/organisms/Footer/Footer';
import { Header } from '../components/organisms/Header/Header';
import { ProductCard } from '../components/organisms/ProductCard/ProductCard';

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

export const FavouritesPage: React.FC = () => {
  return (
    <>
      <header>
        <Header />
        <aside></aside>
      </header>
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
      <footer>
        <Footer />
      </footer>
    </>
  );
};
