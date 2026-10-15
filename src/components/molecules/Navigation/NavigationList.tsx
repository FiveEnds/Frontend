import { NavigationLink } from '../../atoms/NavigationLink/NavigationLink';

export const NavigationList = () => {
  const navItems = [
    { href: '/github', label: 'Github' },
    { href: '/contacts', label: 'Contacts' },
    { href: '/rights', label: 'Rights' },
  ];
  return (
    <nav className="flex flex-col md:flex-row items-start md:items-center gap-[4px] md:gap-[16px] lg:gap-[103px] ">
      {navItems.map((item) => (
        <NavigationLink
          key={item.href}
          classNames=""
          href={item.href}
        >
          {item.label}
        </NavigationLink>
      ))}
    </nav>
  );
};
