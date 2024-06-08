import { FunctionComponent, useContext, useState } from 'react'
import { IPuzzle } from '../models/IPuzzle'
import { Radio, RadioChangeEvent, Space } from 'antd'
import { GameContext } from './GameContext'
interface InputfieldMultiProps {
    puzzle: IPuzzle,
    puzzleIndex: number
}
const InputfieldMulti: FunctionComponent<InputfieldMultiProps> = ({ puzzle, puzzleIndex }) => {
    const { setPuzzleState } = useContext(GameContext);
    const [value, setValue] = useState<number>(1);

    const onChange = (e: RadioChangeEvent) => {
        setValue(e.target.value);
        setPuzzleState(puzzleIndex, "", e.target.value)
    };

    return (<>
        <Radio.Group onChange={onChange} value={value} >
            <Space direction="vertical">
                {puzzle.PossibleAnswer != undefined ? puzzle.PossibleAnswer?.map(element => <Radio value={element} key={element}>{element}</Radio>) : <></>}
            </Space>
        </Radio.Group >
    </>)




}
export default InputfieldMulti