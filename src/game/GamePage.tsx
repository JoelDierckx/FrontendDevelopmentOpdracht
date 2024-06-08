
import { FunctionComponent, } from 'react'
import Game from './Game';
interface GamePageProps {

}
const GamePage: FunctionComponent<GamePageProps> = () => {
    return (
        <div style={{ marginLeft: 16, marginRight: 16 }}>
            <Game></Game>
        </div>
    )
}
export default GamePage