import CharacterCard from "./CharacterCard/CharacterCard";
import css from "./CharPicker.module.css";

export default function CharPicker({ characters }) {
  return (
    <div>
      <ul className={css.list}>
        {characters.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>
    </div>
  );
}
