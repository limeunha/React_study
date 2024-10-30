/*function App() {
   const name = '리액트'
   const style = {
      backgroundcolor: 'red',
      color: 'black',
      fontSize: '48px',
      padding: 16, //단위 생략시 px로 지정
   }
   return <div style={style}>{name}</div>
}*/

return (
   <div
      style={{
         backgroundcolor: 'red',
         color: 'black',
         fontSize: '48px',
         padding: 16, //단위 생략시 px로 지정
      }}
   >
      {name}
   </div>
)
//컴포넌트를 외부에서 사용 할 수 있도록 지정
export default App
