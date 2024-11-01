import React, { useRef } from 'react'

function UseRefEx() {
   const inputRef = useRef(null)

   const hadleClick = () => {
      //직접적으로 dom을 다룬다(input 요소에 포커스)
      inputRef.current.focus()
   }

   return (
      <div>
         {/* dom을 직접적으로 다루고 싶은 요소에 inputRef 적용 */}
         <input type="text" ref={inputRef} />
         <button onClick={hadleClick}>Focus Input</button>
      </div>
   )
}

export default UseRefEx
