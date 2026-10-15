import { NavigationLink } from '../../atoms/NavigationLink/NavigationLink';
import cn from 'classnames';

type NavigationListProps = {
  direction?: 'row' | 'column';
};

export const NavigationTopList: React.FC<NavigationListProps> = ({
  direction = 'row',
}) => {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/phones', label: 'Phones' },
    { href: '/tablets', label: 'Tablets' },
    { href: '/accessories', label: 'Accessories' },
  ];

  const isColumn = direction === 'column';

  return (
    <nav
      className={cn('flex', {
        'flex-col items-center gap-4': isColumn,
        'items-center gap-8 lg:gap-16': !isColumn,
      })}
    >
      {navItems.map((item) => {
        return (
          <div
            key={item.href}
            className={cn('hover-zoom-small relative flex items-center', {
              'h-[27px]': isColumn,
              'h-12 lg:h-16': !isColumn,
            })}
          >
            <NavigationLink href={item.href}>{item.label}</NavigationLink>
          </div>
        );
      })}
    </nav>
  );
};
