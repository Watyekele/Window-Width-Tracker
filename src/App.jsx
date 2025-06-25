import Header from "./Components/Header";
import Form from "./Components/Form";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [getImages, setgetImages] = useState(null);

  function fetchMeme() {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const memes = data.data.memes;
        const randomIndex = Math.floor(Math.random() * memes.length);
        const randomUrl = memes[randomIndex].url;
        setgetImages(randomUrl);
      });
  }
  useEffect(() => {
    fetchMeme();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-100">
      <Header />
      <Form images={getImages} handleClick={fetchMeme} />
    </div>
  );
}
export default App;
