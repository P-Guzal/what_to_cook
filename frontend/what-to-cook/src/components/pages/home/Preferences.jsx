import React, { useState } from "react";

const Preferences = () => {
  const [ingredients, setIngredients] = useState([
    {
      type: "text",
      id: 1,
      value: "",
    },
  ]);

  const handleChange = (e) => {
    e.preventDefault();

    const index = e.target.id;
    setIngredients((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;

      return newArr;
    });
  };

  const addInput = () => {
    setIngredients((i) => {
      const lastId = i[i.length - 1].id;
      return [
        ...i,
        {
          id: lastId + 1,
          type: "text",
          value: "",
        },
      ];
    });
  };

  const removeInput = () => {
    const updatedIngredients = [...ingredients.slice(0, -1)];
    setIngredients(updatedIngredients);
  };
  return (
    <div className="bg-rose-50">
      <div className="flex flex-row p-2 m-4">
        <h2>Preferences</h2>
        <button onClick={addInput}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
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
            className="size-6"
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
              type={item.type}
              className="p-2 m-2"
            />
          );
        })}
      </div>
    </div>
  );
};
export default Preferences;
