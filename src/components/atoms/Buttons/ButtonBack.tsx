import { useNavigate } from 'react-router-dom';
import { Icon } from '../Icon/Icon';
import { ICONS } from '../../../constants/icons';
import { Typography } from '../Typography/Typography';

export const ButtonBack: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <button onClick={handleBack}>
      <div className="flex gap-1 items-center ">
        <Icon src={ICONS.ARROW.LEFT} />
        <Typography
          level="small"
          className="text-secondary justify-self-center"
        >
          Back
        </Typography>
      </div>
    </button>
  );
};
