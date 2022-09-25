import AddNewTask from './components/AddNewTask/AddNewTask';
import FilterTasks from './components/FilterTasks/FilterTasks';
import SearchTasks from './components/SearchTasks/SearchTasks';
import TasksTable from './components/TasksTable/TasksTable';

import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react"
import { AppComponent, DeleteSelectedButton, DoneSelectedButton, HeaderComponent, SelectedButtonsContainer, TasksCount, TasksTableContainer } from './AppStyles';


class TodoList {
  tasks = [] // State with array of all existing tasks
  showOnlyDone = false // State with a boolean responsible for filtering, false means show all tasks, true means show only tasks that are done
  searchString = '' // State with a search string, responsible for searching tasks by title

  constructor() {
    makeAutoObservable(this)
  }

  //Adding new task by pushing a new empty task to the end of the existing array
  onAddNewTask = (taskTitle) => {
    this.tasks = [...this.tasks, { title: taskTitle, done: false, selected: false }]
  }

  //Changing boolean for onlyDone filter
  onChangeFilter = (filterStatus) => {
    this.showOnlyDone = filterStatus
  }

  //Applying new search string on change, empty string in case there is no data (sometimes we can receive damaged state if we don't cover this edge-case)
  onSearchStringChange = (newSearchString) => {
    this.searchString = newSearchString.length > 0 ? newSearchString : ''
  }

  //Search task by index and delete it, updating the state
  onDeleteTask = (id) => {
    let newTasks = this.tasks;
    newTasks.splice(id, 1);
    this.tasks = [...newTasks]
  }

  //Cycle through all the tasks, delete only those that are selected via filter method
  onDeleteSelectedTasks = () => {
    this.tasks = this.tasks.filter((item) => !(item.selected))
  }

  //Mark task as done based on its index 
  onMarkDoneTask = (id) => {
    const newTasks = this.tasks;
    newTasks[id].done = !newTasks[id].done
    this.tasks = [...newTasks]
  }

  //Cycle through all the tasks, mark done/undone only those that are selected via filter method
  onMarkDoneSelectedTasks = () => {
    let newTasks = this.tasks;
    newTasks.forEach((task, i) => {
      if (task.selected) {
        newTasks[i].done = !newTasks[i].done
      }
    })
    this.tasks = [...newTasks]
  }

  // Select the task based on its passed index
  onSelectTask = (id) => {
    const newTasks = this.tasks;
    newTasks[id].selected = !newTasks[id].selected
    this.tasks = [...newTasks]
  }

  //Display total count function
  //We have to cover all edge-cases, so we have different conditions depending on whether
  //"only show done tasks" is selected or the search string is not empty
  displayTotalCount = () => {
    let count = 0
    if (!this.showOnlyDone) {
      if (this.searchString.length > 0) {
        count = this.tasks.filter(task => task.title.startsWith(this.searchString)).length
      }
      else {
        count = this.tasks.length
      }
    }
    else {
      if (this.searchString.length > 0) {
        count = this.tasks.filter((task) => task.done && task.title.startsWith(this.searchString)).length
      }
      else {
        count = this.tasks.filter((task) => task.done).length
      }
    }
    return count
  }

}

const TodoListState = new TodoList()

function App() {
  const App = observer(({ todolist }) =>
    <AppComponent>
      <HeaderComponent>
        <AddNewTask onAddNewTask={todolist.onAddNewTask} />
        <FilterTasks filterState={todolist.showOnlyDone} onChangeFilter={todolist.onChangeFilter} />
        <SearchTasks searchString={todolist.searchString} onSearchStringChange={todolist.onSearchStringChange} />
        <TasksCount>
          {`Total: ${todolist.displayTotalCount()}`}
        </TasksCount>
      </HeaderComponent>
      {todolist.tasks.some(task => task.selected) ? (
        <SelectedButtonsContainer>
          <DeleteSelectedButton onClick={todolist.onDeleteSelectedTasks}>
            Delete selected
          </DeleteSelectedButton>
          <DoneSelectedButton onClick={todolist.onMarkDoneSelectedTasks}>
            Mark selected as Done
          </DoneSelectedButton>
        </SelectedButtonsContainer>
      ) : null}
      <TasksTableContainer>
        <TasksTable searchString={todolist.searchString} tasks={todolist.tasks} showOnlyDone={todolist.showOnlyDone} onMarkDoneTask={todolist.onMarkDoneTask} onSelectTask={todolist.onSelectTask} onDeleteTask={todolist.onDeleteTask}>

        </TasksTable>
      </TasksTableContainer>
    </AppComponent>
  )

  return (
    <App todolist={TodoListState} />
  );
}

export default App;
