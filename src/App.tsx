import './App.css';
import { Icon } from './components/atoms/Icon/Icon';
import { IconNotification } from './components/molecules/IconNotification/IconNotification';
import { ICONS } from './constants/icons';

export const App: React.FC = () => {
  return (
    <>
      <Icon
        src={ICONS.HOME}
        isDisabled={false}
      />
      <Icon src={ICONS.PLUS} />
      <Icon src={ICONS.ARROW.LEFT} />
      <Icon
        src={ICONS.HEART_FILLED}
        isDisabled={true}
      />
      <IconNotification
        src={ICONS.BAG}
        notification={13}
      />
    </>
  );
};

export default App;
