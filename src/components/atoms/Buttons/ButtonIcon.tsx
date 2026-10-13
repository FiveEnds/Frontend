import type React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
  handleClick: () => void;
  isDisabled?: boolean;
  isSelected?: boolean;
  // src?: string;
};

export const ButtonArrow: React.FC<Props> = ({
  className,
  handleClick,
  isDisabled,
  isSelected,
  // src,
}) => (
  <button
    type="button"
    className={classNames(
      'border flex justify-center items-center transition-all duration-400 ease-in-out',
      className,
      {
        'border-elements': isSelected || isDisabled,
        'border-icons enabled:hover:border-primary': !isSelected && !isDisabled,
      },
    )}
    onClick={handleClick}
    disabled={isDisabled}
  >
    {/* <Icon src={src} /> */}
  </button>
);
