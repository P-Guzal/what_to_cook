import React, { useState } from "react";

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([
    {
      type: "text",
      id: 0,
      value: "",
    },
  ]);

  const handleChange = (e) => {
    e.preventDefault();

    const index = Number(e.target.id);
    setIngredients((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target?.value;
      return newArr;
    });
  };

  const addInput = () => {
    setIngredients((s) => {
      const lastId = s[s.length - 1].id;
      return [
        ...s,
        {
          id: lastId + 1,
          type: "text",
          value: "",
        },
      ];
    });
  };

  const removeInput = () => {
    if (ingredients.length !== 1) {
      const updatedIngredients = [...ingredients.slice(0, -1)];
      setIngredients(updatedIngredients);
    }
  };
  return (
    <div className="bg-rose-100 rounded-lg ">
      <div className="flex flex-row p-2 m-4">
        <label className="text-4xl">Ingredients</label>
        <button onClick={addInput}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 bg-blue-100 m-2 rounded-lg "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
        <button onClick={removeInput}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 bg-blue-100 rounded-lg "
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        </button>
      </div>
      <div className="flex flex-col p-2 m-4">
        {ingredients.map((item) => {
          return (
            <input
              onChange={handleChange}
              value={item.value}
              key={item.id}
              id={item.id}
              type={item.type}
              className="p-2 mb-2 rounded-lg text-2xl"
            />
          );
        })}
      </div>
    </div>
  );
};
export default Ingredients;
