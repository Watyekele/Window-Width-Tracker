import { useState } from "react";
import { useEffect } from "react";

export default function Form(props) {
  const [items, setItems] = useState({
    topText: "One does not simply",
    bottomText: "Walk into the mordor",
    imgUrl: props.image,
  });

  useEffect(() => {
    setItems((prev) => ({
      ...prev,
      imgUrl: props.image,
    }));
  }, [props.image]);

  function handleChange(event) {
    const { value, name } = event.currentTarget;
    setItems((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  return (
    <div className="flex flex-col">
      {/* The inputs container starts Here */}
      <div className="flex items-left justify-center gap-4 mt-2">
        <div>
          <label htmlFor="Top" className="block">
            Top Text:
          </label>
          <input
            type="text"
            id="Top"
            value={items.topText}
            name="topText"
            onChange={handleChange}
            className="border border-white 
            font-light font-mono w-35 opacity-[70%] p-1 rounded"
          />
        </div>
        <div className="">
          <label htmlFor="Bottom" className="block">
            Bottom Text:
          </label>
          <input
            type="text"
            id="Bottom"
            value={items.bottomText}
            name="bottomText"
            onChange={handleChange}
            className="border border-white w-35 font-mono 
            font-light opacity-[70%] p-1 rounded"
          />
        </div>
      </div>
      {/* Button is right here */}
      <button
        onClick={props.handleClick}
        className="submit bg-gradient-to-r from-[#672280] to-[#a626d3]   hover:opacity-[50%] border border-white mt-2 rounded cursor-pointer"
      >
        Generate new Image 🖼
      </button>
      {/* The image section starts right here */}
      <section className="relative min-h-40 ">
        {!items.imgUrl ? (
          <p className="text-white">Image Loading...</p>
        ) : (
          <>
            <img
              src={items.imgUrl}
              alt=""
              className="w-75 mt-2 rounded relative object-cover h-auto "
            />
            <span
              className=" absolute top-4  left-1/2 transform -translate-x-1/2 text-center
         text-xl  uppercase font-bold text-white drop-shadow-md bg-black bg-opacity-80 px-2 rounded "
            >
              {items.topText}
            </span>
            <span
              className=" absolute bottom-2 left-1/2 transform -translate-x-1/2 drop-shadow-md bg-black bg-opacity-80 px-2 rounded
          text-xl uppercase text-center font-bold text-white"
            >
              {items.bottomText}
            </span>
          </>
        )}
      </section>
    </div>
  );
}
