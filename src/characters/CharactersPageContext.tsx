import { createContext } from 'react'
import { ICharacter } from '../models/ICharacter'

interface ICharactersPageContext {
    activeTab?: string,
    characters?: ICharacter[],
    setfilter: (filter: string) => void,
    setTab: (TabKey: string) => void,
}

export const CharactersPageContext = createContext<ICharactersPageContext>({
    activeTab: "",
    characters: undefined,
    setfilter: () => { console.warn("set filter called without implementation") },
    setTab: () => { console.warn("set tab called without implementation") },
})