import { Col, Divider, Row } from 'antd'
import { FunctionComponent, useState } from 'react'
import TabDisplay from './TabDisplay'
import TabsBox from './TabsBox'
import TabSearchBox from './TabSearchBox'
import { ICharacter } from '../models/ICharacter'
import { CharacterArray } from '../assets/data/CharacterData'
import { CharactersPageContext } from './CharactersPageContext'
import SearchDisplay from './SearchDisplay'



interface TabsWithSearchProps {
}
const TabsWithSearch: FunctionComponent<TabsWithSearchProps> = () => {
    const characters: ICharacter[] = CharacterArray;
    const [filteredChar, SetfilteredChar] = useState<ICharacter[]>(characters)
    const [activeTab, SetactiveTab] = useState<string>(characters[0].Name)
    const [searchDisplay, SetsearchDisplay] = useState<string>("")

    const filterCharacters = (search: string | undefined) => {
        console.log(search)
        if (search != undefined) {
            const filtered: ICharacter[] = []
            characters.forEach(character => {
                if ((character.Gamerole.toLowerCase().indexOf(search.toLowerCase()) >= 0) || (character.Gender.toLowerCase().indexOf(search.toLowerCase()) >= 0) || (character.HomeTown.toLowerCase().indexOf(search.toLowerCase()) >= 0) || (character.Name.toLowerCase().indexOf(search.toLowerCase()) >= 0) || (character.Occupation.toLowerCase().indexOf(search.toLowerCase()) >= 0)) {
                    filtered.push(character)
                }
            });
            SetfilteredChar(filtered);
            SetactiveTab(filtered[0].Name);
            SetsearchDisplay(search);
        } else {
            SetfilteredChar(characters)
            SetsearchDisplay("");
        }
    }

    const switchActiveTab = (key: string) => {
        if (activeTab != key) {
            SetactiveTab(key)
        }
    }

    return (
        <CharactersPageContext.Provider value={{ activeTab: activeTab, characters: filteredChar, setfilter: filterCharacters, setTab: switchActiveTab }}>
            <Row style={{ marginTop: 16 }}>
                <Col span={18}><TabsBox></TabsBox></Col>
                <Col span={6}><TabSearchBox></TabSearchBox></Col>
            </Row>
            <Row style={{ marginTop: 16 }} hidden={searchDisplay == "" ? true : false} >
                <Col span={24}><SearchDisplay text={'Searchresult for \"' + searchDisplay + "\""}></SearchDisplay></Col>
            </Row>
            <Divider />
            <TabDisplay></TabDisplay>
        </CharactersPageContext.Provider>
    )
}
export default TabsWithSearch