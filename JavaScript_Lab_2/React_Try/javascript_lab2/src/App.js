import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState(
    [
      {
        id: '1',
        text: 'Docter Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
      },
      {
        id: '2',
        text: 'Docter Appointment',
        day: 'Feb 5th at 2:00pm',
        reminder: true
      },
      {
        id: '3',
        text: 'Docter App',
        day: 'Feb 5th at 4:00pm',
        reminder: false,
      }
    ]
  )
  return (
    <div className="container">
      <Header ></Header>
      <Tasks tasks={tasks}></Tasks>
    </div>
  );
}

export default App;
