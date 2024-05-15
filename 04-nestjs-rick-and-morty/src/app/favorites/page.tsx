'use client'
import { useEffect, useState } from 'react'
import { getCharacter } from '@/services/getCharacter'
import { Character } from '@/types/Character'
import CharacterCard from '../components/CharacterCard'

const FavoritesPage: React.FC = () => {
  const [favoriteCharacters, setFavoriteCharacters] = useState<Character[]>([])

  useEffect(() => {
    // Retrieve favorite character IDs from localStorage
    const favoriteIds = JSON.parse(
      localStorage.getItem('favoriteCharacters') || '[]',
    )

    // Fetch character data for each favorite character
    const fetchFavorites = async () => {
      const charactersData = await Promise.all(
        favoriteIds.map((id: number) => getCharacter(id)),
      )
      setFavoriteCharacters(charactersData)
    }

    fetchFavorites()
  }, [])

  return (
    <div>
      <div className='flex justify-between bg-white text-2xl text-slate-900'>
        <div className='my-5 ml-5'>Favorite Characters</div>
        <a href='/' className='mr-5 pt-5 text-cyan-500 hover:text-cyan-700'>
          back
        </a>
      </div>
      <div className='grid grid-cols-1 justify-center gap-4 md:grid-cols-3 md:gap-8'>
        {favoriteCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  )
}

export default FavoritesPage
