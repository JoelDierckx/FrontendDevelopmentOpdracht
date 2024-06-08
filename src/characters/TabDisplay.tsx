import { Card, Col, List, Row, Space } from 'antd'
import { CSSProperties, FunctionComponent, useContext } from 'react'
import { CharactersPageContext } from './CharactersPageContext'



interface TabDisplayProps {
}
const TabDisplay: FunctionComponent<TabDisplayProps> = () => {
    const { characters, activeTab } = useContext(CharactersPageContext)

    const ImgStyle: CSSProperties = {
        maxHeight: 200,
        width: "auto",
        alignSelf: "center",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
    }

    return (
        <Row>
            <Col span={12} offset={6}>
                {characters != undefined ? characters.map(char => <Space key={char.Name} direction="vertical" size={24} hidden={char.Name == activeTab ? false : true} style={{ minWidth: 400 }}>
                    <Card title={char.Name}>
                        <div style={{ width: "100%" }}><img alt="character" src={char.Image} style={ImgStyle} /></div>
                        <List size="large"
                            bordered>
                            <List.Item><h2 style={{ fontWeight: 'bold' }}>Occupation:</h2><p>{char.Occupation}</p></List.Item>
                            <List.Item><h2 style={{ fontWeight: 'bold' }}>HomeTown:</h2><p>{char.HomeTown}</p></List.Item>
                            <List.Item><h2 style={{ fontWeight: 'bold' }}>Gender:</h2><p>{char.Gender}</p></List.Item>
                            <List.Item><h2 style={{ fontWeight: 'bold' }}>Gamerole:</h2><p>{char.Gamerole}</p></List.Item>
                            <List.Item><p>{char.Description}</p></List.Item>
                        </List>

                    </Card>
                </Space>) : <></>}
            </Col>

        </Row>
    )
};
export default TabDisplay