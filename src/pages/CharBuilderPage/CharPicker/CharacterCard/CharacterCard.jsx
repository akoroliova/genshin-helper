export default function CharacterCard({
  character: { id, name, rarity, vision_key, weapon_type },
}) {
  return (
    <div id={id}>
      <img />
      <h3>{name}</h3>
      <ul>
        <li>Rarity: {rarity}</li>
        <li>Vision: {vision_key}</li>
        <li>Weapon: {weapon_type}</li>
      </ul>
    </div>
  );
}
