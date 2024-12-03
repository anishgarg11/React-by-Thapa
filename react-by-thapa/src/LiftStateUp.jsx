import { useState } from "react";

export const LiftingstateUp = () => {
    const [inputValue, setInputValue] = useState("");
  return (
    <>
      <InputComponent inputValue={inputValue} setInputValue={setInputValue}/>
      <DisplayComponent inputValue={inputValue} />
    </>
  );
};

const InputComponent = ({inputValue, setInputValue}) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </>
  );
};

const DisplayComponent = ({inputValue}) => {
  return <p>This is Current State : {inputValue}</p>;
};
