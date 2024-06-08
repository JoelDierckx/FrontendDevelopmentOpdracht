import { FunctionComponent } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../home/Home'
import CharactersPage from '../characters/CharactersPage'
import GamePage from '../game/GamePage'

interface RoutingProps {
}
const Routing: FunctionComponent<RoutingProps> = () => {
    return (
        <Routes>
            <Route index element={<Home></Home>}></Route>
            <Route path='/Characters' element={<CharactersPage> </CharactersPage>}> </Route>
            <Route path='/Game' element={<GamePage> </GamePage>}> </Route>
        </Routes>
    )
}
export default Routing