import type React from 'react';
import { Typography } from '../Typography/Typography';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  classNames?: string;
};

export const NavigationLink: React.FC<NavLinkProps> = ({
  href,
  children,
  classNames,
}) => {
  const isExternal = href.startsWith('http') || href.startsWith('//');

  const typographyElement = (isActive = false) => (
    <Typography
      level="uppercase"
      className={cn('transition-colors', classNames, {
        'text-primary': isActive,
        'text-secondary group-hover:text-primary': !isActive,
      })}
    >
      {children}
    </Typography>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-full items-center"
      >
        {typographyElement(false)}
      </a>
    );
  }

  return (
    <NavLink
      to={href}
      end
      className="group relative flex h-full items-center"
    >
      {({ isActive }) => (
        <>
          {typographyElement(isActive)}
          {isActive && (
            <span className="absolute bottom-0 left-0 h-[3px] w-full bg-primary" />
          )}
        </>
      )}
    </NavLink>
  );
};
