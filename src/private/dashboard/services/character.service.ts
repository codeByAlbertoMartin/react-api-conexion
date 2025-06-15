import { characterAdapter } from "../adapters"
import type { CharacterApiResponse } from "../models"

export  const GetCharater = () =>{
    return fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json() as Promise<CharacterApiResponse>)
        .then((characterApiResponse) => characterAdapter(characterApiResponse))
}