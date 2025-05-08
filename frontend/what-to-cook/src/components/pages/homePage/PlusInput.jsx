import React from "react";

const PlusInput = ({
  name,
  error,
  onChange,
  inputs,
  setInputs,
  header,
  allowWithout = false,
  required = false,
}) => {
  const handleChange = (e) => {
    e.preventDefault();

    const index = Number(e.target.id);
    setInputs((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target?.value;
      return newArr;
    });
    onChange(
      name,
      inputs.map((item) => item.value),
    );
  };

  const addInput = () => {
    setInputs((s) => {
      let id = 0;
      if (s.length !== 0) {
        id = s[s.length - 1].id + 1;
      }

      return [
        ...s,
        {
          id: id,
          type: "text",
          value: "",
        },
      ];
    });
  };

  const removeInput = () => {
    if (inputs.length !== 1 || allowWithout) {
      const updatedInputs = [...inputs.slice(0, -1)];
      setInputs(updatedInputs);
      onChange(
        name,
        updatedInputs.map((item) => item.value),
      );
    }
  };
  return (
    <div className="bg-rose-100 rounded-lg">
      <div className="flex flex-row p-2 m-4">
        <label className="component_header">{header}</label>
        <button onClick={addInput}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="plus_minus_button"
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
            className="plus_minus_button"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        </button>
      </div>
      <div className="flex flex-row flex-wrap p-2">
        {inputs.map((item) => {
          return (
            <input
              onChange={handleChange}
              value={item.value}
              key={item.id}
              id={item.id}
              type={item.type}
              className={`flex-grow basis-full sm:basis-[48%] lg:basis-[30%] rounded-lg text-center text-4xl m-1 border-4 ${
                inputs.map((item) => item.value).filter((item) => item === "")
                  .length !== 0 && required
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
          );
        })}
      </div>
      {error &&
        inputs.map((item) => item.value).filter((item) => item === "")
          .length !== 0 &&
        required && <p className="text-red-500 text-2xl p-2">{error}</p>}
    </div>
  );
};
export default PlusInput;
