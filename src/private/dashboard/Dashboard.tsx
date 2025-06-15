import { useEffect, useState } from "react";
import { CharacterData } from "./components/CharacterData";
import type { Character } from "./models/character.model";
import { GetCharater } from "./services/character.service";
import { useUserContext } from "../../context/user.context";

export function Dashboard() {
    const { user, setUser } = useUserContext();
    
    const [characters, setCharacters] = useState<Character[]>([]);

    const characterFetcher = async () => {
        const result = await GetCharater();
        setCharacters(result);
    }

    useEffect(() => {
        characterFetcher();
    }, [setUser]);

    return (
        <div>
            <h2>Este es el id del usuario:{user.id}</h2>
            {characters.map((character, index) => (
                <CharacterData key={index} characterData={character} />
            ))}
        </div>
    );
}