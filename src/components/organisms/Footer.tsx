import type React from 'react';
import { Logo } from '../atoms/Footer/Logo';
import { NavigationList } from '../molecules/Footer/NavigationList';
import { ScrollToTopButton } from '../atoms/Footer/ScrollTopButton';
import { useCallback } from 'react';

export const Footer: React.FC = () => {
  const handleScrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <footer className="w-full bg-white border-t border-elements px-4 md:px-8 py-8 lg:px-[152px] ">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="mb-8 md:mb-0">
          <Logo />
        </div>
        <div className="mb-8 md:mb-0">
          <NavigationList />
        </div>
        <ScrollToTopButton onClick={handleScrollTop} />
      </div>
    </footer>
  );
};
