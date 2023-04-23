import './App.css';
import {useState} from "react";

function App() {
  const [todoList, settodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

    const handleChange = (event) => {
      setNewTask(event.target.value);
    };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 0 : todoList[todoList.length -1].id + 1,
      taskName: newTask,
      complete: false,
    };
    const newTodoList = [...todoList, task];
    settodoList(newTodoList);
    setNewTask("");
  }

  const handleEnter = (e) => {
    if (e.key === "Enter") addTask();
  };

  const completeTask = (id) => {
    const newTodoList = todoList.map((task) => {
      if (task.id===id) {
        return {...task,complete: !task.complete};
      }
      return task
    });
    settodoList(newTodoList);
  };
  return (
    <div className="App">
      <h1> Pro Taskinator </h1>
      <div className="addTask">
      <input
      className="input"
      type='text'
      value = {newTask} 
      onChange={handleChange} 
      onKeyDown={handleEnter}/>
      </div>
      <div className="list">
        <ul className='todoul'>
        {todoList
        .filter(({complete}) => !complete)
        .map(({id , taskName}) => (
        <li
          className='li color-red'
          key = {id}
          onClick = {() => completeTask(id)}
        >
          {taskName}
        </li>
        ))}
  
        {todoList
        .filter(({complete}) => complete)
        .map(({id , taskName}) => (
        <li
          className='li color-green'
          key = {id}
          onClick = {() => completeTask(id)}
          style={{textDecoration: 'line-through'}}
        >
          {taskName}
        </li>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
