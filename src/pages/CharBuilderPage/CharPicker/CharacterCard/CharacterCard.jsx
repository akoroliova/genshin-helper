import { useEffect, useState } from "react";
import { getCharacterIcon } from "../../../characters-api";
import placeholder from "../../../../assets/placeholder.png"; // Placeholder image

export default function CharacterCard({
  character: { id, name, rarity, vision_key, weapon_type },
}) {
  const [characterIcon, setCharacterIcon] = useState(placeholder);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchCharacterIcon() {
      try {
        setLoading(true);
        const blob = await getCharacterIcon(id);
        const imageUrl = URL.createObjectURL(blob); // Створюємо URL для зображення
        setCharacterIcon(imageUrl); // Встановлюємо URL як адресу для зображення
        setError(false); // Скидаємо помилку, якщо іконка завантажилась успішно
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setCharacterIcon(placeholder); // Використовуємо placeholder, якщо помилка 404
          setError(false); // Не вважаємо це помилкою, просто показуємо placeholder
        } else {
          setError(true);
        }
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
      {!error && <img src={characterIcon} alt="character icon" width={100} />}
      <h3>{name}</h3>
      <ul>
        <li>Rarity: {rarity}</li>
        <li>Vision: {vision_key}</li>
        <li>Weapon: {weapon_type}</li>
      </ul>
    </div>
  );
}
