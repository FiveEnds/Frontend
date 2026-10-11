import cn from 'classnames';

type Props = {
  src: string;
  isDisabled?: boolean;
  rotate?: 'up' | 'right' | 'down' | 'left';
};

const RED_HEART_URL = '/icons/heart-filled.svg';

const rotations = {
  up: 'rotate-0',
  right: 'rotate-90',
  down: 'rotate-180',
  left: '-rotate-90',
};

export const Icon: React.FC<Props> = ({ src, isDisabled, rotate }) => {
  const isRedHeart = src === RED_HEART_URL;

  return (
    <span
      className={cn(
        'inline-block w-4 h-4 bg-no-repeat bg-center bg-contain',
        rotations[rotate || 'up'],
        {
          'bg-red': isRedHeart,
          'bg-primary': !isDisabled,
          'bg-icons': isDisabled,
        },
      )}
      style={{
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
        maskRepeat: 'no-repeat',
        maskPosition: 'center',
        maskSize: 'contain',
      }}
    />
  );
};
