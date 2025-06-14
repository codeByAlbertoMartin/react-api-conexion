import { useEffect, useState } from "react";
import { CharacterData } from "./components/CharacterData";
import type { Character } from "./models/character.model";
import { GetCharater } from "./services/character.service";

export function Dashboard() {

    const [characters, setCharacters] = useState<Character[]>([]);

    const characterFetcher = async () => {
        const result = await GetCharater();
        setCharacters(result);
    }

    useEffect(() => {
        characterFetcher();
    }, []);

    return (
        <div>
            {characters.map((character, index) => (
                <CharacterData key={index} characterData={character} />
            ))}
        </div>
    );
}