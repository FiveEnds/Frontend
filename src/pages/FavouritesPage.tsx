import { Breadcrumbs } from '../components/molecules/BreadCrumbs/BreadCrumbs';
import { HeadingWithCount } from '../components/molecules/HeadingWithCount';
import { FavouriteProducts } from '../components/organisms/FavouriteProducts/FavouriteProducts';
import { FavoritesLayout } from '../components/templates/FavoritesLayout';
import { useAppActions, useAppState } from '../store/store';

export const FavouritesPage: React.FC = () => {
  const favouriteProducts = useAppState((state) => state.favourites);
  const { toggleFavorite } = useAppActions();

  return (
    <FavoritesLayout
      breadCrumbs={<Breadcrumbs />}
      headingWithCount={
        <HeadingWithCount
          title="Favourites"
          itemsCount={favouriteProducts.size}
          countLabel="items"
        />
      }
      products={
        <FavouriteProducts
          favouriteProducts={favouriteProducts}
          toggleFavorite={toggleFavorite}
        />
      }
    />
  );
};
