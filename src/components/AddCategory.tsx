import { useState } from "react";

interface Props {
  onNewCategory: (newCategory: string) => void;
}

export const AddCategory = ( { onNewCategory }: Props ) => {
  const [inputValue, setInputValue] = useState('');
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if( inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    setInputValue('');
  }
  return(
    <>
      <h4>Add a category</h4>
      <form onSubmit={onSubmit} aria-label="form">
        <input type="text" 
          placeholder="Search gift" 
          value={inputValue}
          onChange={onInputChange}
          />
      </form>
    </>
  );
}