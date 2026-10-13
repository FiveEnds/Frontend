import { ICONS } from '../../../constants/icons';
import { Icon } from '../../atoms/Icon/Icon';

export const NavigationButtons = () => {
  return (
    <nav className="flex items-center">
      <a
        href="#favorites"
        className="w-[48px] h-[48px] lg:w-[64px] lg:h-[64px] flex items-center justify-center border-l border-elements hover:bg-gray-50 transition-colors"
      >
        <Icon src={ICONS.HEART_EMPTY} />
      </a>
      <a
        href="#bag"
        className="w-[48px] h-[48px] lg:w-[64px] lg:h-[64px] flex items-center justify-center border-l border-elements hover:bg-gray-50 transition-colors"
      >
        <Icon src={ICONS.BAG} />
      </a>
    </nav>
  );
};
