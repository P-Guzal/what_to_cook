import React from "react";

const Recipe = ({ recipe = "" }) => {
  return (
    <div className="flex flex-col p-2 m-2">
      <label className="text-4xl mb-2 font-bold font-[Cursive]">
        Here&apos;s your recipe:{" "}
      </label>
      <textarea
        className="bg-red-100 rounded-lg text-2xl p-2 "
        rows={6}
        value={recipe}
        readOnly={true}
      ></textarea>
    </div>
  );
};
export default Recipe;
