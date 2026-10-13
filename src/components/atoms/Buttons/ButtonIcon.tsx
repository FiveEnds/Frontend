import type React from 'react';
import classNames from 'classnames';

type Props = {
  children?: React.ReactNode;
  className?: string;
  handleClick: () => void;
  isDisabled?: boolean;
  isSelected?: boolean;
};

const variant = {
  selected: 'border-elements',
};

export const ButtonIcon: React.FC<Props> = ({
  children,
  className,
  handleClick,
  isDisabled,
  isSelected,
}) => (
  <button
    type="button"
    className={classNames(
      `border
      transition-all
      duration-400
      ease-in-out
      ${className}`,
      {
        'disabled:border-elements': isDisabled,
        'enabled:hover:border-primary border-icons': !isSelected && !isDisabled,
        [variant.selected]: isSelected && !isDisabled,
      },
    )}
    onClick={handleClick}
    disabled={isDisabled}
  >
    {children}
  </button>
);
