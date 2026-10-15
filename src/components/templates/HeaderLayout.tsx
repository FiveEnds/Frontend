import type React from 'react';
import { Header } from '../organisms/Header/Header';
import { Footer } from '../organisms/Footer/Footer';
import { Outlet } from 'react-router-dom';

export const HeaderLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
