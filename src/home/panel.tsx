import { Button, Card, Col, Row } from 'antd'
import { CSSProperties, FunctionComponent } from 'react'
import { NavLink } from 'react-router-dom'
interface PanelProps {
    span: number,
    push: number,
    title: string,
    text: string,
    img: string,
    button: boolean,
    buttontxt?: string,
    buttonLink: string
}

const Panel: FunctionComponent<PanelProps> = ({ span, push, title, text, img, button, buttontxt, buttonLink }) => {

    const ImgStyle: CSSProperties = {
        maxHeight: 200,
        width: "auto",
        alignSelf: "center",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
    }

    return (
        <>
            <Row>
                <Col span={span} push={push}>
                    <Card title={title} bordered={false} style={{ marginTop: 20, background: "#D3D3D3" }} headStyle={{ background: "#6082B6" }}>
                        <Row>
                            <Col span={8}><img src={img} alt='panel-image' style={ImgStyle} ></img></Col>
                            <Col span={16}><p>{text}</p> <Button hidden={!button} style={{ background: "#FFFFFF" }}><NavLink to={buttonLink}>{buttontxt}</NavLink></Button></Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default Panel