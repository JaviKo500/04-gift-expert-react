import { useEffect } from "react";
import { getGifts } from "../helpers/getGifts";

export const GifGrid = ({ category }: { category: string }) => {
  //* rebuild the gif's when the category changes
  useEffect(
    () => {
      getGifts( category );
    },
    [ category ]
  );
  return (
    <>
      <h2>{category}</h2>
    </>
  )
}