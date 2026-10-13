import type React from 'react';
import { Typography } from '../Typography/Typography';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
};

export const NavigationLink: React.FC<NavLinkProps> = ({
  href,
  children,
  isActive,
}) => (
  <a
    href={href}
    className="group"
  >
    <Typography
      level="uppercase"
      className={`transition-colors ${
        isActive ? 'text-primary' : 'text-secondary group-hover:text-primary'
      }`}
    >
      {children}
    </Typography>
  </a>
);
