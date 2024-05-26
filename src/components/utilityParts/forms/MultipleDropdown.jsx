import { useId, useState } from "react";
import { SiCodemagic } from "react-icons/si";

const initialValues = {
  weapon: "",
  element: "",
};

export default function MultipleDropdown({ onChoice }) {
  const weaponId = useId();
  const elementId = useId();
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onChoice(values);
    setValues(initialValues);
  };

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <SiCodemagic weapon="160" color={values.element} />

      <div>
        <label htmlFor={weaponId}>Weapon type:</label>
        <select
          name="weapon"
          value={values.weapon}
          onChange={handleChange}
          id={weaponId}
        >
          <option value="" disabled hidden>
            Select weapon...
          </option>
          <option value="sword">Sword</option>
          <option value="greatsword">Greatsword</option>
          <option value="bow">Bow</option>
        </select>
      </div>

      <div>
        <label htmlFor={elementId}>Element:</label>
        <select
          name="element"
          value={values.element}
          onChange={handleChange}
          id={elementId}
        >
          <option value="" disabled hidden>
            Select element...
          </option>
          <option value="turquoise">Anemo</option>
          <option value="red">Pyro</option>
          <option value="blue">Hydro</option>
          <option value="violet">Electro</option>
          <option value="lightblue">Cryo</option>
          <option value="green">Dendro</option>
          <option value="yellow">Geo</option>
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
