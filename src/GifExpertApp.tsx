import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState<string[]>([]);
  return (
    <>
      <h4>Gif Expert</h4>
      <AddCategory setCategories={setCategories} />
      <h5>Categories</h5>
      <ol>
        {
          categories.map( ( category ) => {
            return <li key={ category }>{ category }</li>
          } )
        }
      </ol>
    </>
  );
}
