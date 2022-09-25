import { useState } from 'react'
import { SearchContainer, SearchInput, SearchTitle } from './SearchTasksStyles'

const SearchTasks = (props) => {

    const [searchString, setSearchString] = useState(props.searchString) // String state that is responsible for the input search string

    const onInputChange = (event) => {
        setSearchString(event.target.value)
        props.onSearchStringChange(event.target.value)
    }

    return (
        <SearchContainer>
            <SearchTitle>
                Search:
            </SearchTitle>
            <SearchInput autoFocus type='text' placeholder='Search' value={searchString} onChange={onInputChange} />
        </SearchContainer>
    )
}

export default SearchTasks