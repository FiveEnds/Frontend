import cn from 'classnames';
import { useState } from 'react';

// import type { Product } from '../../../types/Product';
// uncomment string upper

type Props = {
  product: object; //change type with Product when api will be ready
};

type ButtonProps = {
  imageSrc: string;
  currentPhoto: string;
  setCurrentPhoto: (src: string) => void;
};

const Button = ({ imageSrc, currentPhoto, setCurrentPhoto }: ButtonProps) => (
  <button
    className={cn(
      'flex justify-center items-center size-[80px] mb-4 last:mb-0 border border-elements',
      {
        'border-primary': currentPhoto === imageSrc,
      },
    )}
    onClick={() => setCurrentPhoto(imageSrc)}
  >
    <img
      src={imageSrc}
      alt=""
      className={cn('object-contain size-[70px]')}
    />
  </button>
);

export const PhotoGallery: React.FC<Props> = ({ product }) => {
  const [currentPhoto, setCurrentPhoto] = useState<string>(product.images[0]);

  return (
    <div className="flex m-3">
      <div className="h-116 overflow-auto ">
        <div className={cn('flex flex-col')}>
          {product.images.map((image) => (
            <Button
              key={image}
              imageSrc={image}
              currentPhoto={currentPhoto}
              setCurrentPhoto={setCurrentPhoto}
            />
          ))}
        </div>
      </div>
      <img
        src={currentPhoto}
        alt="mobilka ept"
        className="w-116 h-116 object-contain ml-4"
      />
    </div>
  );
};
