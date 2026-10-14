import type React from 'react';
import { NavigationList } from '../../molecules/Navigation/NavigationList';
import { ScrollToTopButton } from '../../atoms/ScrollTopButton/ScrollTopButton';
import { useCallback } from 'react';
import { FooterLogo } from '../../atoms/Logos/FooterLogo';

export const Footer: React.FC = () => {
  const handleScrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <footer className="w-full bg-white px-4 md:px-8 py-8 lg:px-[152px] ">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="mb-8 md:mb-0 w-[89px] h-[32px] ">
          <FooterLogo />
        </div>
        <div className="mb-8 md:mb-0">
          <NavigationList />
        </div>
        <div className="w-full flex justify-center md:w-auto">
          <ScrollToTopButton onClick={handleScrollTop} />
        </div>
      </div>
    </footer>
  );
};
