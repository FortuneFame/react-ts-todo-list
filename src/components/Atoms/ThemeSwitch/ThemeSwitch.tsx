import { FC, useEffect, useState } from "react";

import './ThemeSwitch.scss';
import { ReactComponent } from '../../../assets/switch.svg';

interface Props {
  onClick: () => void;
}

const Switch: FC<Props> = ({ onClick }) => {
  const initialTheme = localStorage.getItem('theme');
  const [isChecked, setIsChecked] = useState(initialTheme === 'dark');


  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setIsChecked(savedTheme === 'dark');
  }, []);

  const handleToggle = () => {
    onClick();
    setIsChecked((prevChecked) => !prevChecked);
    const themeToSave = isChecked ? 'light' : 'dark';
    localStorage.setItem('theme', themeToSave);
  };

  return (
    <div>
      <label className="theme-switch">
        <input
          type="checkbox"
          className="theme-switch__checkbox"
          checked={isChecked}
          onChange={handleToggle}
        />
                <div className="theme-switch__container">
                    <div className="theme-switch__clouds"></div>
                    <div className="theme-switch__stars-container">
                        <ReactComponent />
                    </div>
                    <div className="theme-switch__circle-container">
                        <div className="theme-switch__sun-moon-container">
                            <div className="theme-switch__moon">
                                <div className="theme-switch__spot"></div>
                                <div className="theme-switch__spot"></div>
                                <div className="theme-switch__spot"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </label>
        </div>
    );
};

export default Switch