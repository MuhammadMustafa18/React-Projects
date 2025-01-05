import React, { useState } from 'react'
import { usetodo } from '../context';

const TodoForm = () => {
    const [todo, settodo] = useState("") // string
    const {addTodo} = usetodo()
    const add = (e) => {
        e.preventDefault()
        if(!todo) return 
        addTodo({todo, completed:false}) // those default vals, the id has been taken care of
        settodo("")
    }
  return (
    <form className="flex" onSubmit={add}>
      <input
        type="text"
        placeholder="Write Todo..."
        value={todo}
        onChange={(e) => settodo(e.target.value)}
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;