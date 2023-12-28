import useUserOption from "../stores/OptionsStore";

const TimerOptions = () => {
  const minutesStore = useUserOption();

  return (
    <div className="flex items-center gap-x-8 bg-sky-100 w-fit py-1 px-12 rounded-lg shadow-md">
      <button
        id="shortBreak"
        className="p-1 rounded-md font-medium text-sky-800 duration-500 hover:bg-sky-700 hover:text-amber-100 hover:cursor-pointer"
        onClick={() => minutesStore.setTimerMinutes(5)}
      >
        Short
        <br />
        Break
      </button>
      <button
        id="pomodoro"
        className="p-1 rounded-md font-medium text-sky-800 duration-500 hover:bg-sky-700 hover:text-amber-100 hover:cursor-pointer"
        onClick={() => minutesStore.setTimerMinutes(25)}
      >
        Pomodoro
      </button>
      <button
        id="longBreak"
        className="p-1 rounded-md font-medium text-sky-800 duration-500 hover:bg-sky-700 hover:text-amber-100 hover:cursor-pointer"
        onClick={() => minutesStore.setTimerMinutes(10)}
      >
        Long
        <br />
        Break
      </button>
    </div>
  );
};

export default TimerOptions;
