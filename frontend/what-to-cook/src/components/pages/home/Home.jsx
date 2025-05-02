import React from "react";
import Ingredients from "./Ingredients.jsx";
import MealType from "./MealType.jsx";
import Preferences from "./Preferences.jsx";

const Home = () => {
  return (
    <div className="flex h-screen justify-center">
      <div className="flex justify-center bg-blue-50 w-full max-w-screen-2xl">
        <div className="flex flex-col p-2 m-4">
          <h1 className="text-6xl font-bold m-6 font-[Cursive]">
            What to cook today?
          </h1>
          <div>
            <Ingredients />
            <MealType />
            <Preferences />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
