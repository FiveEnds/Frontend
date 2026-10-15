import type React from 'react';
import { Header } from '../organisms/Header/Header';
import { Footer } from '../organisms/Footer/Footer';
import { Outlet } from 'react-router-dom';

export const HeaderLayout: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
