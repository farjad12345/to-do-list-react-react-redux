import './App.css';
import Todolist from './Components/Todolist';
import { useDispatch ,useSelector } from 'react-redux';
import { addTodoACtion, getAllTodoAction } from './Redux/store/Todos';
import { useState } from 'react';

export default function App() {
  const dispatch = useDispatch()
  const State = useSelector(state => state)
  const [title, setTitle] = useState("")
  const [allTodos, setAllTodos] = useState("")

  const addTodoHandler = (event) => {
    event.preventDefault();
    dispatch(addTodoACtion(title))
    setTitle("");
  }
  const getallTodoHandler = (event) => {
    var getAll=[]
    // event.preventDefault();
    // dispatch(getAllTodoAction(title))
    switch (event.target.value) {
      case "all":
        getAll= [...State]
        return setAllTodos([...getAll])
        
        case "complted":
          getAll= [...State.filter((todo) =>todo.isDone === true)]
          return setAllTodos(getAll)
          
          
          case "uncomplted":
            getAll=  [...State.filter((todo) =>todo.isDone === false)]
            return setAllTodos(getAll);
            
            // default:
            //   return State
          }
          console.log(allTodos);
  }
  return (
    <>
      <header>
        <h1 className='header'>Farjad todos list</h1>
      </header>
      <form action="">

        <div className='main'>
          <input
            type='text'
            className='add-todo'
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <button
            className='add-btn'
            onClick={addTodoHandler}
          ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>
          <select name="option-list" className="option-list" onChange={(e)=> getallTodoHandler(e)}>
            <option value="all" >All</option>
            <option value="complted" >Complted</option>
            <option value="uncomplted">Uncomplted</option>
          </select>
        </div>
      </form>
      <div className="todo-container">
        <ul className="todo-list">

          <Todolist props={title} />
        </ul>
        {/* Todo */}

      </div>
      {/* <ul>


        {(props.store.map((prop) => <li>{prop}  </li>))}
      </ul> */}
    </>
  );
}

// function mapDispatchToProps(dispatch) {
//   return { addtodo: (title) => dispatch(addTodoACtion(title)) }
// }
// export default connect(null,mapDispatchToProps)(App);
