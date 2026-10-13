import { Typography } from '../../atoms/Typography/Typography';

type Props = {
  screen: string;
  capacity: string;
  ram: string;
};

export const ProductCardSpecs: React.FC<Props> = ({
  screen,
  capacity,
  ram,
}) => (
  <>
    <div className="flex justify-between pt-2 pb-2">
      <div className="flex flex-col gap-2">
        <Typography className="text-secondary">Screen</Typography>
        <Typography className="text-secondary">Capacity</Typography>
        <Typography className="text-secondary">RAM</Typography>
      </div>
      <div className="flex flex-col gap-2">
        <Typography className="text-end">{screen}</Typography>
        <Typography className="text-end">{capacity}</Typography>
        <Typography className="text-end">{ram}</Typography>
      </div>
    </div>
  </>
);
