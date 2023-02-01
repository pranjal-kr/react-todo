import { useState } from "react"
import "./app.css"
<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');
</style>

function App() {
  // let [todos, setTodos] = useState([])
  // let [currentTodo, setCurrentTodo] = useState("")
  // function handleInput(e) {
  //   setCurrentTodo(e.target.value)
  // }
  // function addTodo() {
  //   todos.push(currentTodo)
  //   setTodos([...todos])
  // }
  // return (
  //   <div>
  //   <input onChange={handleInput} value={currentTodo} type="text" />
  //   <button onClick={addTodo}>add</button>
  //   {
  //     todos.map((value, key) => {return (
  //       <h2>{value}, {key}</h2>
  //     )})
  //   }
  //   </div>
  // )
  return(
    <div className="thebody">
      <div className="intro">
        {/* <h1 className="intro-">Organize your day  with to-do_js</h1> */}
      </div>
      <div className="titlle"><h1>Todo List</h1></div>

      {/* <h1 className="greeting">Welcome</h1> */}
   <div className="classname">
    <div className="container">
    <h1>Meow</h1>
    <br />
    <ul className="list">
      <li><h2>Breakfast</h2></li><br />
      <li><h2>Study</h2></li><br />
      <li><h2>Walk Dog</h2></li><br />
      <li><h2>Realize that you don't have one</h2></li><br /><br /><br />
      
    </ul>
    </div>
   </div>
   </div>
  )
}

export default App
