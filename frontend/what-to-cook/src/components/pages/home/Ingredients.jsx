import React from "react";
import PlusInput from "./PlusInput.jsx";

const Ingredients = ({
  name,
  error,
  onChange,
  ingredients,
  setIngredients,
}) => {
  return (
    <div>
      <PlusInput
        name={name}
        error={error}
        onChange={onChange}
        inputs={ingredients}
        setInputs={setIngredients}
        header={"Ingredients"}
        required={true}
      />
    </div>
  );
};
export default Ingredients;
