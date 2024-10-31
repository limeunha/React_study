function IterationSample() {
   const names = ['눈사람', '얼음', '눈', '바람']
   const nameList = names.map((name) => (
      //컴포넌트 리턴

      <li>{name}</li>
   ))

   return <ul>{nameList}</ul>
}

export default IterationSample
