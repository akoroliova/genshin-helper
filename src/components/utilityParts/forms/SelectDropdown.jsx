import { useId } from "react";

export default function SelectDropdown({ value, onChangeLevel }) {
  const id = useId();

  return (
    <div>
      <label htmlFor="select">Select</label>
      <select
        id={id}
        value={value}
        onChange={(event) => onChangeLevel(event.target.value)}
        name="select"
      >
        <option value="A1">Ascension level 1</option>
        <option value="A2">Ascension level 2</option>
        <option value="A3">Ascension level 3</option>
        <option value="A4">Ascension level 4</option>
        <option value="A5">Ascension level 5</option>
        <option value="A6">Ascension level 6</option>
      </select>
      <p>Selected Ascension level: {value}</p>
    </div>
  );
}
