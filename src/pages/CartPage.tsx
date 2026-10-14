import { useState } from 'react';
import { Header } from '../components/organisms/Header/Header';
import { CartItem } from '../components/molecules/CartItem';
import { Footer } from '../components/organisms/Footer/Footer';

export const CartPage: React.FC = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <header>
        <Header />
        <aside></aside>
      </header>

      <main>
        <section>
          {/*Card shop*/}
          <button>
            {/* <img></img> Стрілочка*/}
            <p></p> {/*back*/}
          </button>
          <h1>Card</h1>
          <div>
            {/*рендер або пусто або вибір*/}
            <div>
              <p>Your cart is empty</p>
              {/*Або нічого не показуємо і типу якусь картинку павутинки*/}
              {/* <img></img> Павутинка*/}
            </div>
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
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};
