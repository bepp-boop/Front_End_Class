import Task from './Task';
const Tasks = ({ tasks, onDelete }) => {
  return (
    <>
      {tasks.map((tasks) => (
        <Task key={tasks.id} task={tasks} onDelete={onDelete} />
      ))}
    </>
  )
}

export default Tasks