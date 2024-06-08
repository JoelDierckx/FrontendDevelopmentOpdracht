import { FunctionComponent } from 'react'
import TabsWithSearch from './TabsWithSearch'
interface CharactersPageProps {
}
const CharactersPage: FunctionComponent<CharactersPageProps> = () => {
    return (
        <div style={{ marginLeft: 16, marginRight: 16 }}>
            <TabsWithSearch>
            </TabsWithSearch>
        </div>
    )
}
export default CharactersPage