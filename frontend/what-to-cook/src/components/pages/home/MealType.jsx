import React, { useState, useEffect } from "react";

const MealType = () => {
  const [selectedMealType, setSelectedMealType] = useState("");
  const [mealTypes, setMealTypes] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/meal_types/")
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
  };
  console.log(mealTypes, "mealTypes");
  return (
    <div className="flex flex-col p-2 m-4">
      <label className="text-4xl mb-2 ">Choose Meal Type:</label>
      <select
        id="meal_type"
        value={selectedMealType}
        onChange={handleChange}
        className="p-2 mb-2 text-2xl rounded-lg"
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
    </div>
  );
};
export default MealType;
