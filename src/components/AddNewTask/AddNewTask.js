import { useState } from 'react';
import { AddNewTaskButton, AddNewTaskContainer, AddNewTaskInput } from './AddNewTaskStyles';

const AddNewTask = (props) => {

    const [taskTitle, setTaskTitle] = useState('') // String state for task title string, changes whenever input field is modified

    const onInputChange = (event) => {
        setTaskTitle(event.target.value)
    }

    const onSubmitNewTask = () => {
        if (taskTitle.length > 0) {
            props.onAddNewTask(taskTitle)
            setTaskTitle('')
        }
    }

    return (
        <AddNewTaskContainer>
            <AddNewTaskInput autoFocus type='text' placeholder='Title' value={taskTitle} onChange={onInputChange}>

            </AddNewTaskInput>
            <AddNewTaskButton onClick={onSubmitNewTask}>
                Add New Task
            </AddNewTaskButton>
        </AddNewTaskContainer>
    )
}

export default AddNewTask