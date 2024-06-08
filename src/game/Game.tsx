import { FunctionComponent, useState } from 'react'
import { GameContext } from './GameContext'
import { IPuzzleState } from '../models/IPuzzleState';
import Score from './score';
import { Col, Divider, Row } from 'antd';
import PuzzleCounter from './PuzzleCounter';
import { IPuzzle } from '../models/IPuzzle';
import { PuzzleArray } from '../assets/data/PuzzleData';
import Slider from './Slider';
import GameEnd from './GameEnd';

interface GameProps {
}
const Game: FunctionComponent<GameProps> = () => {
    const puzzles: IPuzzle[] = PuzzleArray;

    const GenerateStateArrey = () => {
        const output: IPuzzleState[] = []
        puzzles.forEach(element => {
            const state: IPuzzleState = {
                state: "",
                selectedAnwser: ""
            }
            output.push(state)
        });
        return (output)
    }

    const [score, setScore] = useState<number>(0);
    const [activeSlide, setactiveSlide] = useState<number>(0);
    const [puzzleCount, setpuzzleCount] = useState<number>(0);
    const [puzzleState, setpuzzleState] = useState<IPuzzleState[]>(GenerateStateArrey);



    const moveSlide = (move: number) => {
        if (move == -1 && activeSlide == 0) {
            setactiveSlide(puzzles.length - 1)
        }
        else if (move == 1 && activeSlide == puzzles.length - 1) {
            setactiveSlide(0)
        }
        else {
            setactiveSlide(old => old + move)
        }
    }

    const increaseScore = (score: number) => {
        setScore(old => old + score)
    }

    const UpdatePuzzleState = (indexState: number, state: string, selectedanswer: string) => {
        if (state == "") {
            const NewPuzzleStates = puzzleState;
            NewPuzzleStates[indexState].selectedAnwser = selectedanswer;
            setpuzzleState(NewPuzzleStates);
        }
        else if (state == "Win") {
            const NewPuzzleStates = puzzleState;
            if (puzzleState[indexState].selectedAnwser == puzzles[indexState].Answer) {
                NewPuzzleStates[indexState].state = "Win";
                setScore(old => old + puzzles[indexState].Points)
                setpuzzleCount(old => old + 1)
            }
            else {
                NewPuzzleStates[indexState].state = "Lose";
                setpuzzleCount(old => old + 1)
            }
            setpuzzleState(NewPuzzleStates);
        }

    }
    const Restart = () => {
        setScore(0);
        setactiveSlide(0);
        setpuzzleCount(0);
        const TempState = puzzleState;
        TempState.forEach(element => {
            element.state = ""
        });
        setpuzzleState(TempState);
    }


    return (
        <GameContext.Provider value={{ score: score, activeSlide: activeSlide, puzzleState: puzzleState, setSlide: moveSlide, setPuzzleState: UpdatePuzzleState, AddScore: increaseScore }}>
            <Row style={{ marginTop: 16 }}>
                <Col span={6}><PuzzleCounter puzzleCount={puzzleCount} puzzleTotal={puzzles.length} ></PuzzleCounter></Col>
                <Col span={6} offset={12}><Score score={score}></Score></Col>
            </Row>
            <Divider />
            <Slider Puzzles={puzzles} hidden={puzzleCount == puzzles.length ? true : false} PuzzleState={puzzleState}></Slider>
            <GameEnd hidden={puzzleCount != puzzles.length ? true : false} points={score} TryAgain={Restart}></GameEnd>
            <Divider />
        </GameContext.Provider>
    )
}
export default Game