import { useEffect, useState } from "react";
import { todocontext } from "./context";
import { TodoItem, TodoForm } from "./components";


function App() {
  const [todos, settodos] = useState([])
  
  const addTodo = (indivTodo) => {
    // settodos(indivTodo)
    // purani state ka access
    // purani values spread by ...prev
    settodos((prev) => [{id: Date.now(), ...indivTodo},...prev]) // default values in indivTodo 
    //     {
    //      id: <current_timestamp>,
    //      todo: "todomsg",
    //      completed: false,
    //      }  
  }

  const updateTodo = (id, indivTodo) => {
    settodos((prev) => prev.map((prevTodoIndiv) => (prevTodoIndiv.id === id? indivTodo : prevTodoIndiv)))
  }
  const deleteTodo = (id) => {
    settodos((prev) => prev.filter((indivTodo) => indivTodo.id !== id))
    
  }
  const toggleComplete = (id) => {
    settodos((prev) =>
      prev.map((prevTodoIndiv) =>
        prevTodoIndiv.id === id
          ? {...prevTodoIndiv, completed: !prevTodoIndiv.completed} // spreading important
          : prevTodoIndiv
      )
    );
  };

  useEffect(() => {
    // localStorage.getItem("todos")  // gives the string
    const todos = JSON.parse(localStorage.getItem("todos")) // when did we send it to local storage
    if(todos && todos.length > 0){
      settodos(todos)
    }
  }, [])

  useEffect(() => {
    // localStorage.getItem("todos")  // gives the string
    localStorage.setItem("todos", JSON.stringify(todos)); // key = todos value, sent as string
    if (todos && todos.length > 0) {
      settodos(todos);
    }
  }, [todos]);


  return (
    <todocontext.Provider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </todocontext.Provider>
  );
}

export default App
