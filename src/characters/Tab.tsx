import { Button } from 'antd'
import { FunctionComponent, useContext } from 'react'
import { CharactersPageContext } from './CharactersPageContext'
interface TabProps {
    text: string
    localkey: string
}
const Tab: FunctionComponent<TabProps> = ({ text, localkey }) => {
    const { activeTab, setTab } = useContext(CharactersPageContext)

    return (
        <Button danger={activeTab == localkey ? true : false} onClick={() => setTab(localkey)}>{text}</Button>
    )
}
export default Tab