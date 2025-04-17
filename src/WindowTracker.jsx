import { useEffect, useState } from "react";

export default function WindowTracker() {
  const [width, setwidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setwidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="mt-8 text-center ">
      <h1>Window width:{width}</h1>
    </div>
  );
}
