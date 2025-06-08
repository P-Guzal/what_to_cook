import { useState, useEffect } from "react";
import useMealTypes from "@/hooks/useMealTypes";

export default function MealType({
  name,
  inputError,
  onChange,
  selectedMealType,
  setSelectedMealType,
}) {
  const { mealTypes } = useMealTypes();
  function handleChange(e) {
    setSelectedMealType(e.target.value);
    onChange(name, e.target.value);
  }

  return (
    <div className="flex flex-col p-2 m-1">
      <label className="component_header">Choose Meal Type:</label>
      <select
        id="meal_type"
        value={selectedMealType}
        onChange={handleChange}
        className={`p-2 mb-2 rounded-lg border-4 text-4xl  ${
          selectedMealType === "" ? "border-red-500" : "border-gray-300"
        }`}
      >
        <option value="" />
        {mealTypes.map((meal_type) => {
          return (
            <option key={meal_type.id} value={meal_type.code}>
              {meal_type.name}
            </option>
          );
        })}
      </select>
      {inputError && selectedMealType === "" && (
        <p className="text-red-500 text-2xl">{inputError}</p>
      )}
    </div>
  );
}
