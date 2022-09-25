import styled from 'styled-components'

const HeaderComponent = styled.div`
    padding: 60px 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `

const AppComponent = styled.div`
  
  `

const TasksCount = styled.div`
  
  `

const TasksTableContainer = styled.div`
    padding: 40px 120px;
  `

const SelectedButtonsContainer = styled.div`
    display: flex;
  `

const DeleteSelectedButton = styled.button`
        margin-left: 120px;
        width: 180px;
        height: 35px;
        font-family: Courier New;
        display: block;
        margin-top: 12px;
        background-color: rgba(255, 0, 0, 0.3);
        cursor: pointer;
  `

const DoneSelectedButton = styled.button`
        margin-left: 40px;
        width: 220px;
        height: 35px;
        font-family: Courier New;
        display: block;
        margin-top: 12px;
        background-color: rgba(0, 0, 0, 0.2);
        cursor: pointer;
  `

export { HeaderComponent, AppComponent, TasksCount, TasksTableContainer, SelectedButtonsContainer, DeleteSelectedButton, DoneSelectedButton }