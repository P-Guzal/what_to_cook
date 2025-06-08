import { useState } from "react";
import Ingredients from "./Ingredients.jsx";
import MealType from "./MealType.jsx";
import Preferences from "./Preferences.jsx";
import SubmitButton from "./SubmitButton.jsx";

export default function RecipeGenerator({ setRecipe }) {
  const [preferences, setPreferences] = useState([
    {
      type: "text",
      id: 0,
      value: "",
    },
  ]);
  const [ingredients, setIngredients] = useState([
    {
      type: "text",
      id: 0,
      value: "",
    },
  ]);
  const [selectedMealType, setSelectedMealType] = useState("");
  const [formData, setFormData] = useState({
    ingredients: [""],
    meal_type: "",
    preferences: [""],
  });

  const [inputError, setInputError] = useState(
    "Please fill in required fields",
  );

  function handleInputChange(name, value) {
    setFormData(() => ({
      ...formData,
      [name]: value,
    }));
  }

  return (
    <div>
      <Ingredients
        name={"ingredients"}
        inputError={inputError}
        onChange={handleInputChange}
        ingredients={ingredients}
        setIngredients={setIngredients}
      />
      <MealType
        name={"meal_type"}
        inputError={inputError}
        onChange={handleInputChange}
        selectedMealType={selectedMealType}
        setSelectedMealType={setSelectedMealType}
      />
      <Preferences
        name={"preferences"}
        onChange={handleInputChange}
        preferences={preferences}
        setPreferences={setPreferences}
      />
      <SubmitButton
        formData={formData}
        setInputError={setInputError}
        setRecipe={setRecipe}
      />
    </div>
  );
}
