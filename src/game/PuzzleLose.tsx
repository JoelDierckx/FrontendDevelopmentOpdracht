import { Card, Space } from 'antd'
import { CSSProperties, FunctionComponent } from 'react'
import { IPuzzle } from '../models/IPuzzle'
interface PuzzleLoseProps {
    puzzle: IPuzzle,
    ImgStyle: CSSProperties,
    TXTStyle: CSSProperties,
    hidden: boolean
}
const PuzzleLose: FunctionComponent<PuzzleLoseProps> = ({ puzzle, ImgStyle, TXTStyle, hidden }) => {
    return (
        <>
            <Space direction="vertical" size={24} style={{ width: "100%" }} hidden={hidden}>
                <Card title={puzzle.Name}>
                    <div style={{ width: "100%" }}><img alt="PuzzleImg" src="src\\assets\\img\\characters\\LaytonIncorrect.webp" style={ImgStyle} /></div>
                    <div style={TXTStyle}><p style={{ fontSize: "bold" }}>Whoops, that doesn't seem right: 0 points</p></div>
                    <div style={TXTStyle}>Better luck next time!</div>
                </Card>
            </Space>
        </>
    )
}
export default PuzzleLose