import type React from 'react';
import { ICONS } from '../../../constants/icons';
import { ButtonIcon } from '../../atoms/Buttons/ButtonIcon';

type Props = {
  onClick: () => void;
};

export const NavigationButtons: React.FC<Props> = ({ onClick }) => {
  return (
    <nav className="flex items-center">
      <a
        href="#favorites"
        className="w-[48px] h-[48px] lg:w-[64px] lg:h-[64px] flex items-center justify-center border-l border-elements hover:bg-gray-50 transition-colors"
      >
        <ButtonIcon
          className="border-none cursor-pointer"
          src={ICONS.HEART_EMPTY}
          handleClick={onClick}
        />
      </a>
      <a
        href="#bag"
        className="w-[48px] h-[48px] lg:w-[64px] lg:h-[64px] flex items-center justify-center border-l border-elements hover:bg-gray-50 transition-colors"
      >
        <ButtonIcon
          className="border-none cursor-pointer"
          src={ICONS.BAG}
          handleClick={onClick}
        />
      </a>
    </nav>
  );
};
