function App() {
   //2.{}중괄호를 이용시 자바스크립트 표현식 사용가능
   //if문 대신 삼항 연산자를 주로 사용

   //5. class가 아닌 className을 사용
   const name = '리액트'
   return <div className="react">{name}</div>
}

//컴포넌트를 외부에서 사용 할 수 있도록 지정
export default App
