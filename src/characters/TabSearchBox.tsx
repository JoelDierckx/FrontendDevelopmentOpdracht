import { Space } from 'antd'
import Search from 'antd/es/input/Search'
import { FunctionComponent, useContext } from 'react'
import { CharactersPageContext } from './CharactersPageContext'
interface TabSearchBoxProps {
}
const TabSearchBox: FunctionComponent<TabSearchBoxProps> = () => {
    const { setfilter } = useContext(CharactersPageContext)

    return (
        <>
            <Space align='center'>
                <Search placeholder="input search text" onSearch={(input: string) => setfilter(input)} style={{ width: 200 }} />
            </Space>

        </>
    )
}
export default TabSearchBox