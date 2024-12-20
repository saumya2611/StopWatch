import React, { useEffect, useState } from "react";
import Button from "./Button";

const Timer2 = () => {
  const [isActive, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const [timeInSeconds, setTimeInSeconds] = useState(0);

  const calculteTime = () => {
    const totalSeconds = inputValue * 60;
    console.log("totalSeconds;;", totalSeconds);
    setTimeInSeconds(totalSeconds);
    setInputValue("");
  };

  const formatTime = (totalSeconds) => {
    console.log("totalSeconds =======>", totalSeconds);
    const hour = Math.floor(totalSeconds / 3600);
    console.log("hour =======>", hour);

    const minutes = Math.floor((totalSeconds % 3600) / 60);
    console.log("minutes =====>", minutes);
    const seconds = Math.floor(totalSeconds % 60);
    console.log("seconds ==========>", seconds);

    console.log(
      "Format String =======>",
      `${hour.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
    );

    return `${hour.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const startTimer = () => {
    if (timeInSeconds > 0) {
      setIsActive(true);
    }
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setInputValue("");
    setTimeInSeconds(0);
  };

  useEffect(() => {
    console.log("isActive==========>", isActive);
    console.log("timeInSeconds===use effect=======>", timeInSeconds);
    let interval = null;
    if (isActive === true && timeInSeconds > 0) {
      interval = setInterval(() => {
        setTimeInSeconds((preValue) => {
          return preValue - 1;
        });
      }, 1000);
    } else if (timeInSeconds === 0) {
      setTimeInSeconds(false);
      if (interval) clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeInSeconds]);

  return (
    <>
      <div className="flex mt-5 justify-between">
        <input
          type="number"
          className="w-[400px] border-2 rounded-md px-3 py-2 focus:ring-grey-500 focus:outline-none focus:border-gray-500 shadow-sm bg-white border-gray-300 placeholder-slate-400"
          placeholder="Enter minutes"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          title={"Set"}
          onClick={calculteTime}
          className={"rounded-md px-8 py-2 ml-3 text-gray-50 bg-black"}
        />
      </div>
      <div className="mt-4 sm:mt-6 text-6xl flex justify-center pt-7">
        <span>{formatTime(timeInSeconds)}</span>
      </div>
      <div className="flex justify-between sm:justify-around items-center mt-8 pb-7 sm:mt-6 sm:p-5">
        <Button
          title={"Start"}
          className={
            "text-gray-50 bg-black rounded-md px-8 py-2 disabled:bg-slate-500"
          }
          onClick={startTimer}
          isdisable={isActive === true}
        />
        <Button
          title={"Stop"}
          className={
            "text-gray-50 bg-black rounded-md px-8 py-2 disabled:bg-slate-600"
          }
          onClick={stopTimer}
          isdisable={isActive === false}
        />
        <Button
          title={"Reset"}
          className={"text-gray-50 bg-black rounded-md px-8 py-2 "}
          onClick={resetTimer}
        />
      </div>
    </>
  );
};

export default Timer2;

/*
git add .

git commit -m "Added stopwatch & timer"

git push origin main

*/

/*
 */
