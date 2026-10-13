import { Typography } from '../components/atoms/Typography/Typography';
import { Footer } from '../components/organisms/Footer';
import { Header } from '../components/organisms/Header';

export const VladyslavPetrovskyi = () => (
  <>
    <Header />
    <Typography level="body">test1</Typography>
    <Typography level="button">test2</Typography>
    <Typography level="h1">test3 and mobile</Typography>
    <Typography level="h2">test4 and mobile</Typography>
    <Typography level="h3">test5 and mobile</Typography>
    <Typography level="h4">test6 and mobile</Typography>
    <Typography level="small">test7</Typography>
    <Typography level="uppercase">test8</Typography>
    <Footer />
  </>
);
