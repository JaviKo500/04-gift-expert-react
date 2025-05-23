import { useEffect, useState } from "react";
import type { GifInterface } from "../interfaces/gif.interface";
import { getGifts } from "../helpers/getGifts";

export const useFetchGifs = ( category: string ): { gifs: GifInterface[], isLoading: boolean } => {
  const [gifs, setGifs] = useState<GifInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getNewGifs = async ( category: string ) => {
    const newGifs = await getGifts(category);
    setGifs(newGifs);
    setIsLoading(false);
  }
  useEffect(
    () => {
      getNewGifs(category);
    },
    [ category ]
  );

  return {
    gifs,
    isLoading,
  };
}