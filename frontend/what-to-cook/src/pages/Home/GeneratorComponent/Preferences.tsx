import PlusInput from "./PlusInput.jsx";

export default function Preferences({
  name,
  onChange,
  preferences,
  setPreferences,
}) {
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
}
