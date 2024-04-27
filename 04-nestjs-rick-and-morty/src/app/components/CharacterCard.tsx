/*import Image from "next/image";

export default function CharacterCard() {
    return (
        <div className="rounded bg-slate-400 w-24">
            <span>
                <Image src={""} alt="" width={3} height={3}></Image>
            </span>
            <span>
                <div>Name</div>
                <div>Status</div>
                <div>Location</div>
            </span>
        </div>
    )
}*/
import { Character } from "@/types/Character";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className="border border-gray-300 rounded p-4 m-2">
      <img src={character.image} alt={character.name} className="mt-2" />
      <span className="text-xl font-semibold inline-block">
        <div>{character.name}</div>
        <div>{character.location.name}</div>
        <div>{character.status}</div>
      </span>
    </div>
  );
};

export default CharacterCard;