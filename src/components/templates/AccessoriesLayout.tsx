import { Footer } from '../organisms/Footer/Footer';
import { Header } from '../organisms/Header/Header';

export const AccessoriesLayout = () => (
  <>
    <header>
      <Header />
      <aside></aside>
    </header>
    <main>
      <section>
        <div>
          <a></a> {/*ССилка з картинки на дім*/}
          {/*<img></img>  стрілка*/}
          <span></span> {/*Hана категорія*/}
        </div>
        <div>
          <h1>accessories</h1>
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
          <div>{/*карточки на сторінці*/}</div>
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
