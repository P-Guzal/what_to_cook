import React from "react";

const Recipes = () => {
  return (
    <div className="flex h-screen justify-center bg-blue-50">
      <div className="flex flex-col container">
        <div className="p-2 m-4 h-fit border-8 border-rose-100 rounded-lg border-double">
          <h1 className="text-6xl font-bold font-[Cursive] text-center ">
            Your saved recipes:
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
