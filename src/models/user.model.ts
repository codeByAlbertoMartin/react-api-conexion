export interface User{
    id: number,
}

export const emptyUserState: User = {
    id: -1,
};

export interface RickAndMortiCharacter extends User {
    name: string;
    status: string;
    gender: string;
}