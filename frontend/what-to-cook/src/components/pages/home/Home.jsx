import React, { useState } from "react";
import Ingredients from "./Ingredients.jsx";
import MealType from "./MealType.jsx";
import Preferences from "./Preferences.jsx";
import SubmitButton from "./SubmitButton.jsx";
import Recipe from "./Recipe.jsx";

const Home = () => {
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
  const [recipe, setRecipe] = useState("");

  const [formData, setFormData] = useState({
    ingredients: [""],
    meal_type: "",
    preferences: [""],
  });

  const [error, setError] = useState("Please fill in required fields");

  const handleInputChange = (name, value) => {
    setFormData(() => ({
      ...formData,
      [name]: value,
    }));
  };

  return (
    <div className="flex h-screen justify-center bg-blue-50">
      <div className="flex flex-col container">
        <div className="p-2 m-4 h-fit border-8 border-rose-100 rounded-lg border-double">
          <h1 className="text-6xl font-bold font-[Cursive] text-center ">
            What to cook today?
          </h1>
          <div>
            <Ingredients
              name={"ingredients"}
              error={error}
              onChange={handleInputChange}
              ingredients={ingredients}
              setIngredients={setIngredients}
            />
            <MealType
              name={"meal_type"}
              error={error}
              setError={setError}
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
              error={error}
              setError={setError}
              setRecipe={setRecipe}
            />
          </div>
        </div>
        <Recipe recipe={recipe} />
      </div>
    </div>
  );
};

export default Home;
