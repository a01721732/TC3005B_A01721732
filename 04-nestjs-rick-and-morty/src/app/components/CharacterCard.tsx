import { Character } from "@/types/Character";
import { useState } from "react";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(
    JSON.parse(localStorage.getItem("favoriteCharacters") || "[]").includes(character.id)
  );

  const handleFavorite = (id: number) => {
    const favoriteCharacters = JSON.parse(localStorage.getItem('favoriteCharacters') || '[]');
  
    const isFavorite = favoriteCharacters.includes(id);
  
    if (isFavorite) {
      // If character is already a favorite, remove it from the favorites list
      const updatedFavorites = favoriteCharacters.filter((favoriteId: number) => favoriteId !== id);
      localStorage.setItem('favoriteCharacters', JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      // If character is not a favorite, add it to the favorites list
      const favoriteCharacters = JSON.parse(localStorage.getItem("favoriteCharacters") || "[]");
      localStorage.setItem('favoriteCharacters', JSON.stringify([...favoriteCharacters, id]));
      setIsFavorite(true);
    }
  };

  return (
    <div className="flex flex-col border border-gray-300 rounded p-4 m-2">
      <img src={character.image} alt={character.name} className="mt-2 inline-block" />
      <span className="text-xl font-semibold inline-block">
        <a href={`/character/${character.id}`} className="text-cyan-500 hover:text-cyan-700">{character.name}</a>
        <div>{character.location.name}</div>
        <div>{character.status}</div>
      </span>
      <button onClick={() => handleFavorite(character.id)} className="justify-end">
      {isFavorite ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current text-yellow-500" viewBox="0 0 24 24">
            <path d="M12 2l2.34 6.35L21 9.24l-5.63 4.48L17.71 22 12 17.31 6.29 22l1.34-8.28L3 9.24l6.66-.89L12 2zm0 0" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current text-gray-300" viewBox="0 0 24 24">
            <path d="M12 2l2.34 6.35L21 9.24l-5.63 4.48L17.71 22 12 17.31 6.29 22l1.34-8.28L3 9.24l6.66-.89L12 2zm0 0" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default CharacterCard;