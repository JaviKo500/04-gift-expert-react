import { getGifts } from "../helpers/getGifts";

export const GifGrid = ({ category }: { category: string }) => {
  getGifts( category );
  return (
    <>
      <h2>{category}</h2>
    </>
  )
}