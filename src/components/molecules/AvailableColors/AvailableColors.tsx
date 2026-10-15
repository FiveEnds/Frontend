import { COLOR_CLASS_MAP } from '../../../constants/colorClassMap';
import { ButtonColor } from '../../atoms/Buttons/ButtonColor';
import { Typography } from '../../atoms/Typography/Typography';
import cn from 'classnames';

type ClickOptions = 'color' | 'capacity';

type Props = {
  colors: string[];
  handleClick: (color: string, option: ClickOptions) => void;
  isSelected: string;
  classNames?: string;
};

export const AvailableColors: React.FC<Props> = ({
  colors,
  handleClick,
  isSelected,
  classNames,
}) => {
  return (
    <div className={cn('flex flex-col gap-2', classNames)}>
      <div className="flex justify-between">
        <Typography
          level="small"
          className="text-secondary"
        >
          Available colors
        </Typography>
        <Typography
          level="small"
          className="text-secondary"
        >
          ID: 802390
        </Typography>
      </div>
      <div className="flex gap-2">
        {colors.map((color) => (
          <ButtonColor
            key={color}
            className={cn(
              'hover-zoom',
              COLOR_CLASS_MAP[color as keyof typeof COLOR_CLASS_MAP] ||
                'bg-gray-100',
            )}
            handleClick={() => handleClick(color, 'color')}
            isSelected={isSelected === color}
          />
        ))}
      </div>
    </div>
  );
};
