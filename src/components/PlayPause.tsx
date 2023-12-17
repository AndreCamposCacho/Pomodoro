interface PlayPauseProps {
  play: (isPlaying: boolean) => void;
  //pause: (isPaused: boolean) => void; Talvez criar um state de pause para colmatar o estado atual de stop/reset 
}

const PlayPause = ({ play }: PlayPauseProps) => {
  const sendPlayerOption = (isPlaying: boolean) => {play(isPlaying)}

  return (
    <div
      id="playPause"
      className="flex gap-10 bg-sky-100 w-fit rounded-lg px-6 py-4 shadow-md"
    >
      <button
        id="playContainer"
        className="rounded-full p-1 group duration-500 hover:bg-sky-800 hover:cursor-pointer"
        onClick={() => sendPlayerOption(true)}
      >
        <svg
          id="playButton"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-sky-800 group-hover:text-amber-100"
        >
          <path
            fillRule="evenodd"
            d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button
        id="pauseContainer"
        className="rounded-full p-1 group duration-500 hover:bg-sky-800 hover:cursor-pointer"
        onClick={() => sendPlayerOption(false)}
      >
        <svg
          id="pauseButton"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-sky-800 group-hover:text-amber-100"
        >
          <path
            fillRule="evenodd"
            d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default PlayPause;
