function App() {
   // 3. &&연산자 (A && B) -> A가 true면 B를 렌터링, A가 false면 A를 렌더링
   return <div>{'리액트' && <h1>리액트 입니다.</h1>}</div>
}

//컴포넌트를 외부에서 사용 할 수 있도록 지정
export default App
