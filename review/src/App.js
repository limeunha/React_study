import Chapter3 from './Chapter3'

function App() {
   //함수를 분리했을때 넘기기
   //  const func = (a, b) => {
   //     return a + b
   //  }
   //  return <Chapter3 name="하서" num={100} arr={[1, 2, 3]} json={{ react: '리액트' }} func={func} />
   //함수 분리하지 않고 넘기기
}
return <Chapter3 name="하서" num={100} arr={[1, 2, 3]} json={{ react: '리액트' }} func={(a, b) => a + b} />

export default App
