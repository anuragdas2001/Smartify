// import React from "react";
import { Slider } from "@nextui-org/react";
import { useState } from "react";

interface SliderProps {
  range: number[];
  credit: number[];
  sliderValue: number;
  setSliderValue: (value: number) => void;
  checked: boolean;
  setChecked: boolean;
}

export const Range = ({ range, credit, sliderValue,setSliderValue,checked, setChecked }: SliderProps) => {
  // const range = [5, 10, 15, 20, 25, 30];
  // const credits = [500, 1200, 1700, 2500, 3900, 5000];
  
  return (
    <>
      <div className="ml-0 p-0 xs:grid-cols-1 sm:grid-cols-3 overflow-hidden">
        <div className="w-full mt-5 mb-10 ml-6 grid-cols-1 sm:grid-cols-3 p-1 relative">
          {/* Adjusted width and margin */}
          <Slider
             size="sm"
             maxValue={30}
             value={sliderValue}
             className="w-4/5"
             color="secondary"
             step={6}
             onChange={(value) => {
               setSliderValue(value);
             }}
          />
        </div>
        <div className="-mt-16 pt-5 flex sm:grid-cols-3 absolute overflow-hidden">
          {range.map((r) => {
            return (
              <span
                key={r}
                className=" xs:text-xs md:text-sm lg:text-lg xl:text-xl px-1 sm:px-4 md:px-4 lg:px-10"
              >
                ${r}
              </span>
            );
          })}
        </div>
        <div>
          <div className="-mt-16 pt-12 flex sm:grid-cols-3 absolute overflow-hidden">
            {credit.map((r) => {
              return (
                <span
                  key={r}
                  className=" xs:text-xs sm:text-xs px-1 sm:px-6  text-slate-500"
                >
                  {r} credits
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
