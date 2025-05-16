import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]);
  const onAddCategory = ( category: string ) => {
    setCategories( [ category, ...categories ] );
  }
  return (
    <>
      <h4>Gif Expert</h4>
      <AddCategory />
      <button onClick={() => onAddCategory('Test')} >Add</button>
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
