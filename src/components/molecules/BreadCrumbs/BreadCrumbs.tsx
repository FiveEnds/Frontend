import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ICONS } from '../../../constants/icons';
import { Typography } from '../../atoms/Typography/Typography';

interface BreadcrumbsProps {
  customItems?: Array<{ label: string; path: string }>;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ customItems }) => {
  const location = useLocation();

  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbNameMap: Record<string, string> = {
    phones: 'Phones',
    tablets: 'Tablets',
    accessories: 'Accessories',
    favourites: 'Favourites',
    cart: 'Cart',
  };

  if (!customItems && pathnames.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-2">
        <li className="flex items-center">
          <Link
            to="/"
            className="flex items-center"
          >
            <img
              src={ICONS.HOME}
              alt="Home"
              className="w-4 h-4"
            />
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const label = breadcrumbNameMap[value] || value;

          return (
            <React.Fragment key={to}>
              <span className="text-icons flex items-center">
                <img
                  src={ICONS.ARROW.RIGHT}
                  alt="arrow"
                  className="w-4 h-4"
                />
              </span>
              <li className="flex items-center">
                {isLast ?
                  <Typography
                    level="body"
                    textColor="text-secondary"
                  >
                    {label}
                  </Typography>
                : <Link to={to}>
                    <Typography
                      level="body"
                      textColor="text-primary"
                      className="hover:underline"
                    >
                      {label}
                    </Typography>
                  </Link>
                }
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};
