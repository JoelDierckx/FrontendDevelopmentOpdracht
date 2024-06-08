import { Button, Col, Row } from 'antd'
import { CSSProperties, FunctionComponent } from 'react'
interface GameEndProps {
    hidden: boolean
    points: number
    TryAgain: () => void
}
const GameEnd: FunctionComponent<GameEndProps> = ({ hidden, points, TryAgain }) => {
    const TXTStyle: CSSProperties = {
        width: "80%",
        alignSelf: "center",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
    }
    const TXTStyle2: CSSProperties = {
        width: "80%",
        alignSelf: "center",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        fontWeight: "bold"
    }
    return (
        <>
            <Row hidden={hidden}>
                <Col span={24}><h1 style={TXTStyle2}>Congratulations!</h1></Col>
                <Col span={24}><p style={TXTStyle}>your scored {points}!</p></Col>
                <Col span={24}><Button style={TXTStyle} onClick={TryAgain}> Try again!</Button></Col>

            </Row>
        </>
    )
}
export default GameEnd