import HeaderParagraph from "../../components/shared/HeaderParagraph/HeaderParagraph";
import CharPicker from "./CharPicker/CharPicker";
import { useEffect, useState } from "react";
import { getCharacters } from "../characters-api";

const headerParagraph =
  "Pattern of successive upgrading is Weapon -> Talents -> Artifacts -> Ascension -> Level";

export default function CharBuilderPage() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        setLoading(true);
        const data = await getCharacters();
        setCharacters(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchCharacters();
  }, []);

  return (
    <div>
      <h1>Character Builder</h1>
      <HeaderParagraph text={headerParagraph} />
      {loading && <b>Loading characters...</b>}
      {error && <b>Error loading characters, please refresh.</b>}
      {characters.length > 0 && <CharPicker characters={characters} />}
      <button>Go to Farm Dashboard</button>
    </div>
  );
}
