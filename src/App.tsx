import { useState } from 'react';
import './App.css';
import { ButtonCart } from './components/atoms/Buttons/ButtonCart';
import { ButtonSelect } from './components/atoms/Buttons/ButtonSelect';
import { Typography } from './components/atoms/Typography/Typography';
import { ButtonArrow } from './components/atoms/Buttons/ButtonIcon';
export const App: React.FC = () => {
  const [isAdded, setIsAdded] = useState<boolean>(false);
  return (
    <>
      <div className="flex flex-col items-center gap-2">
        {/* Cart Button usage with Typography */}
        <ButtonCart
          className="w-40 h-12"
          handleClick={() => setIsAdded(!isAdded)}
          isSelected={isAdded}
        >
          <Typography level="button">Add to cart</Typography>
        </ButtonCart>

        {/* Select Buttons usage with Typography for slider and capacity phone gb */}
        <ButtonSelect
          className="px-2 py-1"
          handleClick={() => setIsAdded(!isAdded)}
          isSelected={isAdded}
        >
          <Typography level="button">64 GB</Typography>
        </ButtonSelect>
        <ButtonSelect
          className="px-2 py-1"
          handleClick={() => setIsAdded(!isAdded)}
          isSelected={isAdded}
        >
          <Typography level="button">256 GB</Typography>
        </ButtonSelect>

        {/* Arrow Buttons usage */}

        <ButtonArrow
          className="w-10 h-10"
          handleClick={() => setIsAdded(!isAdded)}
          isDisabled={isAdded}
        >
          {/* <Icon src="" alt="TEst" />  USE ICON COMPONENT HERE WITH SRC within the img tag */}
          <img
            className="w-5 h-5"
            src="/public/favicon.svg"
            alt="dfvfvf"
          />
        </ButtonArrow>

        <ButtonArrow
          className="w-10 h-10"
          handleClick={() => setIsAdded(!isAdded)}
          isSelected={isAdded}
        >
          {/* <Icon src="" alt="TEst" />  USE ICON COMPONENT HERE WITH SRC within the img tag */}
          <img
            className="w-5 h-5"
            src="/public/favicon.svg"
            alt="dfvfvf"
          />
        </ButtonArrow>
      </div>
    </>
  );
};

export default App;
