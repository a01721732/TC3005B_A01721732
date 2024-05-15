import { clientConfig } from '@/const/clientConfig'
import { Character } from '@/types/Character'
import { endpoints } from '@/const/endpoints'
import { Info } from '@/types/Info'

export async function getCharacter(id: number): Promise<Character> {
  const response = await fetch(
    new URL(`${endpoints.getCharacter}/${id}`, clientConfig.apiHost),
  )
  console.log(response)
  const character: Character = await response.json()
  console.log(character)
  return character
}

export async function getAllCharacters(): Promise<Character[]> {
  const response = await fetch(
    new URL(endpoints.getCharacter, clientConfig.apiHost),
  )
  const allCharacters: Info = await response.json()
  const allCharactersResult = allCharacters.results
  return allCharactersResult
}
