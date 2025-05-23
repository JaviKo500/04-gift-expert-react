import { GifItem } from './GifItem';

import { useFetchGifs } from "../hooks/use-fetch-gifs";

export const GifGrid = ({ category }: { category: string }) => {
  const { gifs, isLoading } = useFetchGifs(category);
  //* rebuild the gif's when the category changes

  if ( !isLoading ) {
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