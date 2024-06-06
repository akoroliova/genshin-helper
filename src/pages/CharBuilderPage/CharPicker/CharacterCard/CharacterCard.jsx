export default function CharacterCard({ character }) {
  const { id, name, rarity, vision_key, weapon_type, icon } = character;

  return (
    <div id={id}>
      <img src={icon} alt="character icon" width={100} />
      <h3>{name}</h3>
      <ul>
        <li>Rarity: {rarity}</li>
        <li>Vision: {vision_key}</li>
        <li>Weapon: {weapon_type}</li>
      </ul>
    </div>
  );
}
