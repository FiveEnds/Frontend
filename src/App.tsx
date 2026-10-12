import './App.css';
import { IconNotification } from './components/molecules/IconNotification/IconNotification';
import { ICONS } from './constants/Icons';

export const App: React.FC = () => {
  return (
    <>
      <IconNotification
        src={ICONS.BAG}
        notification={13}
      />
    </>
  );
};

export default App;
