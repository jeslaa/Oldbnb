import {Dispatch, ReactNode, SetStateAction, createContext, useState} from 'react'

type UserContextType = {
    user: User | null;
    setUser: Dispatch<SetStateAction<User | null>>;
}

type User = {
    userName: string;
    email: string;
}

type UserContextProviderProps = {
    children: ReactNode;
}

export function UserContextProvider({children}: UserContextProviderProps) {
    const [user, setUser] = useState<User | null>(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
        
    )
}

export const UserContext = createContext<UserContextType>({
    user: null,
    setUser: () => {},
})