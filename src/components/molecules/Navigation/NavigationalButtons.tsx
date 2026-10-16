import type React from 'react';
import { ICONS } from '../../../constants/icons';
import { ButtonIcon } from '../../atoms/Buttons/ButtonIcon';
import CN from 'classnames';
import { NavLink } from 'react-router-dom';
import { useAppState } from '../../../store/store';
import { IconNotification } from '../IconNotification/IconNotification';

type Props = {
  onClick: () => void;
  classNames?: string;
};

const variant = {
  default:
    'relative w-[50%] h-[48px] lg:w-[64px] lg:h-[64px] flex items-center justify-center md:border-l border-elements hover:bg-gray-50 transition-colors',
};

export const NavigationButtons: React.FC<Props> = ({ onClick, classNames }) => {
  const hasFavourites = useAppState((state) => state.favourites.length);
  const hasCartItems = useAppState((state) =>
    Object.values(state.cart).reduce(
      (count, item) => item.amountAdded + count,
      0,
    ),
  );

  return (
    <nav className={CN('flex items-center', classNames)}>
      <NavLink
        to="/favourites"
        className={variant.default}
      >
        {({ isActive }) => (
          <>
            {hasFavourites ?
              <IconNotification
                src={ICONS.HEART_EMPTY}
                notification={hasFavourites}
              />
            : <ButtonIcon
                className="border-none cursor-pointer"
                src={ICONS.HEART_EMPTY}
                handleClick={onClick}
              />
            }

            {isActive && (
              <span className="absolute bottom-0 left-0 h-[3px] w-full bg-primary" />
            )}
          </>
        )}
      </NavLink>
      <NavLink
        to="/bag"
        className={`${variant.default} border-l`}
      >
        {({ isActive }) => (
          <>
            {hasCartItems ?
              <IconNotification
                src={ICONS.BAG}
                notification={hasCartItems}
              />
            : <ButtonIcon
                className="border-none cursor-pointer"
                src={ICONS.BAG}
                handleClick={onClick}
              />
            }

            {isActive && (
              <span className="absolute bottom-0 left-0 h-[3px] w-full bg-primary" />
            )}
          </>
        )}
      </NavLink>
    </nav>
  );
};
