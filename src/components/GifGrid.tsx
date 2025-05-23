import { useEffect, useState } from "react";

import { GifItem } from './GifItem';

import { getGifts } from "../helpers/getGifts";

import type { GiftInterface } from "../interfaces/gif.interface";

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
        <h1>{category}</h1>
        <div className="card-grid">
          {
            gifs.map( ( gif ) => {
              return <GifItem key={gif.id} {...gif} />
            })
          }
        </div>
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