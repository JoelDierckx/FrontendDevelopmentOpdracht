import { FunctionComponent } from 'react'
interface SearchDisplayProps {
    text: string
}
const SearchDisplay: FunctionComponent<SearchDisplayProps> = ({ text }) => {
    return (
        <><h3>{text}</h3>
        </>
    )
}
export default SearchDisplay