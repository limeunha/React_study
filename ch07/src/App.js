import React, { useState, useRef, useCallback } from 'react'
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'

function App() {
   const [todos, setTodos] = useState([
      {
         id: 1,
         text: '헬스장 가기',
         checked: true,
      },
      {
         id: 2,
         text: '점심약속',
         checked: true,
      },
      {
         id: 3,
         text: '리액트 복습',
         checked: false,
      },
   ])

   //ref사용시 컴포넌트 렌더링 X, 다른 state에 바뀌면서 재렌더링이 되어도 값이 변경되지 X
   const nextId = useRef(4) //고유값으로 사용될 id, ref를 사용하여 변수 담기, 4라는값이 등록

   //할일 등록
   const onInsert = useCallback(
      (text) => {
         const newTodo = {
            id: nextId.current,
            text, // text: text,
            checked: false,
         }
         setTodos(todos.concat(newTodo)) // 'todo'를 'newTodo'로 변경
         nextId.current += 1 // nextId +1  씩 더하기
      },
      [todos]
   )

   //할일 삭제
   const onRemove = useCallback(
      (id) => {
         const removedTodos = todos.filter((todo) => todo.id !== id)
         setTodos(removedTodos)
      },
      [todos]
   )

   //할일 완료, 미완료(토글)
   const onToggle = useCallback(
      (id) => {
         const toggleTodos = todos.map((todo) =>
            todo.id === id
               ? {
                    ...todo,
                    checked: !todo.checked, //checked 값을 덮어쓴다
                 }
               : todo
         )
         setTodos(toggleTodos)
      },
      [todos]
   )

   return (
      <TodoTemplate>
         {/*컴포넌트를 children props로 전달*/}
         {/* TodoInsert 컴포넌트에 onInsert함수 전달 */}
         <TodoInsert onInsert={onInsert} />
         {/*todos는 todoListItem 컴포넌트에서 사용하므로 props로 전달*/}
         <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
   )
}

export default App
