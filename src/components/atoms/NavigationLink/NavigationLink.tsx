import type React from 'react';
import { Typography } from '../Typography/Typography';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export const NavigationLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="group"
  >
    <Typography
      level="uppercase"
      className="text-secondary group-hover:text-primary transition-colors"
    >
      {children}
    </Typography>
  </a>
);
