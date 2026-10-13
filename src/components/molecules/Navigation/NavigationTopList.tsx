import { useLocation } from 'react-router-dom';
import { NavigationLink } from '../../atoms/NavigationLink/NavigationLink';

type NavigationListProps = {
  direction?: 'row' | 'column';
};

export const NavigationList: React.FC<NavigationListProps> = ({
  direction = 'row',
}) => {
  const location = useLocation();

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#phones', label: 'Phones' },
    { href: '#tablets', label: 'Tablets' },
    { href: '#accessories', label: 'Accessories' },
  ];

  const isColumn = direction === 'column';

  return (
    <nav
      className={`flex ${isColumn ? 'flex-col items-center gap-[24px]' : 'items-center gap-[32px] lg:gap-[64px]'}`}
    >
      {navItems.map((item) => {
        const isActive =
          location.hash === item.href || location.pathname === item.href;

        return (
          <div
            key={item.href}
            className={`relative flex items-center ${isColumn ? 'h-auto py-[8px]' : 'h-[48px]'}`}
          >
            <NavigationLink
              href={item.href}
              isActive={isActive}
            >
              {item.label}
            </NavigationLink>

            {isActive && (
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-primary" />
            )}
          </div>
        );
      })}
    </nav>
  );
};
