import { useState } from "react";
import { useEffect } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
export default function App() {
  const [getImages, setgetImages] = useState(null);

  function fetchMeme() {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        const memes = data.data.memes;
        const randomIndex = Math.floor(Math.random() * memes.length);
        const randomMeme = memes[randomIndex];

        setgetImages(randomMeme.url);
      });
  }
  useEffect(() => {
    fetchMeme();
  }, []);

  return (
    <div
      className="flex flex-col items-center 
    justify-center min-h-screen "
    >
      <Header />
      <Form image={getImages} handleClick={fetchMeme} />
    </div>
  );
}
