import { useDispatch } from 'react-redux';
import { doTodoAction, removeTodoAction } from '../Redux/store/Todos';
 
export default function Todo({title,id ,isDone}) {
  const dispatch = useDispatch()
  
  const trashBtnHandler=(id)=>{
    dispatch(removeTodoAction(id))
  }

  const doTodoHandler=(id)=>{
    dispatch(doTodoAction(id))
  }
  return (
   <>{isDone?
   <div className="todo">
      <li className="todo-item completed">{title}</li>
      <button className="complete-btn" onClick={()=>doTodoHandler(id)}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={()=>trashBtnHandler(id)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>:
   <div className="todo">
      <li className="todo-item " >{title}</li>
      <button className="complete-btn" onClick={()=>doTodoHandler(id)}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={()=>trashBtnHandler(id)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
    
  }
   </>
     )
}
