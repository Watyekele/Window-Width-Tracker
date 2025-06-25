import { useState } from "react";
import { useEffect } from "react";

export default function Form(props) {
  const [items, setItems] = useState({
    topText: "KEEP CALM",
    bottomText: "AND TAKE YOUR MONEY",
    image: props.images,
  });

  function handleChange(event) {
    const { name, value } = event.currentTarget;
    setItems((prevItems) => ({ ...prevItems, [name]: value }));
  }
  useEffect(() => {
    setItems((prevItems) => ({
      ...prevItems,
      image: props.images,
    }));
  }, [props.images]);
  return (
    <div className=" flex flex-col gap-2 items-center justify-center  ">
      <div className=" flex gap-2 mt-2 ">
        <label htmlFor="">
          Upper Text:
          <input
            type="text"
            className="text p-1 border-2 opacity-75 border-white block w-40"
            placeholder="KEEP CALM!"
            value={items.topText}
            name="topText"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          Bottom Text:
          <input
            type="text"
            className="text p-1 border-2 opacity-75 border-white block w-40"
            placeholder="AND TAKE YOUR MONEY"
            value={items.bottomText}
            name="bottomText"
            onChange={handleChange}
          />
        </label>
      </div>

      <button
        onClick={props.handleClick}
        className="border w-82 rounded-md cursor-pointer"
      >
        Generate New Meme
      </button>

      <div className="relative">
        <img src={items.image} alt="" className="w-82 " />
        <span className="absolute p-2 top-2 left-25 bg-black">
          {items.topText}
        </span>
        <span className="absolute p-2 bottom-2 left-16 bg-black">
          {items.bottomText}
        </span>
      </div>
    </div>
  );
}
