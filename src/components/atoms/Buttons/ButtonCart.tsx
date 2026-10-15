import type React from 'react';
import classNames from 'classnames';
import { Typography } from '../Typography/Typography';

type Props = {
  content: string;
  className?: string;
  handleClick: () => void;
  isSelected: boolean;
};

const variant = {
  default:
    'bg-primary border-primary text-white hover:shadow-[0_3px_13px_0_rgba(23,32,49,0.4)]',
  selected: 'bg-transparent border-green text-green',
};

export const ButtonCart: React.FC<Props> = ({
  content,
  className,
  handleClick,
  isSelected,
}) => (
  <button
    type="button"
    className={classNames(
      `flex justify-center items-center text-center border button-transition ${className}`,
      {
        [variant.default]: !isSelected,
        [variant.selected]: isSelected,
      },
    )}
    onClick={handleClick}
  >
    <Typography
      level="button"
      textColor="inherit"
    >
      {content}
    </Typography>
  </button>
);
