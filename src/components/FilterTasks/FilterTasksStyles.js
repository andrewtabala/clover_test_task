import styled from 'styled-components'

const FilterTasksContainer = styled.div`
        display: flex;
        align-items: center;
    `

const FilterTasksCheckbox = styled.input`
        width: 26px;
        transform: scale(1.5);
        cursor: pointer;
        margin-left: 20px;
    `

const FilterTasksCheckboxTitle = styled.h4`
    `

export { FilterTasksContainer, FilterTasksCheckbox, FilterTasksCheckboxTitle }