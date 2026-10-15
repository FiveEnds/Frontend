import type React from 'react';
import { Typography } from '../Typography/Typography';
import { ICONS } from '../../../constants/icons';
import { ButtonIcon } from '../Buttons/ButtonIcon';

type ScrollTopButtonProps = {
  onClick: () => void;
};

export const ScrollToTopButton: React.FC<ScrollTopButtonProps> = ({
  onClick,
}) => {
  return (
    <div className="flex-center">
      <Typography
        level="uppercase"
        className="mr-4 text-secondary group-hover:text-primary transition-colors"
      >
        Back to top
      </Typography>
      <ButtonIcon
        className="w-8 h-8 cursor-pointer"
        src={ICONS.ARROW.UP}
        handleClick={onClick}
      />
    </div>
  );
};
