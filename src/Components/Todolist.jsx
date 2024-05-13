import { useSelector } from 'react-redux';
import Todo from "./Todo"

export default function Todolist() {
  const todos = useSelector((state) => state);
  return (
    <>
      {todos.map((todo) => (
      <Todo key={todo.id} {...todo} />  ))}

    </>
  )
}
