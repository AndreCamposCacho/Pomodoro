import { useEffect, useState } from "react";
import useUserOptionStore from "../stores/OptionsStore";
import useIsPlaying from "../stores/isPlayingStore";

const Timer = () => {
  const isPlayingStore = useIsPlaying();

  let storedOptions = useUserOptionStore();

  let [minutes, setMinutes] = useState(storedOptions.timerMinutes);
  let [secondsUnits, setSecondsUnits] = useState(0);
  let [secondsTens, setSecondsTens] = useState(0);

  useEffect(() => {
    if (!isPlayingStore.isPlaying){
      setMinutes(storedOptions.timerMinutes);
      setSecondsUnits(0);
      setSecondsTens(0);
    }
    if(isPlayingStore.isPlaying){
      if (minutes === 0 && secondsTens === 0 && secondsUnits === 0) {
        secondsUnits = secondsUnits;
        //Condition that stops this useEffect
      } else if (secondsUnits === 0 && secondsTens != 0) {
        setTimeout(() => {
          setSecondsTens(secondsTens - 1);
          setSecondsUnits(9);
        }, 1000);
      } else if (secondsTens === 0 && secondsUnits === 0) {
        setTimeout(() => {
          setMinutes(minutes - 1);
          setSecondsUnits(9);
          setSecondsTens(5);
        }, 1000);
      } else {
        setTimeout(() => {
          setSecondsUnits(secondsUnits - 1);
        }, 1000);
      } //separar isto para uma função
    }
  }, [isPlayingStore.isPlaying, secondsUnits, storedOptions.timerMinutes]);

  return (
    <div className="flex flex-col items-center bg-sky-100 w-fit rounded-lg px-32 shadow-inner">
      <div id="topic" className="text-sky-800 font-medium text-lg py-4">
        Pomodoro Title
      </div>
      <div id="timer" className="text-sky-800 font-bold text-5xl py-5">
        {minutes + ":" + secondsTens + secondsUnits}
      </div>
    </div>
  );
};

export default Timer;
