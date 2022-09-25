import styled from 'styled-components'

const AddNewTaskButton = styled.button`
        width: 120px;
        height: 35px;
        font-family: Courier New;
        display: block;
        margin-top: 12px;
        background-color: rgba(0, 0, 0, 0.2);
        cursor: pointer;
    `;

const AddNewTaskContainer = styled.div`
        display: block
    `;

const AddNewTaskInput = styled.input`
        display: block
    `;

export { AddNewTaskButton, AddNewTaskInput, AddNewTaskContainer }