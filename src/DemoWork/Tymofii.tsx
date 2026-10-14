// import { useState } from 'react';
import { Header } from '../components/organisms/Header/Header';
import { Footer } from '../components/organisms/Footer/Footer';

export const Tymofii = () => {
  return (
    <>
      <header className="relative">
        <Header />
        <div className="w-full h-30 flex items-center justify-center">
          Some content
        </div>
        <Footer />
      </header>
    </>
  );
};
