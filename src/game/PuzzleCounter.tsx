import { FunctionComponent } from 'react'
interface PuzzleCounterProps {
    puzzleCount: number
    puzzleTotal: number
}
const PuzzleCounter: FunctionComponent<PuzzleCounterProps> = ({ puzzleCount, puzzleTotal }) => {


    return (
        <>
            <p style={{ fontWeight: 'bold' }}>
                Puzzles completed: {puzzleCount + "/" + puzzleTotal}
            </p>
        </>
    )
}
export default PuzzleCounter