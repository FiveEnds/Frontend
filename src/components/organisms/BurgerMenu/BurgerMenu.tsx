import { NavigationButtons } from '../../molecules/Navigation/NavigationalButtons';
import { NavigationTopList } from '../../molecules/Navigation/NavigationTopList';

type Props = {
  handleClickLink: () => void;
};

export const BurgerMenu: React.FC<Props> = ({ handleClickLink }) => (
  <div
    className="
    flex flex-col justify-between items-center 
    fixed z-50 top-12 pt-6 right-0 bottom-0 left-0 bg-white 
    md:hidden
    dark:bg-primary"
  >
    <NavigationTopList
      direction="column"
      handleClickLink={handleClickLink}
    />
    <NavigationButtons
      classNames="w-full border-t border-elements"
      onClick={handleClickLink}
    />
  </div>
);
