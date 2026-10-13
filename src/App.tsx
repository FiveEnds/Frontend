import { useState } from 'react';
import './App.css';
import { ButtonCart } from './components/atoms/Buttons/ButtonCart';
import { ButtonSelect } from './components/atoms/Buttons/ButtonSelect';
import { ButtonIcon } from './components/atoms/Buttons/ButtonIcon';
import { ICONS } from './constants/icons';
import { ButtonColor } from './components/atoms/Buttons/ButtonColor';

export const App: React.FC = () => {
  const [isAdded, setIsAdded] = useState<boolean>(false);
  return (
    <>
      <div className="flex flex-col items-center gap-2">
        {/* Cart Button usage */}
        <ButtonCart
          content={isAdded ? 'Added' : 'Add to Cart'}
          className="w-40 h-12"
          handleClick={() => setIsAdded(!isAdded)}
          isSelected={isAdded}
        />

        {/* Select Button usage */}
        <ButtonSelect
          content="64gb"
          className="w-40 h-12"
          handleClick={() => setIsAdded(!isAdded)}
          isSelected={isAdded}
        />

        <div className="flex gap-1">
          <ButtonSelect
            content="1"
            className="w-12 h-12"
            handleClick={() => setIsAdded(!isAdded)}
            isSelected={isAdded}
          />
          <ButtonSelect
            content="2"
            className="w-12 h-12"
            handleClick={() => setIsAdded(!isAdded)}
            isSelected={isAdded}
          />
          <ButtonSelect
            content="3"
            className="w-12 h-12"
            handleClick={() => setIsAdded(!isAdded)}
            isSelected={isAdded}
          />
          <ButtonSelect
            content="4"
            className="w-12 h-12"
            handleClick={() => setIsAdded(!isAdded)}
            isSelected={isAdded}
          />
        </div>

        {/* Color Button usage */}
        <ButtonIcon
          src={ICONS.ARROW.DOWN}
          handleClick={() => setIsAdded(!isAdded)}
          isDisabled={isAdded}
        />
        <ButtonIcon
          src={ICONS.HEART_EMPTY}
          handleClick={() => setIsAdded(!isAdded)}
          isSelected={isAdded}
        />
        <div className="flex gap-1">
          <ButtonColor
            className="bg-red-200"
            handleClick={() => setIsAdded(!isAdded)}
            isSelected={isAdded}
          />
          <ButtonColor
            className="bg-red-500"
            handleClick={() => setIsAdded(!isAdded)}
            isSelected={isAdded}
          />
          <ButtonColor
            className="bg-red-900"
            handleClick={() => setIsAdded(!isAdded)}
            isSelected={isAdded}
          />
        </div>
      </div>
    </>
  );
};

export default App;
