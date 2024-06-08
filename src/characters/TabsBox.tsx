import { FunctionComponent, useContext } from 'react'
import { CharactersPageContext } from './CharactersPageContext'
import Tab from './Tab'
interface TabsProps {
}
const TabsBox: FunctionComponent<TabsProps> = () => {
    const { characters } = useContext(CharactersPageContext)

    return (
        <>
            {characters != undefined ? characters.map(char => <Tab key={char.Name} localkey={char.Name} text={char.Name} ></Tab>) : <></>}
        </>
    )
}
export default TabsBox