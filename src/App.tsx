import './App.css';
import { PhoneSpecsTable } from './components/molecules/PhoneSpecsTable/PhoneSpecsTable';
import { PhoneTechSpecs } from './components/organisms/PhoneTechSpecs/PhoneTechSpecs';

const specs = {
  id: 'apple-iphone-11-128gb-black',
  namespaceId: 'apple-iphone-11',
  name: 'Apple iPhone 11 128GB Black',
  capacityAvailable: ['64GB', '128GB', '256GB'],
  capacity: '128GB',
  priceRegular: 1100,
  priceDiscount: 1050,
  colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
  color: 'black',
  screen: "6.1' IPS",
  resolution: '1792x828',
  processor: 'Apple A13 Bionic',
  ram: '4GB',
  camera: '12 Mp + 12 Mp + 12MP',
  zoom: 'Digital, 5x',
  cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
};

export const App: React.FC = () => {
  return (
    <>
      <PhoneTechSpecs>
        <PhoneSpecsTable specs={specs} />
      </PhoneTechSpecs>
    </>
  );
};

export default App;
