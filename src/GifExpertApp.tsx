import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState<string[]>([]);

   const onAddCategory = ( newCategory: string ) => {
    setCategories( [ newCategory, ...categories ] );
  }

  return (
    <>
      <h4>Gif Expert</h4>
      <AddCategory onNewCategory={ onAddCategory } />
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
