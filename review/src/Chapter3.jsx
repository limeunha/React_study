import { useState, useCallback } from 'react'

function Chapter3({ name = '하서', num = 0, arr, json, func }) {
   // function Chapter3(props) {
   //     const { name, num, arr, json, func } = props

   //state가 바뀌먄 컴포넌트가 재 렌더링 -> function 컴포넌트 코드가 다시 실행
   const [text, setText] = useState('')

   const onChange = useCallback((e) => setText(e.target.value), [])

   return (
      <div>
         <p>{name}</p>
         <p>{num}</p>
         <p>{arr.map((num) => num)}</p>
         <p>{json.react}</p>
         {/*함수에서 return한 결과 출력*/}
         <p>{func(1, 2)}</p>

         <input type="text" value={text} onChange={onChange} />
      </div>
   )
}

export default Chapter3
