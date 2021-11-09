import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { api } from '../api/api';

export const genreSelectedContext = createContext({} as IGenreSelectedContext)

interface IGenreSelected {
    id: number;
    name: string
    title: "string"
}

interface IGenreSelectedContext {
    genreSelected: IGenreSelected,
    setGenreSelected: Dispatch<SetStateAction<IGenreSelected>>
}

interface genreSelectedContextProviderProps {
    children: ReactNode
}

export function genreSelectedContextProvider({children}: genreSelectedContextProviderProps) {
    const [ genreSelected, setGenreSelected ] = useState<IGenreSelected>()

    return (
        <genreSelectedContext.Provider value={{ genreSelected, setGenreSelected }}>
            {children}
        </genreSelectedContext.Provider>
    );
}
