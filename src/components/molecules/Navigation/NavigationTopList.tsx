import { NavigationLink } from '../../atoms/NavigationLink/NavigationLink';

export const NavigationTopList = () => {
  return (
    <nav className="flex items-center gap-[32px] lg:gap-[64px] ">
      <div className="relative flex items-center h-[48px] lg:h-[64px]">
        <NavigationLink href="#home">Home</NavigationLink>
        <span className="absolute bottom-0 left-0 w-full h-[3px] bg-primary" />
      </div>
      <NavigationLink href="#phones">Phones</NavigationLink>
      <NavigationLink href="#tablets">Tablets</NavigationLink>
      <NavigationLink href="#accessories">Accessories</NavigationLink>
    </nav>
  );
};
