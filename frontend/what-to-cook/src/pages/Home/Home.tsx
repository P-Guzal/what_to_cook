import { useState } from "react";
import RecipeGenerator from "./generatorComponent/RecipeGenerator.jsx";
import Recipe from "./recipeComponent/Recipe.jsx";

export default function Home() {
  const [recipe, setRecipe] = useState("");

  return (
    <div className="flex h-screen justify-center bg-blue-50">
      <div className="flex flex-col container">
        <div className="p-2 m-4 h-fit border-8 border-rose-100 rounded-lg border-double">
          <h1 className="text-6xl font-bold font-[Cursive] text-center">
            What to cook today?
          </h1>
          <RecipeGenerator setRecipe={setRecipe} />
        </div>
        <Recipe recipe={recipe} />
      </div>
    </div>
  );
}
