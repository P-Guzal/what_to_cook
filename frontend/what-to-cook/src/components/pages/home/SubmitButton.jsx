import React from "react";

const SubmitButton = ({ onChange, formData, setError, setRecipe }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.ingredients.map((item) => item).filter((item) => item === "")
        .length !== 0 ||
      !formData.meal_type
    ) {
      setError("Please fill in required fields");
      return;
    }

    try {
      let apiLink;
      try {
        apiLink = import.meta.env.VITE_API_URL;
      } catch (err) {
        setError("Missing environment variable");
        console.log(err);
      }

      const response = await fetch(`${apiLink}generate_recipe/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Server error");
      const data = await response.json();
      setRecipe(data?.recipe);

      setError("");
    } catch (err) {
      setError("Submission failed");
      console.log(err);
    }
  };

  const handleChange = (e) => {
    onChange(name, e.target.value);
  };

  return (
    <div className="flex flex-col p-2 m-1">
      <button
        onChange={handleChange}
        className="w-full h-fit p-2 bg-blue-200 rounded-lg text-4xl font-bold font-[Cursive] text-center"
        onClick={handleSubmit}
      >
        I&apos;m ready to cook
      </button>
    </div>
  );
};
export default SubmitButton;
