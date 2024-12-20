import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import { useEffect, useState } from "react";
import Timer from "./components/Timer";
import StopWatch from "./components/StopWatch";
import Timer2 from "./components/Timer2";
import StopWatch2 from "./components/StopWatch2";

function App() {
  const [activeButton, setActiveButton] = useState("timer");

  useEffect(() => {
    // console.log(activeButton);
  }, [activeButton]);

  return (
    <div className=" h-[100vh] bg-gray-50 flex items-center justify-center ">
      <div className="shadow-md rounded-lg bg-white p-5 w-[350px] sm:w-[500px] sm:p-4">
        <div className="bg-gray-300 rounded-md flex justify-between items-center sm: p-2">
          <Button
            className={` px-8 py-2 sm:p-2  sm:w-[200px] rounded-sm ${
              activeButton == "timer" ? "bg-white" : "bg-gray-300"
            }`}
            title={"Timer"}
            onClick={() => setActiveButton("timer")}
          />
          <Button
            className={`px-8 py-2 sm:p-2 sm:w-[200px] rounded-sm ${
              activeButton == "stopwatch" ? "bg-white" : "bg-gray-300"
            }`}
            title={"Stopwatch"}
            onClick={() => {
              setActiveButton("stopwatch");
            }}
          />
        </div>
        {activeButton == "timer" ? <Timer2 /> : <StopWatch2 />}
      </div>
    </div>
  );
}

export default App;
