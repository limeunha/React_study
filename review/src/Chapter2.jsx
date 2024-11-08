import './App.css'

function Chapter2() {
   const name = '하서'
   const style = {
      backgroundColor: 'red',
      fontSize: '48px',
   }

   const number = null //false
   const boolean = true
   return (
      <>
         <input type="radio" checked={number && boolean} />
         <h1>리액트</h1>
         <h1>{name}</h1>
         <h1>{name === '하서' ? <p>하서입니다</p> : <p>하서가 아닙니다.</p>}</h1>
         <p>{'리액트' && <h1>리액트 입니다.</h1>}</p>
         <p>{'리액트' || <h1>리액트 입니다.</h1>}</p>
         <p style={style}>안녕하세요</p>
         <p
            style={{
               backgroundColor: 'red',
               fontSize: '48px',
            }}
         >
            안녕하세요
         </p>
         <p className="test">안녕하세요</p>
         <input></input>
         <TestComponent />
      </>
   )
}

export default Chapter2
