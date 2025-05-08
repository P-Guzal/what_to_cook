import React, { useState, useEffect } from "react";

const MealType = ({
  name,
  error,
  setError,
  onChange,
  selectedMealType,
  setSelectedMealType,
}) => {
  const [mealTypes, setMealTypes] = useState([]);
  let apiLink;
  try {
    apiLink = import.meta.env.VITE_API_URL;
  } catch (err) {
    setError("Missing environment variable");
    console.log(err);
  }
  useEffect(() => {
    fetch(`${apiLink}meal_types/`)
      .then((res) => res.json())
      .then((data) => {
        const types = Object.entries(data).map(([id, name]) => ({
          id: parseInt(id),
          name,
        }));
        setMealTypes(types);
      })
      .catch((err) => console.error("Meal Types fetch broken.", err));
  }, []);

  const handleChange = (e) => {
    setSelectedMealType(e.target.value);
    onChange(name, e.target.value);
  };

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
      {error && selectedMealType === "" && (
        <p className="text-red-500 text-2xl">{error}</p>
      )}
    </div>
  );
};
export default MealType;
