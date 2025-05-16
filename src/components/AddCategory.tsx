import { useState } from "react";

interface Props {
  setCategories:  (value: React.SetStateAction<string[]>) => void;
}

export const AddCategory = ( { setCategories }: Props ) => {
  const [inputValue, setInputValue] = useState('One Punch');
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if( inputValue.trim().length <= 1) return;
    setCategories( categories => [ inputValue, ...categories, ] );
    setInputValue('');
  }
  return(
    <>
      <h5>Add a category</h5>
      <form onSubmit={onSubmit}>
        <input type="text" 
          placeholder="Search gift" 
          value={inputValue}
          onChange={onInputChange}
          />
      </form>
    </>
  );
}