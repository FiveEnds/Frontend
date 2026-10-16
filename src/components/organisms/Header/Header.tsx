import type React from 'react';
import { NavigationButtons } from '../../molecules/Navigation/NavigationalButtons';
import { ICONS } from '../../../constants/icons';
import { HeadLogo } from '../../atoms/Logos/HeadLogo';
import { NavigationTopList } from '../../molecules/Navigation/NavigationTopList';
import { ButtonIcon } from '../../atoms/Buttons/ButtonIcon';
import { useCallback, useEffect, useState } from 'react';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { ThemeToggle } from '../../atoms/ToggleTheme/ToggleTheme';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const menuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleRedirect = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-elements h-12 lg:h-16 bg-white pl-[16px] lg:pl-[24px] dark:border-surface-2-dark dark:bg-primary">
        <div className="h-full mx-auto flex items-center justify-between">
          <div className="flex items-center gap-[32px] lg:gap-[48px]">
            <HeadLogo />
            <div className="hidden md:flex items-center gap-[32px] lg:gap-[64px] dark:text-white">
              <NavigationTopList />
            </div>
          </div>
          <div className="flex items-center h-full">
            <div className="mr-4">
              <ThemeToggle />
            </div>
            <div className="hidden md:flex items-center h-full ">
              <NavigationButtons
                classNames="w-[128px]"
                onClick={handleRedirect}
              />
            </div>
            <div className="flex md:hidden items-center h-full">
              <ButtonIcon
                className="w-[48px] h-full border-b-0 border-t-0 border-r-0 border-l-elements"
                src={isMenuOpen ? ICONS.CLOSE : ICONS.MENU}
                handleClick={menuToggle}
              />
            </div>
          </div>
        </div>
      </header>
      {isMenuOpen && <BurgerMenu />}
    </>
  );
};
