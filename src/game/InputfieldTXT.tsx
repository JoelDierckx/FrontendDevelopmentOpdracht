import { CSSProperties, FunctionComponent, useContext } from 'react'
import { GameContext } from './GameContext';
import { Input } from 'antd';
interface InputfieldTXTProps {
    puzzleIndex: number
}
const InputfieldTXT: FunctionComponent<InputfieldTXTProps> = ({ puzzleIndex }) => {
    const { setPuzzleState } = useContext(GameContext);

    const InputStyle: CSSProperties = {
        width: "80%",
        alignSelf: "center",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center"
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPuzzleState(puzzleIndex, "", e.target.value)
    };

    return (
        <>
            <Input onChange={onChange} placeholder="Write your answer here!" style={InputStyle}></Input>
        </>
    )
}
export default InputfieldTXT