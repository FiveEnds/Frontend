// import { useState } from 'react';
import { NavigationTopList } from '../components/molecules/Navigation/NavigationTopList';
import { Header } from '../components/organisms/Header/Header';
import { NavigationButtons } from '../components/molecules/Navigation/NavigationalButtons';
import { useState } from 'react';

export const Tymofii = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleBurgerMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <Header
        menuToggle={handleBurgerMenuToggle}
        isMenuOpen={isMenuOpen}
      />
      {isMenuOpen && (
        <aside className="flex flex-col justify-between items-center absolute z-50 top-18 right-0 bottom-0 left-0 bg-white">
          <NavigationTopList direction="column" />
          <NavigationButtons
            classNames="w-full border-t border-elements"
            onClick={() => {}}
          />
        </aside>
      )}
      <div className="">
        <Header
          menuToggle={handleBurgerMenuToggle}
          isMenuOpen={isMenuOpen}
        />
        <Header
          menuToggle={handleBurgerMenuToggle}
          isMenuOpen={isMenuOpen}
        />
        <Header
          menuToggle={handleBurgerMenuToggle}
          isMenuOpen={isMenuOpen}
        />
      </div>
    </>
  );
};
