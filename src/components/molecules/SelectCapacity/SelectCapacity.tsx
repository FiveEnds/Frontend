import { ButtonSelect } from '../../atoms/Buttons/ButtonSelect';
import { Typography } from '../../atoms/Typography/Typography';

type Props = {
  availableCapacities: string[];
  selectedCapacity: string;
  handleClick: (selectedCapacity: string, option: 'color' | 'capacity') => void;
};

export const SelectCapacity: React.FC<Props> = ({
  availableCapacities,
  selectedCapacity,
  handleClick,
}) => (
  <div className="flex flex-col gap-2">
    <Typography
      level="small"
      className="text-secondary"
    >
      Select capacity
    </Typography>
    <div className="flex gap-2">
      {availableCapacities.map((capacity) => (
        <ButtonSelect
          className="px-2 pt-[7px] pb-1"
          handleClick={() => handleClick(capacity, 'capacity')}
          isSelected={selectedCapacity === capacity}
          content={capacity}
        />
      ))}
    </div>
  </div>
);
