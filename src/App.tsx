import './App.css';
import { Icon } from './components/atoms/Icon/Icon';
import { IconNotification } from './components/molecules/IconNotification/IconNotification';
import { ICONS } from './constants/icons';
import { useState } from 'react';
import { Dropdown } from './components/molecules/Dropdown';
import { Typography } from './components/atoms/Typography/Typography';
import './App.css';

export const App: React.FC = () => {
  const [value, setValue] = useState('Default');

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
      <div className="p-6">
        <Typography level="button">
          <span></span>
        </Typography>
        <Dropdown
          label="Description"
          options={['Default', 'Item', 'Another item']}
          value={value}
          onChange={setValue}
        />
      </div>
    </>
  );
};

export default App;
