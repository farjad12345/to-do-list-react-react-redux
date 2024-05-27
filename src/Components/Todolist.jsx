import { useSelector } from 'react-redux';
import Todo from "./Todo"

export default function Todolist() {
  const todos = useSelector((state) => state);
  console.log("state", todos);
  return (
    <>
      {todos.map((todo) => (
      <Todo key={todo.id} {...todo} />  ))}

    </>
  )
}
