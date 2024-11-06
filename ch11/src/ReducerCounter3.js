import React, { useReducer, useState } from 'react'

function ReducerCounter3() {
   // [state 값, ] = (reducer로 사용할 함수 이름, state 초기값)
   const [count, countDispatch] = useReducer(countReducer, 0)
   const [number, setNumber] = useState(1)

   //직접 state을 변경한다(회계직원)
   function countReducer(oldCount, action) {
      //(현재 state, dispath에서 전달받은 action)
      if (action.type === 'UP') {
         return oldCount + action.number //return 실행시 state가 업데이트
      } else if (action === 'DOWN') {
         return oldCount - action.Number
      } else if (action === 'RESET') {
         return 0
      }
   }

   //dispath 함수 : 이벤트 발생 action을 reducer 함수에게 전달(창구직원역할)
   // dispath에서 매개변수가 2개이상의 값을 전달하고 싶을때 json객체형태로 전달, action은 type key값으로 전달
   const down = () => countDispatch({ type: 'DOWN', number: number })
   const reset = () => countDispatch({ type: 'RESET', number: number })
   const up = () => countDispatch({ type: 'UP', number: number })

   const changeNumber = (e) => setNumber(Number(e.target.value))

   return (
      <>
         <input type="button" value="-" onClick={down} />
         <input type="button" value="0" onClick={reset} />
         <input type="button" value="+" onClick={up} />
         <input type="text" value={number} onChange={changeNumber} />
         <span>{count}</span>
      </>
   )
}
export default ReducerCounter3
