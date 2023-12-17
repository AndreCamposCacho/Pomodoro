import PlayPause from "./components/PlayPause";
import Timer from "./components/Timer";
import TimerOptions from "./components/TimerOptions";
import { useState } from "react";

function App() {
  const [timerMinutes,setTimerMinutes] = useState(25)
  const getTimerOption = (minutes: number) => setTimerMinutes(minutes)

  const [play, setPlay] = useState(false)
  const getPlayerOptions = (isPlaying: boolean) => setPlay(isPlaying)

  //Testing Props
  const propsState = () => {
    console.log(timerMinutes);
    console.log(play);
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-orange-200">
      <TimerOptions selectedOption={getTimerOption}/>
      <div id="upperSpacer" className="h-14"/>
      <div id="timerContainer" onClick={propsState}>
        <Timer timerOption={timerMinutes} isPlaying={play}/>
      </div>
      <div id="bottomSpacer" className="h-7"/>
      <PlayPause play={getPlayerOptions}/>
    </div>
  );
}

export default App;
