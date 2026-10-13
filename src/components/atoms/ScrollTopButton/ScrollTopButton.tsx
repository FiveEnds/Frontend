import type React from 'react';
import { Typography } from '../Typography/Typography';
import { Icon } from '../Icon/Icon';
import { ICONS } from '../../../constants/icons';

type ScrollTopButtonProps = {
  onClick: () => void;
};

export const ScrollToTopButton: React.FC<ScrollTopButtonProps> = ({
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="group flex items-center cursor-pointer"
      type="button"
    >
      <Typography
        level="uppercase"
        className="mr-4 text-secondary group-hover:text-primary transition-colors"
      >
        Back to top
      </Typography>
      <div className="flex items-center justify-center w-8 h-8 border border-secondary group-hover:border-primary transition-colors">
        <Icon src={ICONS.ARROW.UP} />
      </div>
    </button>
  );
};
