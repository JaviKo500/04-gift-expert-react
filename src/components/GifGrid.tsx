import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifts";
import type { GiftInterface } from "../interfaces/gift.interface";

export const GifGrid = ({ category }: { category: string }) => {
  //* rebuild the gif's when the category changes
  const [gifs, setGifts] = useState<GiftInterface[]>([]);
  const getNewGifs = async (category: string) => {
    const newGifts = await getGifts(category);
    setGifts(newGifts);
  }
  useEffect(
    () => {
      getNewGifs(category);
    },
    [ category ]
  );
  if ( gifs.length ) {
    return (
      <>
        <h2>{category}</h2>
        <ol>
          {
            gifs.map( ( { id, title } ) => {
              return <li key={id}>{title}</li>
            })
          }
        </ol>
      </>
    );  
  }
  return (
    <>
      <div>
        <h2>{category}</h2>
        <p>Loading...</p>
      </div>
    </>
  );
}