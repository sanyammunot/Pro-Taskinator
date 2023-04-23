export const Task = (props) => {
    return (
        <div className='task' style ={{backgroundColor: props.complete ? "green" : "white"}}>
            <h1>{props.taskName}</h1>
          </div>
    );
};
/*
<button className='btn complete' onClick={() => props.completeTask(props.id)}> Done </button>
*/