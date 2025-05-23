import { useState, useEffect } from "react";
import { getGifts } from "../helpers/getGifts";

export const GifGrid = ({ category }: { category: string }) => {
  const [counter, setCounter] = useState(10);
  // rebuild the gif's when the category changes
  useEffect(
    () => {
      getGifts( category );
    },
    [ category ]
  );
  return (
    <>
      <h2>{category}</h2>
      <h5>Counter: {counter}</h5>
      <button onClick={ ()=> setCounter(counter+1) } >+1</button>
    </>
  )
}