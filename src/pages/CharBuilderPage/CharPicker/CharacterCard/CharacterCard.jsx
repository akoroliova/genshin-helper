import { useEffect, useState } from "react";
import { getCharacterIcon } from "../../../characters-api";

export default function CharacterCard({
  character: { id, name, rarity, vision_key, weapon_type },
}) {
  const [characterIcon, setCharacterIcon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchCharacterIcon() {
      try {
        setLoading(true);
        const data = await getCharacterIcon(id);
        setCharacterIcon(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchCharacterIcon();
  }, [id]);

  return (
    <div id={id}>
      {loading && <b>Loading character icon...</b>}
      {error && <b>Error loading character icon.</b>}
      <img src={characterIcon} alt="character icon" width={100} />
      <h3>{name}</h3>
      <ul>
        <li>Rarity: {rarity}</li>
        <li>Vision: {vision_key}</li>
        <li>Weapon: {weapon_type}</li>
      </ul>
    </div>
  );
}
