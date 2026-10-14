import { Typography } from '../components/atoms/Typography/Typography';
import { AccessoriesLayout } from '../components/templates/AccessoriesLayout';
import { CardShopLayout } from '../components/templates/CardShopLayout';
import { FavoritesLayout } from '../components/templates/FavoritesLayout';
import { HomeLayout } from '../components/templates/HomeLayout';
import { PhoneLayout } from '../components/templates/PhoneLayout';
import { TabletsLayout } from '../components/templates/TabletsLayout';
import { ProductPagelayout } from '../components/templates/ProductPageLayout';
import { HomePage } from '../pages/HomePage';

export const VladyslavPetrovskyi = () => {
  return (
    <>
      <HomePage />
      <Typography level="body">test1</Typography>
      <Typography level="button">test2</Typography>
      <Typography level="h1">test3 and mobile</Typography>
      <Typography level="h2">test4 and mobile</Typography>
      <Typography level="h3">test5 and mobile</Typography>
      <Typography level="h4">test6 and mobile</Typography>
      <Typography level="small">test7</Typography>
      <Typography level="uppercase">test8</Typography>
      <HomeLayout />
      <AccessoriesLayout />
      <CardShopLayout />
      <FavoritesLayout />
      <PhoneLayout />
      <ProductPagelayout />
      <TabletsLayout />
    </>
  );
};
