import type React from 'react';
import classNames from 'classnames';

type Props = {
  children?: React.ReactNode;
  className?: string;
  handleClick: () => void;
  isSelected: boolean;
};

const variant = {
  default: 'border-elements text-black hover:border-primary',
  selected: 'bg-primary text-white',
};

export const ButtonSelect: React.FC<Props> = ({
  children,
  className,
  handleClick,
  isSelected,
}) => (
  <button
    type="button"
    className={classNames(
      `text-center border transition-all duration-400 ease-in-out ${className}`,
      {
        [variant.default]: !isSelected,
        [variant.selected]: isSelected,
      },
    )}
    onClick={handleClick}
  >
    {children}
  </button>
);
