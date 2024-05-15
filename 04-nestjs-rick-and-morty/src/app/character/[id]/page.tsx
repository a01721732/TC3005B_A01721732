'use client'
import { useEffect, useState } from 'react'
import { getCharacter } from '@/services/getCharacter'
import { Character } from '@/types/Character'
import CharacterCard from '../../components/CharacterCard'

export default function CharacterPage({ params }: { params: { id: string } }) {
  //const router = useRouter();
  const id = params.id // Get the character ID from the URL query parameters
  const [character, setCharacter] = useState<Character | null>(null)

  useEffect(() => {
    const fetchCharacter = async () => {
      if (id && typeof id === 'string') {
        const characterData = await getCharacter(parseInt(id))
        setCharacter(characterData)
      }
    }
    fetchCharacter()
  }, [id])

  if (!character) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className='flex justify-between bg-white text-2xl text-slate-900'>
        <div className='my-5 ml-5'>Character Details</div>
        <a href='/' className='mr-5 pt-5 text-cyan-500 hover:text-cyan-700'>
          back
        </a>
      </div>
      <div className='flex justify-center'>
        <CharacterCard character={character} />
      </div>
    </div>
  )
}
