import { DeleteTaskButton, TableContainer, TaskCard, TaskCardBody, TaskCardDoneCheckbox, TaskCardHeader, TaskCardSelectCheckbox } from './TasksTableStyles'

const TasksTable = (props) => {

    const onMarkDone = (id) => {
        props.onMarkDoneTask(id)
    }

    const onSelect = (id) => {
        props.onSelectTask(id)
    }

    const onDelete = (id) => {
        props.onDeleteTask(id)
    }

    return (
        <TableContainer>
            {props.tasks.map((item, i) => {
                if ((props.showOnlyDone && item.done === true) || !props.showOnlyDone) {
                    if ((props.searchString.length > 0 && item.title.startsWith(props.searchString)) || props.searchString.length === 0) {
                        return (
                            <TaskCard key={`task-card-${i}`}>
                                <TaskCardHeader>
                                    <div>
                                        {item.title}
                                    </div>
                                    <div>
                                        Done:
                                        <TaskCardDoneCheckbox checked={item.done} onChange={() => onMarkDone(i)} type='checkbox' />
                                    </div>
                                </TaskCardHeader>
                                <TaskCardBody>
                                    <DeleteTaskButton onClick={() => onDelete(i)}>
                                        Delete
                                    </DeleteTaskButton>
                                    <div>
                                        Select:
                                        <TaskCardSelectCheckbox checked={item.selected} onChange={() => onSelect(i)} type='checkbox' />
                                    </div>
                                </TaskCardBody>
                            </TaskCard >
                        )
                    }
                }
                return null
            })}
        </TableContainer >
    )
}

export default TasksTable