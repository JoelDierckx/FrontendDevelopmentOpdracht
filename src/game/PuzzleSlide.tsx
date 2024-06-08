import { CSSProperties, FunctionComponent, useContext, useState } from 'react'
import { IPuzzle } from '../models/IPuzzle'
import { GameContext } from './GameContext'
import { Card, Divider, Row, Space } from 'antd'
import InputfieldTXT from './InputfieldTXT'
import InputfieldMulti from './InputfieldMulti'
import SubmitButton from './SubmitButton'
import PuzzleWin from './PuzzleWin'
import PuzzleLose from './PuzzleLose'
import { IPuzzleState } from '../models/IPuzzleState'
interface PuzzleSlideProps {
    puzzle: IPuzzle,
    slideNr: number
    puzzleState: IPuzzleState[]
}
const PuzzleSlide: FunctionComponent<PuzzleSlideProps> = ({ puzzle, slideNr, puzzleState }) => {
    const { activeSlide, setPuzzleState } = useContext(GameContext)
    const [state, SetState] = useState<string>(puzzleState[slideNr].state)

    const ImgStyle: CSSProperties = {
        height: 200,
        width: "auto",
        alignSelf: "center",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
    }

    const TXTStyle: CSSProperties = {
        width: "80%",
        alignSelf: "center",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
    }

    const setState = (state: string) => {
        setPuzzleState(slideNr, state, puzzleState[slideNr].selectedAnwser)
        SetState(puzzleState[slideNr].state)
    }

    return (
        <>
            <Space direction="vertical" size={24} hidden={slideNr == activeSlide && puzzleState[slideNr].state == "" ? false : true} style={{ width: "100%" }}>
                <Card title={puzzle.Name}>
                    <div style={{ width: "100%" }}><img alt="PuzzleImg" src={puzzle.Img} style={ImgStyle} /></div>
                    <div style={TXTStyle}>{puzzle.PuzzleText}</div>
                    <Divider />
                    <Row>{puzzle.Type == "Write" ? <InputfieldTXT puzzleIndex={slideNr}></InputfieldTXT> : <InputfieldMulti puzzle={puzzle} puzzleIndex={slideNr}></InputfieldMulti>}</Row>
                    <Row><SubmitButton setState={setState}></SubmitButton></Row>
                </Card>
            </Space>
            <PuzzleWin puzzle={puzzle} ImgStyle={ImgStyle} TXTStyle={TXTStyle} hidden={slideNr == activeSlide && puzzleState[slideNr].state == "Win" ? false : true}></PuzzleWin>
            <PuzzleLose puzzle={puzzle} ImgStyle={ImgStyle} TXTStyle={TXTStyle} hidden={slideNr == activeSlide && puzzleState[slideNr].state == "Lose" ? false : true}></PuzzleLose>
        </>
    )
}
export default PuzzleSlide