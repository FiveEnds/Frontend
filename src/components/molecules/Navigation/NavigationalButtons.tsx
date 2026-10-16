import type React from 'react';
import { ICONS } from '../../../constants/icons';
import { ButtonIcon } from '../../atoms/Buttons/ButtonIcon';
import CN from 'classnames';
import { NavLink } from 'react-router-dom';

type Props = {
  onClick: () => void;
  classNames?: string;
};

const variant = {
  default:
    'relative w-[50%] h-[48px] lg:w-[64px] lg:h-[64px] flex items-center justify-center md:border-l border-elements hover:bg-gray-50 transition-colors',
};

export const NavigationButtons: React.FC<Props> = ({ onClick, classNames }) => {
  return (
    <nav className={CN('flex items-center', classNames)}>
      <NavLink
        to="/favourites"
        className={variant.default}
        onClick={onClick}
      >
        {({ isActive }) => (
          <>
            <ButtonIcon
              className="border-none cursor-pointer"
              src={ICONS.HEART_EMPTY}
            />

            {isActive && (
              <span className="absolute bottom-0 left-0 h-[3px] w-full bg-primary" />
            )}
          </>
        )}
      </NavLink>
      <NavLink
        to="/bag"
        className={`${variant.default} border-l`}
        onClick={onClick}
      >
        {({ isActive }) => (
          <>
            <ButtonIcon
              className="border-none cursor-pointer"
              src={ICONS.BAG}
            />

            {isActive && (
              <span className="absolute bottom-0 left-0 h-[3px] w-full bg-primary" />
            )}
          </>
        )}
      </NavLink>
    </nav>
  );
};
