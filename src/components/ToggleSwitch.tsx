import React, { useState } from "react";

interface ToggleSwitchProps {
  setSliderValue: (value: number) => void;
  checked: boolean;
  setChecked: boolean;
}
export const ToggleSwitch = ({ setSliderValue,checked,setChecked }: ToggleSwitchProps) => {
//   const [checked, setChecked] = useState(false);

  //   console.log(checked)
  const handleChange = () => {
    if (!checked) {
      setSliderValue(5);
    }
    else{
        setSliderValue(0);
    }
    setChecked(!checked);
  };

  return (
    <div className="relative inline-block w-10 h-5 ">
      <input
        type="checkbox"
        id="toggle"
        className="sr-only"
        checked={checked}
        onChange={handleChange}
      />
      <label
        htmlFor="toggle"
        className={`block w-full m-1 h-full rounded-full cursor-pointer transition-colors duration-300 ${
          checked ? "bg-teal-500" : "bg-gray-300"
        }`}
      >
        <div
          className={`absolute w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
            checked ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </label>
    </div>
  );
};
