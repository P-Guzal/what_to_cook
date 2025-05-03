import React from "react";

const Recipe = () => {
  return (
    <div className="flex flex-col p-2 m-2">
      <label className="text-4xl mb-2 ">Here&apos;s your recipe: </label>
      <textarea className="bg-red-100 rounded-lg text-2xl" rows={6}></textarea>
    </div>
  );
};
export default Recipe;
