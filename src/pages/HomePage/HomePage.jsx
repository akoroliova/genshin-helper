import { useState } from "react";
import ControlledInput from "../../components/shared/forms/ControlledInput";
import SelectDropdown from "../../components/shared/forms/SelectDropdown";
import MultipleDropdown from "../../components/shared/forms/MultipleDropdown";
import FormikForm from "../../components/shared/forms/FormikForm/FormikForm";

export default function HomePage() {
  /////////////////////////////////////////////////////////////////
  /**
   * For utils -> forms
   */
  const [inputValue, setInputValue] = useState(13);
  const [ascLevel, setAscLevel] = useState("A1");
  const makeChoice = (newChoice) => {
    console.log("User has selected: ", newChoice);
  };
  const handleAddUser = (newUser) => {
    console.log("handleAddUser", newUser);
  };
  /////////////////////////////////////////////////////////////////

  return (
    <div>
      <h1>Home Page</h1>
      <hr />
      <hr />
      <hr />
      <h2>What else I have:</h2>
      <div>
        <FormikForm onAdd={handleAddUser} />
      </div>
      <ControlledInput value={inputValue} onType={setInputValue} />
      <hr />
      <SelectDropdown value={ascLevel} onChangeLevel={setAscLevel} />
      <hr />
      <MultipleDropdown onChoice={makeChoice} />
    </div>
  );
}
