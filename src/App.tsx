import './App.css';
import { Icon } from './components/atoms/Icon/icon';

export const App: React.FC = () => {
  return (
    <>
      <Icon
        src="/public/icons/home.svg"
        isDisabled={false}
      />
      <Icon src="/icons/heart-filled.svg" />
      <Icon
        src="/public/icons/arrow.svg"
        isDisabled={true}
        rotate="right"
      />
    </>
  );
};

export default App;
