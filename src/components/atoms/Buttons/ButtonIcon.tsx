import type React from 'react';
import classNames from 'classnames';
import { Icon } from '../Icon/Icon';

type Props = {
  className?: string;
  handleClick?: () => void;
  isDisabled?: boolean;
  isSelected?: boolean;
  src: string;
};

const variant = {
  selected: 'border-elements',
};

export const ButtonIcon: React.FC<Props> = ({
  className,
  handleClick,
  isDisabled,
  isSelected,
  src,
}) => (
  <button
    type="button"
    className={classNames(
      'border flex justify-center items-center transition-all duration-400 ease-in-out',
      className,
      {
        'disabled:border-elements': isDisabled,
        'enabled:hover:border-primary border-icons': !isSelected && !isDisabled,
        [variant.selected]: isSelected && !isDisabled,
      },
    )}
    onClick={handleClick}
    disabled={isDisabled}
  >
    <Icon
      isDisabled={isDisabled}
      src={src}
    />
  </button>
);
