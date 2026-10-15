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
  <div className="min-h-screen flex flex-col items-center">
    <main className="flex-1 max-w-[1200px] w-full mx-[16px] md:px-[32px] pt-[24px] md:pt-[56px] lg:pt-[56px] lg:pb-[80px] pb-[64px]">
      <div className="flex flex-col gap-12 md:gap-16 lg:gap-20 ">
        <section>{heroSlider}</section>

        <section className="w-full mx-[16px] md:mx-[0px] ld:mx-[0px]">
          {brandNewCarousel}
        </section>

        <section className="w-full mx-[16px] md:mx-[0px] ld:mx-[0px]">
          {shopByCategory}
        </section>

        <section className="w-full mx-[16px] md:mx-[0px] ld:mx-[0px]">
          {hotPricesCarousel}
        </section>
      </div>
    </main>
  </div>
);
