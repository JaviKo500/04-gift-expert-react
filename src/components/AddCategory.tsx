import { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState('One Punch');
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('<--------------- JK AddCategory --------------->');
    console.log(inputValue);
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