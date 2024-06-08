import { Col, Row } from 'antd'
import { FunctionComponent } from 'react'
import { IPuzzle } from '../models/IPuzzle'
import SliderButton from './SliderButton'
import PuzzleSlide from './PuzzleSlide'
import { IPuzzleState } from '../models/IPuzzleState'
interface SliderProps {
    Puzzles: IPuzzle[],
    hidden: boolean,
    PuzzleState: IPuzzleState[]
}
const Slider: FunctionComponent<SliderProps> = ({ Puzzles, hidden, PuzzleState }) => {
    return (
        <>
            <Row hidden={hidden}>
                <Col span={3}> <SliderButton side={-1}></SliderButton></Col>
                <Col span={18}>{Puzzles.map((puzzle, i) => <PuzzleSlide puzzle={puzzle} slideNr={i} key={puzzle.Name} puzzleState={PuzzleState} ></PuzzleSlide>)}</Col>
                <Col span={3}> <SliderButton side={1}></SliderButton></Col>
            </Row>
        </>
    )
}
export default Slider