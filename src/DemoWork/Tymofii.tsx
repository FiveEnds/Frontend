// import { useState } from 'react';
import { Header } from '../components/organisms/Header/Header';
import { useState } from 'react';
import { Footer } from '../components/organisms/Footer/Footer';
import { BurgerMenu } from '../components/organisms/BurgerMenu/BurgerMenu';

export const Tymofii = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleBurgerMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header className="relative">
        <Header
          menuToggle={handleBurgerMenuToggle}
          isMenuOpen={isMenuOpen}
        />
        {isMenuOpen && <BurgerMenu />}
        <div className="w-full h-30 flex items-center justify-center">
          Some content
        </div>
        <Footer />
      </header>
    </>
  );
};
