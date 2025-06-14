//Siempre que veamos objetos compuestos hacer un interface
//Si vemos que se duplica cóidigo --> Separar

export interface ApiLinkedElement {
    name: string;
    link:string;
}

export type Origin = ApiLinkedElement
export type Location = ApiLinkedElement

export interface ApiInfo{
    count: number;
    pages: number;
    next: string;
    prev: string;
}


export interface Character{
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin
    location: Location
    image: string;
    episode: string[];
    url: string;
    created: string;
}


export interface CharacterApiResponse {
    info: ApiInfo;
    results: Character[];
  }