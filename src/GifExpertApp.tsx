import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState<string[]>([]);

   const onAddCategory = ( newCategory: string ) => {
    if( categories.includes( newCategory ) ) return;
    setCategories( [ newCategory, ...categories ] );
  }

  return (
    <>
      <h4>Gif Expert</h4>
      <AddCategory onNewCategory={ onAddCategory } />
      <h5>Categories</h5>
      <GifGrid category={ categories[0] } />
    </>
  );
}
