import React from 'react';

type HomeLayoutProps = {
  heroSlider: React.ReactNode;
  brandNewCarousel: React.ReactNode;
  shopByCategory: React.ReactNode;
  hotPricesCarousel: React.ReactNode;
};

export const HomeLayout: React.FC<HomeLayoutProps> = ({
  heroSlider,
  brandNewCarousel,
  shopByCategory,
  hotPricesCarousel,
}) => (
  <div className="min-h-screen flex flex-col">
    <main className="flex-1 max-w-[1200px] w-full mx-auto px-4 sm:px-8 pt-[56px]">
      <div className="max-w-[1200px] w-full flex flex-col gap-12 md:gap-16 lg:gap-20">
        <section>{heroSlider}</section>

        <section className="w-full">{brandNewCarousel}</section>

        <section className="w-full">{shopByCategory}</section>

        <section className="w-full">{hotPricesCarousel}</section>
      </div>
    </main>
  </div>
);
