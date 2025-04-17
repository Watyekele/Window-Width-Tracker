import { useState } from "react";
import { useEffect } from "react";
import WindowTracker from "./WindowTracker";

function App() {
  const [count, setCount] = useState(0);
  const [starWarsData, setStarWarsData] = useState({});
  const [show, setShow] = useState(true);

  function toggleShow() {
    setShow((prevState) => !prevState);
  }

  function handleClick() {
    setCount((prevCount) => prevCount + 1);
  }

  useEffect(() => {
    fetch("https://swapi.py4e.com/api/people/1")
      .then((res) => res.json())
      .then((data) => setStarWarsData(data))
      .catch((error) => console.error("Fetch error:", error));
  }, [count]);
  return (
    <div className="h-screen flex  flex-col items-center justify-center">
      <button
        onClick={handleClick}
        className="cursor-pointer rounded-sm p-2 
    hover:bg-blue-600 text-xl border 
    border-white w-40 active:scale-97 "
      >
        The count is {count}
      </button>
      <button
        onClick={toggleShow}
        className="block mt-4 border  rounded bg-white 
      text-black text-center  border-white p-2
       cursor-pointer active:scale-105"
      >
        Toggle Window Tracker
      </button>
      {show && <WindowTracker />}
    </div>
  );
}

export default App;
