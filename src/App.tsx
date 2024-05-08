import { Heading } from "./components/Heading";
import { ToggleSwitch } from "./components/ToggleSwitch";
import { Info } from "./components/Info";
import { Range } from "./components/Slider";
import { PurchaseButton } from "./components/PurchaseButton";
import { useState } from "react";
export const App = () => {
  // const range = [5, 10, 15, 20, 25, 30];
  // const credits = [500, 1200, 1700, 2500, 3900, 5000];
  const [range, setRange] = useState([5, 10, 15, 20, 25, 30]);
  const [credit, setCredit] = useState([500, 1200, 1700, 2500, 3900, 5000]);
  const [sliderValue, setSliderValue] = useState(5);
  const [checked, setChecked] = useState(true);

  return (
    <>
      <div className="h-auto  w-4/5  p-4 border-2   border-purple-500 m-10 rounded-lg">
        <Heading />
        <ToggleSwitch setSliderValue={setSliderValue} checked={checked} setChecked={setChecked}/>
        {/* <br /> */}
        <Info />
        {/* <br /> */}
        <Range range={range} credit={credit} sliderValue={sliderValue} setSliderValue={setSliderValue} checked={checked} setChecked={setChecked}/>
        <PurchaseButton range={range} credit={credit} sliderValue={sliderValue+5}/>
      </div>
    </>
  );
};
