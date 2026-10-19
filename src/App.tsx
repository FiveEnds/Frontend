import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/HomePage';
import { PageNotFound } from './pages/PageNotFound';
import { FavouritesPage } from './pages/FavouritesPage';
import { CartPage } from './pages/CartPage';
import { useAppActions } from './store/store';
import { getAccessories, getPhones, getTablets } from './services';
import { useEffect } from 'react';
import { HeaderLayout } from './components/templates/HeaderLayout';
import { ProductItemPage } from './pages/ProductItemPage';
import { CATEGORY } from './constants/category';
import { CatalogPage } from './pages/CatalogPage';

export const App: React.FC = () => {
  const { loadPhones, loadTablets, loadAccessories, fetchRatings } =
    useAppActions();

  useEffect(() => {
    getPhones().then((data) => loadPhones(data));
    getTablets().then((data) => loadTablets(data));
    getAccessories().then((data) => loadAccessories(data));
    fetchRatings();
  }, [loadAccessories, loadPhones, loadTablets, fetchRatings]);

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
          element={<CatalogPage category={CATEGORY.PHONES} />}
        />
        <Route
          path="phones/:productId"
          element={<ProductItemPage category={CATEGORY.PHONES} />}
        />
        <Route
          path="tablets"
          element={<CatalogPage category={CATEGORY.TABLETS} />}
        />
        <Route
          path="tablets/:productId"
          element={<ProductItemPage category={CATEGORY.TABLETS} />}
        />
        <Route
          path="accessories"
          element={<CatalogPage category={CATEGORY.ACCESSORIES} />}
        />
        <Route
          path="accessories/:productId"
          element={<ProductItemPage category={CATEGORY.ACCESSORIES} />}
        />
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

export default App;
