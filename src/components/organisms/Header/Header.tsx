import type React from 'react';
import { NavigationButtons } from '../../molecules/Navigation/NavigationalButtons';
import { ICONS } from '../../../constants/icons';
import { HeadLogo } from '../../atoms/Logos/HeadLogo';
import { NavigationTopList } from '../../molecules/Navigation/NavigationTopList';
import { ButtonIcon } from '../../atoms/Buttons/ButtonIcon';
import { useCallback } from 'react';

export const Header: React.FC = () => {
  const handleRedirect = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <header className="w-full bg-white border-b border-elements pl-[16px] lg:pl-[24px]">
      <div className="mx-auto flex items-center justify-between h-[48px] lg:h-[64px]">
        <div className="flex items-center gap-[32px] lg:gap-[48px]">
          <HeadLogo />
          <div className="hidden md:flex items-center gap-[32px] lg:gap-[64px]">
            <NavigationTopList />
          </div>
        </div>
        <div className="hidden md:flex items-center h-full ">
          <NavigationButtons onClick={handleRedirect} />
        </div>
        <div className="flex md:hidden items-center h-full">
          <ButtonIcon
            className="w-[48px] h-[48px]"
            src={ICONS.MENU}
            handleClick={handleRedirect}
          />
        </div>
      </div>
    </header>
  );
};
