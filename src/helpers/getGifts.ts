export const getGifts = async ( category: string ) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=JYFliq5Q3HMvcD6QLDTYzXDx6EvzlQfN&q=${category}&limit=20`;
  const resp = await fetch(url);
  const {data = []} = await resp.json();
  const gifts = data.map((gif: any) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));
  return gifts;
}