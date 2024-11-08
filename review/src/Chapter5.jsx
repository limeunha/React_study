import React, { useState, useRef, useCallback } from 'react'

function Chapter5() {
   const [names, setNames] = useState([
      { id: 1, Text: '눈사람' },
      { id: 2, Text: '얼음' },
      { id: 3, Text: '눈' },
      { id: 4, Text: '바람' },
   ])
   const [inputText, setInput] = useState('')

   const nameList = names.map((name) => {
      ;<li>{name}</li>
   })
   return (
      <>
         <input value={inputText} onChange={onChange} />
         <button onClick={onClick}>버튼</button>
         <ul>{nameList}</ul>
      </>
   )
}

export default Chapter5
