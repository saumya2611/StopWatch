import React, { useEffect, useState } from "react";
import Button from "./Button";

const Timer = () => {
  const [timeInSeconds, setTimeInSeconds] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isActive, setIsActive] = useState(false);

  const calculteTime = () => {
    console.log("totalSecs = inputValue * 60;");

    const totalSecs = inputValue * 60;
    console.log(
      "STEP 1 ===================================> totalSecs::",
      totalSecs
    );
    setTimeInSeconds(totalSecs);
    setInputValue("");
  };

  const startTimer = () => {
    if (timeInSeconds > 0) {
      console.log("timeInSeconds > 0");
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

  const formatTime = (totalSeconds) => {
    console.log("STEP 2 =========>");
    console.log("totalSeconds:", totalSeconds);

    const hours = Math.floor(totalSeconds / 3600);
    console.log("hours:", hours);

    const minutes = Math.floor((totalSeconds % 3600) / 60);
    console.log("minutes:", minutes);

    const seconds = totalSeconds % 60;
    console.log("seconds:", seconds);

    console.log(
      "formatTime:",
      `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
    );

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    console.log("STEP 3");

    let interval = null;
    console.log("isActive==================>", isActive);

    if (isActive === true && timeInSeconds > 0) {
      interval = setInterval(() => {
        console.log("useEffect prevTime timeInSeconds::", timeInSeconds);
        setTimeInSeconds((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeInSeconds === 0) {
      console.log("else if condition");
      setIsActive(false);
      if (interval) clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeInSeconds]);

  return (
    <>
      <div className="mt-4 flex">
        <input
          type="number"
          name="email"
          class="mt-1 px-3 py-5 bg-white inline-block border shadow-sm border-gray-300 placeholder-slate-400 focus:outline-none focus:border-gray-500 focus:ring-grey-500  w-full rounded-md sm:text-sm "
          placeholder="Enter minutes"
          value={inputValue}
          onChange={(ev) => setInputValue(ev.target.value)}
        />
        <Button
          onClick={calculteTime}
          title="Set"
          className={"ml-3 text-gray-50 bg-black	px-9 rounded-md"}
        />
      </div>
      {/* Show timeInSeconds in HH:MM:SS format */}
      <div className="mt-8 text-6xl flex justify-center">
        <span>{formatTime(timeInSeconds)}</span>
      </div>
      <div className="mt-8 p-5 flex items-center justify-around">
        <Button
          onClick={startTimer}
          title="Start"
          className={
            "text-gray-50 bg-black	px-8 py-2 rounded-md disabled:bg-slate-600"
          }
          isdisable={isActive === true}
        />
        <Button
          onClick={stopTimer}
          title="Stop"
          className={
            "text-gray-50 bg-black	px-8 py-2 rounded-md disabled:bg-slate-600"
          }
          isdisable={isActive === false}
        />
        <Button
          onClick={resetTimer}
          title="Reset"
          className={"text-gray-50 bg-black	px-8 py-2 rounded-md"}
        />
      </div>
    </>
  );
};

export default Timer;
