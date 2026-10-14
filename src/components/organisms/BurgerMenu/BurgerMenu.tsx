import { NavigationButtons } from '../../molecules/Navigation/NavigationalButtons';
import { NavigationTopList } from '../../molecules/Navigation/NavigationTopList';

export const BurgerMenu: React.FC = () => (
  <div
    className="
    flex flex-col justify-between items-center 
    absolute z-50 top-12 pt-6 right-0 bottom-0 left-0 bg-white 
    md:hidden"
  >
    <NavigationTopList direction="column" />
    <NavigationButtons
      classNames="w-full border-t border-elements"
      onClick={() => {}}
    />
  </div>
);
