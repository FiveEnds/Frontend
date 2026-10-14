import type React from 'react';
import { Typography } from '../Typography/Typography';
import { NavLink } from 'react-router-dom';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export const NavigationLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <NavLink
    to={href}
    end
    className="group relative flex h-full items-center"
  >
    {({ isActive }) => (
      <>
        <Typography
          level="uppercase"
          className={`transition-colors ${
            isActive ? 'text-primary' : (
              'text-secondary group-hover:text-primary'
            )
          }`}
        >
          {children}
        </Typography>

        {isActive && (
          <span className="absolute bottom-0 left-0 h-[3px] w-full bg-primary" />
        )}
      </>
    )}
  </NavLink>
);
