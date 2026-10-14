import { PhotoGallery } from '../components/molecules/PhotoGallery/PhotoGallery';

export const VladyslavChuikov = () => {
  const product = {
    images: [
      'img/phones/apple-iphone-11/black/00.webp',
      'img/phones/apple-iphone-11/black/01.webp',
      'img/phones/apple-iphone-11/black/02.webp',
      'img/phones/apple-iphone-11/black/03.webp',
      'img/phones/apple-iphone-11/black/04.webp',
    ],
  };

  return (
    <div
      className="
      grid grid-cols-1 gap-x-4 w-full mx-auto

      min-[1200px]:grid-cols-[repeat(24,32px)]
      min-[1200px]:w-fit

      min-[640px]:max-[1200px]:grid-cols-[repeat(12,minmax(0,1fr))]
      min-[640px]:max-[1200px]:px-6
      min-[640px]:max-[1200px]:gap-x-4


      min-[320px]:max-[640px]:grid-cols-[repeat(4,minmax(0,1fr))]
      min-[320px]:max-[640px]:px-4
      min-[320px]:max-[640px]:gap-x-4
      "
    >
      <PhotoGallery product={product} />
      {/* <div
        className="
            col-span-1 h-100 bg-amber-100
            min-[320px]:max-[639px]:col-span-4
            min-[640px]:max-[1199px]:col-span-12
            min-[1200px]:col-span-12"
      ></div> */}
    </div>
  );
};
