import { NavigationLink } from '../../atoms/NavigationLink/NavigationLink';

export const NavigationList = () => {
  return (
    <nav className="flex flex-col md:flex-row items-start md:items-center gap-[13.5px] md:gap-[14px] lg:gap-[103px] ">
      <NavigationLink href="#github">Github</NavigationLink>
      <NavigationLink href="#contacts">Contacts</NavigationLink>
      <NavigationLink href="#rights">Rights</NavigationLink>
    </nav>
  );
};
