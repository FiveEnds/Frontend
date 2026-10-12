import './App.css';
import { Checkout } from './components/molecules/Checkout/Checkout';

export const App: React.FC = () => {
  return (
    <span className="flex m-4">
      <Checkout
        sum={100}
        amount={3}
      />
    </span>
  );
};

export default App;
