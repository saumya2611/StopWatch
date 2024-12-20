import React, { useEffect, useState } from "react";
import Button from "./Button";

const StopWatch = () => {
  const [isActive, setIsActive] = useState(false);
  const [timeInSeconds, setTimeInSeconds] = useState(0);

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
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
    let interval = null;
    if (isActive === true) {
      interval = setInterval(() => {
        setTimeInSeconds((preValue) => {
          return preValue + 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeInSeconds]);

  return (
    <>
      <div className="mt-8 text-6xl flex justify-center">
        <span>{formatTime(timeInSeconds)}</span>
      </div>
      <div className="mt-6 p-5 flex items-center justify-around">
        <Button
          title="start"
          className={"text-gray-50 bg-slate-500	px-8 py-2 rounded-md"}
          onClick={startTimer}
        />
        <Button
          title="Pause"
          className={"text-gray-50 bg-slate-500	px-8 py-2 rounded-md"}
          onClick={pauseTimer}
        />
        <Button
          title="Reset"
          className={"text-gray-50 bg-slate-500	px-8 py-2 rounded-md"}
          onClick={resetTimer}
        />
      </div>
    </>
  );
};

export default StopWatch;
