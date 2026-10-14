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

  return <PhotoGallery product={product} />;
};
