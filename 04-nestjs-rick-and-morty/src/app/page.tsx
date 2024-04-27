"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { getAllCharacters } from "@/services/getCharacter";
import { Character } from "@/types/Character";
import CharacterCard from "./components/CharacterCard";

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    // Fetch all characters when the component mounts
    const fetchData = async () => {
      const allCharacters = await getAllCharacters();
      setCharacters(allCharacters);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex justify-center text-2xl text-slate-900 bg-white">
        <div className="my-5">
          Página de Favoritos de Rick and Morty
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 justify-center">
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}
