import './App.css';
import { Icon } from './components/atoms/Icon/Icon';
import { icons } from './constants/icons';

export const App: React.FC = () => {
  return (
    <>
      <Icon
        src={icons.HOME}
        isDisabled={false}
      />
      <Icon src={icons.PLUS} />
      <Icon src={icons.ARROW.LEFT} />
      <Icon
        src={icons.HEART_FILLED}
        isDisabled={true}
      />
    </>
  );
};

export default App;
