import type React from 'react';
import { ICONS } from '../../../constants/icons';
import { ButtonIcon } from '../../atoms/Buttons/ButtonIcon';
import CN from 'classnames';
import { NavLink } from 'react-router-dom';

type Props = {
  onClick: () => void;
  classNames?: string;
};

export const NavigationButtons: React.FC<Props> = ({ onClick, classNames }) => {
  return (
    <nav className={CN('flex items-center', classNames)}>
      <NavLink
        to="/favorites"
        className="w-[50%] h-[48px] lg:w-[64px] lg:h-[64px] flex items-center justify-center md:border-l border-elements hover:bg-gray-50 transition-colors"
      >
        <ButtonIcon
          className="border-none cursor-pointer"
          src={ICONS.HEART_EMPTY}
          handleClick={onClick}
        />
      </NavLink>
      <NavLink
        to="/bag"
        className="w-[50%] h-[48px] lg:w-[64px] lg:h-[64px] flex items-center justify-center border-l border-elements hover:bg-gray-50 transition-colors"
      >
        <ButtonIcon
          className="border-none cursor-pointer"
          src={ICONS.BAG}
          handleClick={onClick}
        />
      </NavLink>
    </nav>
  );
};
