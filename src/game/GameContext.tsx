import { createContext } from 'react'
import { IPuzzleState } from '../models/IPuzzleState'

interface IGameContext {
    score: number,
    activeSlide: number,
    puzzleState: IPuzzleState[],
    setSlide: (SlideKey: number) => void,
    setPuzzleState: (indexState: number, state: string, selectedanswer: string) => void,
    AddScore: (points: number) => void
}

export const GameContext = createContext<IGameContext>({
    score: 0,
    activeSlide: 0,
    puzzleState: [],
    setSlide: () => { console.warn("set Slide called without implementation") },
    setPuzzleState: () => { console.warn("set puzzleState called without implementation") },
    AddScore: () => { console.warn("set Addscore called without implementation") }
})