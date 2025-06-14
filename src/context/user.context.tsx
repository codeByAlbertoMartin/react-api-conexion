import { createContext, useContext, useState } from "react";
import { emptyUserState, type User } from "../models";


interface UserContextType {
    user: User,
    setUser: React.Dispatch<React.SetStateAction<User>>
}

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext<UserContextType>(
{
    user: emptyUserState, 
    setUser: () => {}
});

interface Params {
    children: React.ReactNode
}


export const UserProvider = ({ children }: Params) => {
    const [user, setUser] = useState<User>({id: 5});
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}


export const useUserContext = () =>{
    const context = useContext(UserContext);

    if(context.user.id === -1) {
        throw new Error("useUserContext must be used within a UserProvider");
    }
    return context
}