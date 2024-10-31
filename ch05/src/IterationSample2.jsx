function IterationSample2() {
   const names = ['눈사람', '얼음', '눈', '바람']
   const nameList = names.map((name, index) => (
      //컴포넌트 리턴

      <li key={index}>{name}</li>
   ))

   return <ul>{nameList}</ul>
}

export default IterationSample2
