import React from "react";
import PlusInput from "./PlusInput.jsx";

const Preferences = ({ name, onChange, preferences, setPreferences }) => {
  return (
    <div className="bg-rose-100 rounded-lg ">
      <PlusInput
        name={name}
        onChange={onChange}
        inputs={preferences}
        setInputs={setPreferences}
        header={"Preferences"}
        allowWithout={true}
      />
    </div>
  );
};
export default Preferences;
