// import assert methods
import { test, expect } from 'vitest'
// import testinglibrary for react
import { screen, render } from '@testing-library/react'
// import component
import CharacterCard from './CharacterCard'
import { Character } from '@/types/Character'
import userEvent from '@testing-library/user-event'

const character: Character = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: {
    name: 'Earth',
    url: 'https://rickandmortyapi.com/api/location/1',
  },
  location: {
    name: 'Earth',
    url: 'https://rickandmortyapi.com/api/location/20',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: [
    'https://rickandmortyapi.com/api/episode/1',
    'https://rickandmortyapi.com/api/episode/2',
    // ...
  ],
  url: 'https://rickandmortyapi.com/api/character/1',
  created: '2017-11-04T18:48:46.250Z',
}

// name your test
test('render component', () => {
  // render component
  render(<CharacterCard character={character}></CharacterCard>)
  // make an asert
  expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
})

test('mark as favorite', async () => {
  // render component
  render(<CharacterCard character={character}></CharacterCard>)
  const verifyFav = screen.getByTestId('favButton')

  // make an asert
  expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
  expect(verifyFav).toBeInTheDocument()

  await userEvent.click(verifyFav)
  expect(await screen.findByTestId('yesFav')).toBeInTheDocument()
})
