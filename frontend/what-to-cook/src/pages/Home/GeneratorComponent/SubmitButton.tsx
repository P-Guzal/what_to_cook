import { useState } from "react";
import getApiUrl from "@/utils/getApiUrl";

export default function SubmitButton({
  onChange,
  formData,
  setInputError,
  setRecipe,
}) {
  const [submitError, setSubmitError] = useState("");
  const apiUrl = getApiUrl();

 async function handleSubmit(e) {
    e.preventDefault();

    if (
      formData.ingredients.map((item) => item).filter((item) => item === "")
        .length !== 0 ||
      !formData.meal_type
    ) {
      setInputError("Please fill in required fields");
      return;
    }

    try {
      if (!apiUrl) {
        setSubmitError("Internal service error");
        return;
      }

      const response = await fetch(`${apiUrl}generate_recipe/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error(response);
      const data = await response.json();
      setRecipe(data?.recipe);

      setInputError("");
      setSubmitError("");
    } catch (err) {
      setSubmitError("Submission failed", err);
      console.log(err);
    }
  }

  function handleChange(e) {
    onChange(name, e.target.value);
  }

  return (
    <div className="flex flex-col p-2 m-1">
      <button
        onChange={handleChange}
        className="w-full h-fit p-2 bg-blue-200 rounded-lg text-4xl font-bold font-[Cursive] text-center"
        onClick={handleSubmit}
      >
        I&apos;m ready to cook
      </button>
      {submitError && <p className="warning_text">{submitError}</p>}
    </div>
  );
}
