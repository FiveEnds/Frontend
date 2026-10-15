import React from 'react';

type HomeLayoutProps = {
  heroSlider: React.ReactNode; // Перша частина: Секція з слайдером
  brandNewCarousel: React.ReactNode; // Друга частина: "Brand new models" з карток + кнопки
  shopByCategory: React.ReactNode; // Третя частина: "Shop by category"
  hotPricesCarousel: React.ReactNode; // Четверта частина: "Hot prices" зі знижками
};

export const HomeLayout: React.FC<HomeLayoutProps> = ({
  heroSlider,
  brandNewCarousel,
  shopByCategory,
  hotPricesCarousel,
}) => (
  <div className="min-h-screen flex flex-col">
    <main className="flex-1 max-w-[1200px] w-full mx-auto px-4 sm:px-8 py-6">
      <div className="px-4 md:px-6 lg:px-8 max-w-[1200px] w-full m-auto flex flex-col gap-12 md:gap-16 lg:gap-20 mt-6 mb-16">
        <section>{heroSlider}</section>

        <section className="w-full">{brandNewCarousel}</section>

        <section className="w-full">{shopByCategory}</section>

        <section className="w-full">{hotPricesCarousel}</section>
      </div>
    </main>
  </div>
);
