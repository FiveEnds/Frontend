import type React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
  handleClick: () => void;
  isSelected: boolean;
};

const variant = {
  default: 'ring-elements hover:ring-icons ',
  selected: 'ring-primary',
};

export const ButtonColor: React.FC<Props> = ({
  className,
  handleClick,
  isSelected,
}) => (
  <button
    type="button"
    className={classNames(
      `w-7.5 h-7.5 rounded-full border-2 border-white
      ring-1
      transition-all duration-300 ease-in-out
      ${className}`,
      {
        [variant.selected]: isSelected,
        [variant.default]: !isSelected,
      },
    )}
    onClick={handleClick}
  ></button>
);
