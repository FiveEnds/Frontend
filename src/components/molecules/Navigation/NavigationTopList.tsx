import { NavigationLink } from '../../atoms/NavigationLink/NavigationLink';

type NavigationListProps = {
  direction?: 'row' | 'column';
};

export const NavigationTopList: React.FC<NavigationListProps> = ({
  direction = 'row',
}) => {
  const navItems = [
    { href: '/home', label: 'Home' },
    { href: '/phones', label: 'Phones' },
    { href: '/tablets', label: 'Tablets' },
    { href: '/accessories', label: 'Accessories' },
  ];

  const isColumn = direction === 'column';

  return (
    <nav
      className={`flex ${isColumn ? 'flex-col items-center gap-[16px]' : 'items-center gap-[32px] lg:gap-[64px]'}`}
    >
      {navItems.map((item) => {
        return (
          <div
            key={item.href}
            className={`relative flex items-center ${isColumn ? 'h-[27px]' : 'h-[48px] lg:h-[64px]'}`}
          >
            <NavigationLink href={item.href}>{item.label}</NavigationLink>
          </div>
        );
      })}
    </nav>
  );
};
