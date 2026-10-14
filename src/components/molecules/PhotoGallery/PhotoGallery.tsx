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
      'flex justify-center items-center min-w-0 w-full border border-elements p-[5%]',
      {
        'border-primary': currentPhoto === imageSrc,
      },
    )}
    onClick={() => setCurrentPhoto(imageSrc)}
  >
    <img
      src={imageSrc}
      alt=""
      className={cn('object-contain w-full aspect-square')}
    />
  </button>
);

export const PhotoGallery: React.FC<Props> = ({ product }) => {
  const [currentPhoto, setCurrentPhoto] = useState<string>(product.images[0]);

  return (
    <div
      className="
    grid grid-cols-subgrid
    min-[1200px]:col-span-12

    min-[640px]:max-[1200px]:col-span-7
    min-[320px]:max-[640px]:col-span-4
    "
    >
      <div
        className="
      order-1
      min-[1200px]:col-span-2

      min-[640px]:max-[1200px]:col-span-1
      
      min-[320px]:max-[640px]:col-span-4
      min-[320px]:max-[640px]:order-2
      "
      >
        <div
          className={cn(
            'flex flex-col gap-2 min-[1200px]:gap-4 min-[320px]:max-[640px]:flex-row',
          )}
        >
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
      <div
        className="
      min-w-0 w-full order-2 p-2
      min-[1200px]:col-span-10

      min-[640px]:max-[1200px]:col-span-6

      min-[320px]:max-[640px]:col-span-4
      min-[320px]:max-[640px]:order-1
      "
      >
        <img
          src={currentPhoto}
          alt={product.name}
          className="object-contain block w-full aspect-square"
        />
      </div>
    </div>
  );
};
