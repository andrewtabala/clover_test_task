import { useState } from 'react'
import { FilterTasksCheckbox, FilterTasksCheckboxTitle, FilterTasksContainer } from './FilterTasksStyles'

const FilterTasks = (props) => {

    const [checked, setChecked] = useState(props.filterState) // Boolean state responsible for the checkbox value

    const onClickCheckbox = () => {
        props.onChangeFilter(!checked)
        setChecked(!checked)
    }

    return (
        <FilterTasksContainer>
            <FilterTasksCheckboxTitle>
                Display only 'Done' tasks?
            </FilterTasksCheckboxTitle>
            <FilterTasksCheckbox type='checkbox' checked={checked} onChange={onClickCheckbox} />
        </FilterTasksContainer>
    )
}

export default FilterTasks