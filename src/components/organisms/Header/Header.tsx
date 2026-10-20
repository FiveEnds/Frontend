import type React from 'react';
import { NavigationButtons } from '../../molecules/Navigation/NavigationalButtons';
import { ICONS } from '../../../constants/icons';
import { HeadLogo } from '../../atoms/Logos/HeadLogo';
import { NavigationTopList } from '../../molecules/Navigation/NavigationTopList';
import { ButtonIcon } from '../../atoms/Buttons/ButtonIcon';
import { useEffect, useState } from 'react';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { ThemeToggle } from '../../atoms/ToggleTheme/ToggleTheme';
import classNames from 'classnames';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (!isMenuOpen) {
      html.style.overflow = '';
      body.style.overflow = '';
      return;
    }

    if (isMenuOpen) {
      html.style.overflow = 'hidden';
      body.style.overflow = 'hidden';
    }
  }, [isMenuOpen]);

  const handleClickLink = () => {
    setIsMenuOpen(false);
  };

  const menuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
      <header
        className={classNames(
          'top-0 z-50 w-full border-b border-elements h-12 lg:h-16 bg-white pl-[16px] lg:pl-[24px]  dark:border-surface-2-dark dark:bg-primary',
          {
            fixed: isMenuOpen,
            sticky: !isMenuOpen,
          },
        )}
      >
        <div className="h-full mx-auto flex items-center justify-between">
          <div className="flex items-center gap-[32px] lg:gap-[48px]">
            <HeadLogo onClick={handleClickLink} />
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
                classNames="md:w-24 lg:w-[128px]"
                onClick={handleClickLink}
              />
            </div>
            <div className="flex md:hidden items-center h-full group">
              <ButtonIcon
                className="w-[48px] h-full border-b-0 border-t-0 border-r-0 border-l-elements dark:group-hover:bg-icons"
                src={isMenuOpen ? ICONS.CLOSE : ICONS.MENU}
                handleClick={menuToggle}
              />
            </div>
          </div>
        </div>
      </header>
      {isMenuOpen && <BurgerMenu handleClickLink={handleClickLink} />}
    </>
  );
};
