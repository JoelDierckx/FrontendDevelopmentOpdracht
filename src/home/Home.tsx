import { Card, Col, Row } from 'antd'
import { FunctionComponent } from 'react'
import Panel from './panel'
import { IPanelData } from '../models/IPanelData';
import { Paneldata } from '../assets/data/PanelData';
interface HomeProps {
}
const Home: FunctionComponent<HomeProps> = () => {
    const panels: IPanelData[] = Paneldata;

    return (
        <div style={{ marginLeft: 30, marginRight: 30, marginBottom: 30 }}>
            <Row>
                <Col span={18} push={3}>
                    <Card title="Professor Layton wikia" bordered={false} style={{ marginTop: 20, background: "#FF5733" }}>
                        <p>The content of this project page was assembled from the <a href='https://layton.fandom.com/wiki/Professor_Layton_Wiki' target="_blank" style={{ color: "#0000FF" }}>Layton-Fandom</a> Website.</p>
                    </Card>
                </Col>
            </Row>
            {panels.map(p => <Panel key={p.title} span={p.span} push={p.push} title={p.title} text={p.text} img={p.img} button={p.button} buttontxt={p.buttontxt} buttonLink={p.buttonLink}></Panel>)}
        </div>
    )
}
export default Home