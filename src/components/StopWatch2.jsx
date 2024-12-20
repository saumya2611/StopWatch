import React, { useEffect, useState } from "react";
import Button from "./Button";

const StopWatch2 = () => {
  const [isActive, setIsActive] = useState(false);
  const [timeInSeconds, setTimeInSeconds] = useState(0);

  const formatTime = (totalSeconds) => {
    const hour = Math.floor(totalSeconds / 3600);
    console.log("StopWatch hour ========>", hour);

    const minutes = Math.floor((totalSeconds % 3600) / 60);
    console.log("StopWatch minutes ========>", hour);

    const seconds = Math.floor(totalSeconds % 60);
    console.log("StopWatch seconds ========>", hour);

    return `${hour.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setTimeInSeconds(0);
    setIsActive(false);
  };

  useEffect(() => {
    let interval = null;
    if (isActive === true) {
      interval = setInterval(() => {
        setTimeInSeconds((preValue) => {
          return preValue + 1;
        });
      }, 1000);
      return () => {
        if (interval) clearInterval(interval);
      };
    }
  }, [isActive, timeInSeconds]);
  // isActive --> false
  return (
    <>
      <div className="mt-8 text-6xl text-black flex justify-center pt-8 ">
        <span>{formatTime(timeInSeconds)}</span>
      </div>
      <div className="flex justify-between sm:justify-around items-center mt-8 pb-7 sm:mt-6 sm:p-5 ">
        <Button
          title={"Start"}
          className={
            "rounded-lg bg-black text-white px-8 py-2 disabled:bg-slate-500"
          }
          onClick={startTimer}
          isdisable={isActive === true} // false -> false == true -> false
        />

        <Button
          title={"Pause"}
          className={
            "rounded-lg bg-black text-white px-8 py-2 disabled:bg-slate-500 mx-1"
          }
          onClick={pauseTimer}
          isdisable={isActive === false} // false --> false == false --> true
        />
        <Button
          title={"Reset"}
          className={"rounded-lg bg-black text-white px-8 py-2"}
          onClick={resetTimer}
        />
      </div>
    </>
  );
};

export default StopWatch2;
