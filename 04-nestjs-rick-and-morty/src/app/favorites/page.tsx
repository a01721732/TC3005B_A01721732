"use client"
import { useEffect, useState } from 'react';
import { getCharacter } from '@/services/getCharacter';
import { Character } from '@/types/Character';
import CharacterCard from '../components/CharacterCard';

const FavoritesPage: React.FC = () => {
  const [favoriteCharacters, setFavoriteCharacters] = useState<Character[]>([]);

  useEffect(() => {
    // Retrieve favorite character IDs from localStorage
    const favoriteIds = JSON.parse(localStorage.getItem('favoriteCharacters') || '[]');

    // Fetch character data for each favorite character
    const fetchFavorites = async () => {
      const charactersData = await Promise.all(
        favoriteIds.map((id: number) => getCharacter(id))
      );
      setFavoriteCharacters(charactersData);
    };

    fetchFavorites();
  }, []);

  return (
    <div>
      <div className="flex justify-between text-2xl text-slate-900 bg-white">
        <div className="my-5 ml-5">Favorite Characters</div>
        <a href="/" className='pt-5 mr-5 text-cyan-500 hover:text-cyan-700'>back</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 justify-center">
        {favoriteCharacters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;