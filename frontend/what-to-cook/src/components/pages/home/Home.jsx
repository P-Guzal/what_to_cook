import React from "react";
import Ingredients from "./Ingredients.jsx";
import MealType from "./MealType.jsx";
import Preferences from "./Preferences.jsx";
import SubmitButton from "./SubmitButton.jsx";
import Recipe from "./Recipe.jsx";

const Home = () => {
  return (
    <div className="flex h-screen justify-center">
      <div className="flex justify-center bg-blue-50 w-full max-w-screen-2xl">
        <div className="flex flex-col">
          <div className="p-2 m-4 h-fit border-8 border-rose-100 rounded-lg border-double">
            <h1 className="text-6xl font-bold m-6 font-[Cursive]">
              What to cook today?
            </h1>
            <div>
              <Ingredients />
              <MealType />
              <Preferences />
            </div>
          </div>
          <SubmitButton />
          <Recipe />
        </div>
      </div>
    </div>
  );
};

export default Home;
