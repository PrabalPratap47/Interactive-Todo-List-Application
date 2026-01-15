import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts';
import TodoForm from './Components/TodoForm';
import TodoItem from './Components/TodoItem';

function App() {
 const [todos, setTodos] = useState([]);

 
const addTodo = (todo) =>{
  setTodos((prev) => [{id:Date.now(), ...todo}, ...prev] )
}

const updateTodo =(id,todo) =>{
  setTodos((prev) => prev.map(prevTodo => prevTodo.id === id ? todo : prevTodo))
}

const deleteTodo = (id) =>{
  setTodos(prev => prev.filter((todo) => todo.id !== id)) // 
}

const toggleComplete = (id) =>{
  setTodos(prev => prev.map((Prevtodo) => Prevtodo.id === id ? {...Prevtodo, completed : !Prevtodo.completed} : Prevtodo) )
}



useEffect(() => {
  try {
    const storedTodos = localStorage.getItem("todos")
    const todos = storedTodos ? JSON.parse(storedTodos) : []

    if (todos.length > 0) {
      setTodos(todos)
    }
  } catch (error) {
    console.error("Invalid todos in localStorage", error)
  }
}, [])


useEffect(()=>{
 localStorage.setItem("todos", JSON.stringify(todos))
},[todos])

  return (
    <TodoProvider value={{todos,addTodo,deleteTodo,toggleComplete,updateTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */}
                        <TodoForm/> 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key = {todo.id} className='w-full'>
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
