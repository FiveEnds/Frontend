import { ButtonSelect } from '../../atoms/Buttons/ButtonSelect';
import { Typography } from '../../atoms/Typography/Typography';

type Props = {
  sum?: number;
  amount?: number;
};

export const Checkout: React.FC<Props> = ({ sum = 0, amount = 0 }) => {
  return (
    <div className="w-full border border-elements flex flex-col items-center p-6">
      <Typography level="h2">${sum}</Typography>
      <Typography
        level="body"
        className="text-secondary"
      >
        Total for {amount} items
      </Typography>

      <span className="h-px w-full bg-elements my-6" />
      <ButtonSelect
        content="Checkout"
        className="h-12 w-full bg-primary text-white flex-center"
        handleClick={() => console.log('Checkout')}
        isSelected={true}
      />
    </div>
  );
};
