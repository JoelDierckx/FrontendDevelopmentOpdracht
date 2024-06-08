import { Card, Space } from 'antd'
import { CSSProperties, FunctionComponent } from 'react'
import { IPuzzle } from '../models/IPuzzle'
interface PuzzleWinProps {
    puzzle: IPuzzle,
    ImgStyle: CSSProperties,
    TXTStyle: CSSProperties,
    hidden: boolean
}
const PuzzleWin: FunctionComponent<PuzzleWinProps> = ({ puzzle, ImgStyle, TXTStyle, hidden }) => {
    return (
        <>
            <Space direction="vertical" size={24} style={{ width: "100%" }} hidden={hidden}>
                <Card title={puzzle.Name}>
                    <div style={{ width: "100%" }}><img alt="PuzzleImg" src="src\\assets\\img\\characters\\LaytonCorrect.webp" style={ImgStyle} /></div>
                    <div style={{ width: "100%" }}><img alt="PuzzleImg" src={puzzle.AnswerImg} style={ImgStyle} /></div>
                    <div style={TXTStyle}><p style={{ fontSize: "bold" }}>Correct!: {puzzle.Points} points!</p></div>
                    <div style={TXTStyle}>{puzzle.Answer}</div>
                </Card>
            </Space>
        </>
    )
}
export default PuzzleWin