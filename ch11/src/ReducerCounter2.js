import React, { useReducer } from 'react'

function ReducerCounter2() {
   // [state 값, ] = (reducer로 사용할 함수 이름, state 초기값)
   const [count, countDispatch] = useReducer(countReducer, 0)

   //직접 state을 변경한다(회계직원)
   function countReducer(oldCount, action) {
      //(현재 state, dispath에서 전달받은 action)
      if (action === 'UP') {
         return oldCount + 1 //return 실행시 state가 업데이트
      } else if (action === 'DOWN') {
         return oldCount - 1
      } else if (action === 'RESET') {
         return 0
      }
   }

   //dispath 함수 : 이벤트 발생 action을 reducer 함수에게 전달(창구직원역할)

   const down = () => countDispatch('DOWN')
   const reset = () => countDispatch('RESET')
   const up = () => countDispatch('UP')

   return (
      <>
         <input type="button" value="-" onClick={down} />
         <input type="button" value="0" onClick={reset} />
         <input type="button" value="+" onClick={up} />
         <span>{count}</span>
      </>
   )
}
export default ReducerCounter2
