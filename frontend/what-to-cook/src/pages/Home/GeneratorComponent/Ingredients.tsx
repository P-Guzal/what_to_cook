import PlusInput from "./PlusInput.jsx";

export default function Ingredients({
  name,
  inputError,
  onChange,
  ingredients,
  setIngredients,
}) {
  return (
    <div>
      <PlusInput
        name={name}
        error={inputError}
        onChange={onChange}
        inputs={ingredients}
        setInputs={setIngredients}
        header={"Ingredients"}
        required={true}
      />
    </div>
  );
}
