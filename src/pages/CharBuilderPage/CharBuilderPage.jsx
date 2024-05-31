import HeaderParagraph from "../../components/shared/HeaderParagraph/HeaderParagraph";
import CharPicker from "./CharPicker/CharPicker";

const headerParagraph =
  "Pattern is Weapon -> Talents -> Artifacts -> Ascension -> Level";

export default function CharBuilderPage() {
  return (
    <div>
      <h1>Character Builder</h1>
      <HeaderParagraph text={headerParagraph} />
      <CharPicker />
      <button>Go to Farm Dashboard</button>
    </div>
  );
}
