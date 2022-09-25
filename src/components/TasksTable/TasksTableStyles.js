import styled from 'styled-components'

const TaskCard = styled.div`
    background: rgba(0, 0, 0, 0.2);
    margin: 10px;
    padding: 8px;
    border-radius: 6px
`

const TableContainer = styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr; 
    grid-template-rows: 1fr 1fr 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
        ". . ."
        ". . ."
        ". . ."; 
`

const TaskCardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const TaskCardBody = styled.div`
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const TaskCardDoneCheckbox = styled.input`
    transform: scale(1.2);
    cursor: pointer;
`

const TaskCardSelectCheckbox = styled.input`
    transform: scale(1.2);
    cursor: pointer;
`

const DeleteTaskButton = styled.button`
        width: 120px;
        height: 35px;
        font-family: Courier New;
        display: block;
        margin-top: 12px;
        background-color: rgba(255, 0, 0, 0.3);
        cursor: pointer;
    `;

export { TaskCard, TableContainer, TaskCardHeader, TaskCardBody, TaskCardDoneCheckbox, TaskCardSelectCheckbox, DeleteTaskButton }