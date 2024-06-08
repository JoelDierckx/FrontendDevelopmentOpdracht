import { CaretLeftFilled, CaretRightFilled } from '@ant-design/icons'
import { Button } from 'antd'
import { CSSProperties, FunctionComponent, useContext } from 'react'
import { GameContext } from './GameContext'
interface SliderButtonProps {
    side: number
}
const SliderButton: FunctionComponent<SliderButtonProps> = ({ side }) => {
    const { setSlide } = useContext(GameContext)

    const BTStyle: CSSProperties = {
        height: 50,
        width: 50,
        alignSelf: "center",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        top: "45%"
    }

    return (
        <>
            <Button onClick={() => setSlide(side)} style={BTStyle}>{side != 1 ? <CaretLeftFilled style={{ fontSize: 30 }} /> : <CaretRightFilled style={{ fontSize: 30 }} />}</Button>
        </>
    )
}
export default SliderButton