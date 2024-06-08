import { FunctionComponent } from 'react'
interface ScoreProps {
    score: number
}
const Score: FunctionComponent<ScoreProps> = ({ score }) => {
    return (
        <p style={{ fontWeight: 'bold' }}>
            Score: {score}
        </p>
    )
}
export default Score