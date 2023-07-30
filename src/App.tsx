import { useState } from "react";
import { Todos } from "./components/Todos";

const mockTodos = [
  {
    id: '1',
    title: 'Hacer ejercicio',
    completed: true
  },
  {
    id: '2',
    title: 'Ir a la Seguridad Social',
    completed: false
  },
  {
    id: '3',
    title: 'Trabajar en remoto',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos);
  return (
    <div className="todoapp">
      <Todos todos={todos}/>
      </div>
    
  )
}

export default App
