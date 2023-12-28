import PlayPause from "./components/PlayPause";
import Timer from "./components/Timer";
import TimerOptions from "./components/TimerOptions";

function App() {

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-orange-200">
      <TimerOptions />
      <div id="upperSpacer" className="h-14" />
      <Timer />
      <div id="bottomSpacer" className="h-7" />
      <PlayPause />
    </div>
  );
}

export default App;
