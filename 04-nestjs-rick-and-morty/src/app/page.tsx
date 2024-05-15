'use client'
import { useEffect, useState } from 'react'
import { getAllCharacters } from '@/services/getCharacter'
import { Character } from '@/types/Character'
import CharacterCard from './components/CharacterCard'

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([])

  useEffect(() => {
    // Fetch all characters when the component mounts
    const fetchData = async () => {
      const allCharacters = await getAllCharacters()
      setCharacters(allCharacters)
    }
    fetchData()
  }, [])

  return (
    <div>
      <div className='flex justify-between bg-white text-2xl text-slate-900'>
        <div className='my-5 ml-5'>Página de Favoritos de Rick and Morty</div>
        <a
          href='/favorites'
          className='mr-5 pt-5 text-cyan-500 hover:text-cyan-700'
        >
          Favoritos
        </a>
      </div>
      <div className='grid grid-cols-1 justify-center gap-4 md:grid-cols-3 md:gap-8'>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  )
}
