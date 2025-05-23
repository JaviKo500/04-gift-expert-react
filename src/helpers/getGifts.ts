import type { GifApiInterface, GifInterface } from '../interfaces';

export const getGifts = async ( category: string ): Promise<GifInterface[]> => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=JYFliq5Q3HMvcD6QLDTYzXDx6EvzlQfN&q=${category}&limit=10`;
  const resp = await fetch(url);
  const {data = []} = await resp.json();
  const gifts: GifInterface[] = data.map((gif: GifApiInterface) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));
  return gifts;
}