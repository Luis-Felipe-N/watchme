import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

export const genreSelectedContext = createContext({} as IGenreSelectedContext)

interface IGenreSelected {
    id: number;
    name: string
    title: "string"
}

interface IGenreSelectedContext {
    genreSelected: IGenreSelected | undefined;
    setGenreSelected: Dispatch<SetStateAction<IGenreSelected | undefined>>
}

interface genreSelectedContextProviderProps {
    children: ReactNode
}

export function GenreSelectedContextProvider({children}: genreSelectedContextProviderProps) {
    const [ genreSelected, setGenreSelected ] = useState<IGenreSelected>()

    return (
        <genreSelectedContext.Provider value={{ genreSelected, setGenreSelected }}>
            {children}
        </genreSelectedContext.Provider>
    );
}
