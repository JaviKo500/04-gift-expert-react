import { GifItem } from './GifItem';

import { useFetchGifs } from "../hooks/use-fetch-gifs";

export const GifGrid = ({ category }: { category: string }) => {
  const { gifs, isLoading } = useFetchGifs(category);
  //* rebuild the gif's when the category changes

  return (
    <>
      <h1>{category}</h1>
      {
        isLoading && (<p>Loading...</p>)
        // isLoading 
        //   ? (<p>Loading...</p>)
        //   : null
      }
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