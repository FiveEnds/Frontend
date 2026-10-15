import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
// import { DemoWork } from './DemoWork/DemoWork';
import { HomePage } from './pages/HomePage';
import { PageNotFound } from './pages/PageNotFound';
import { PhonesPage } from './pages/PhonesPage';
import { AccessoriesPage } from './pages/AccessoriesPage';
import { TabletsPage } from './pages/TabletsPage';
import { FavouritesPage } from './pages/FavouritesPage';
import { CartPage } from './pages/CartPage';
import { useAppActions } from './store/store';
import { getAccessories, getPhones, getTablets } from './services';
import { useEffect } from 'react';
import { HeaderLayout } from './components/templates/HeaderLayout';
import { ProductItemPage } from './pages/ProductItemPage';
import { CATEGORY } from './constants/category';

export const App: React.FC = () => {
  const { loadPhones, loadTablets, loadAccessories } = useAppActions();

  useEffect(() => {
    getPhones().then((data) => loadPhones(data));
    getTablets().then((data) => loadTablets(data));
    getAccessories().then((data) => loadAccessories(data));
  }, [loadAccessories, loadPhones, loadTablets]);

  // const phones = useAppState((state) => state.phones);

  // console.log(phones);

  return (
    <Routes>
      <Route
        path="/"
        element={<HeaderLayout />}
      >
        <Route
          index
          element={<HomePage />}
        />
        <Route
          path="phones"
          element={<PhonesPage />}
        >
          <Route
            path=":ProductId"
            element={<ProductItemPage category={CATEGORY.PHONES} />}
          />
        </Route>
        <Route
          path="tablets"
          element={<TabletsPage />}
        >
          <Route
            path=":ProductId"
            element={<ProductItemPage category={CATEGORY.TABLETS} />}
          />
        </Route>
        <Route
          path="accessories"
          element={<AccessoriesPage />}
        >
          <Route
            path=":ProductId"
            element={<ProductItemPage category={CATEGORY.ACCESSORIES} />}
          />
        </Route>
        <Route
          path="favourites"
          element={<FavouritesPage />}
        />
        <Route
          path="bag"
          element={<CartPage />}
        />
        <Route
          path="*"
          element={<PageNotFound />}
        />
        <Route
          path="home"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />
      </Route>
    </Routes>
  );
};

// return <DemoWork />;

export default App;
