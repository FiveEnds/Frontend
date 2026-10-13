import type React from 'react';
import classNames from 'classnames';
import { Typography } from '../Typography/Typography';

type Props = {
  content: React.ReactNode;
  className?: string;
  handleClick: () => void;
  isSelected: boolean;
};

const variant = {
  default: 'border-elements text-black hover:border-primary',
  selected: 'bg-primary text-white',
};

export const ButtonSelect: React.FC<Props> = ({
  content,
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
    <Typography level="button">{content}</Typography>
  </button>
);
