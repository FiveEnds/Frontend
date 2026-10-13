import type React from 'react';
import { Logo } from '../atoms/Footer/Logo';
import { NavigationTopList } from '../molecules/Header/NavigationTopList';
import { NavigationButtons } from '../molecules/Header/NavigationalButtons';
import { Icon } from '../atoms/Icon/Icon';
import { ICONS } from '../../constants/icons';

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-elements pl-[16px] md:pl-[24px]">
      <div className="mx-auto flex items-center justify-between h-[48px] md:h-[64px]">
        <div className="flex items-center gap-[32px] lg:gap-[48px]">
          <Logo />
          <div className="hidden md:block gap-[32px] lg:gap-[64px]">
            <NavigationTopList />
          </div>
        </div>
        <div className="hidden md:flex items-center">
          <NavigationButtons />
        </div>
        <button
          className="md:hidden w-[48px] h-[48px] flex items-center justify-center border-l border-elements"
          aria-label="Open menu"
        >
          <Icon src={ICONS.MENU} />
        </button>
      </div>
    </header>
  );
};
