import { useId } from "react";

export default function ControlledInput({ value, onType }) {
  const id = useId();
  const style = {
    fontSize: `${value}px`,
  };

  return (
    <div>
      <label htmlFor="numberInput">Number Input</label>
      <input
        id={id}
        type="number"
        name="numberInput"
        value={value}
        onChange={(e) => onType(e.target.value)}
      />
      <p style={style}>
        This is text, its font size changes as you type font size number into
        the input form
      </p>
    </div>
  );
}
