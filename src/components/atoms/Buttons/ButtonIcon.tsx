import type React from 'react';
import classNames from 'classnames';

type Props = {
  children?: React.ReactNode;
  className?: string;
  handleClick: () => void;
  isDisabled?: boolean;
  isSelected?: boolean;
};

export const ButtonArrow: React.FC<Props> = ({
  children,
  className,
  handleClick,
  isDisabled,
  isSelected,
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
    {children}
  </button>
);
