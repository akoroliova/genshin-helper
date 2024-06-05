import CharacterCard from "./CharacterCard/CharacterCard";
import css from "./CharPicker.module.css";

export default function CharPicker({ characters }) {
  return (
    <div>
      <ul className={css.list}>
        {characters.map((id) => (
          <li key={id}>
            <CharacterCard characterId={id} />
          </li>
        ))}
      </ul>
    </div>
  );
}
