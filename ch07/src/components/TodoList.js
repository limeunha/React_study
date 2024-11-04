import './css/TodoList.css'
import TodoListItem from './TodoListltem'

const TodoList = ({ todos, onRemove, onToggle }) => {
   return (
      <div>
         {todos.map((todo) => (
            <TodoListItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} />
         ))}
      </div>
   )
}

export default TodoList
