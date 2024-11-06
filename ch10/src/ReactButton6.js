import styled from 'styled-components'

// style-components는 스타일이 있는 컴포넌트(변수명 대문자)
// 백틱안에 css를 작성(css 코드와 똑같이 작성)
const StyledButton = styled.button`
   color: white;
   background-color: green;
`

// 감싸기 기능을 이용해서 styledButton의 성질을 그대로 가져온다
const LargeButton = styled(StyledButton)`
   font-size: 50px;
`

//리액트 전통방식으로 만든 컴포넌트
const ReactButton = (props) => {
   console.log('props:', props)
   // 리액트 전통방식으로 만든 컴포넌트를 감싸기로 사용하고 싶다면 아래와 같이 porps.className 을준다
   return <button className={props.className}>{props.children}</button>
}

// ReactButton의 성질을 그대로 가지고 오면서 폰트사이즈 50px의 버튼을 그대로 만들고싶다..-> 적용X
const ReactLargebutton = styled(ReactButton)`
   font-size: 50px;
`

//세미콜론 빼먹지 X
// const Primarybutton = styled.button`
//    // color: ${(props) => {
//       // 두번째 normal 버튼 porps.primary = true
//       if (props.Primary) return 'white'
//       else return 'blue'
//    }};
// `

/*
&는 현재 컴포넌트를 의미한다
가상클래스(:hover, :focus, :active)나 가상요소 (::before, ::after)와 결합해서 사용
*/
//세미콜론 빼먹지 X
const PrimaryButton = styled.button`
   color: ${(props) => (props.primary ? 'white' : 'blue')};
   background-color: ${(props) => (props.primary ? 'orange' : 'skyblue')};

   &:hover {
      background-color: ${(props) => (props.primary ? 'darkblue' : 'darkgray')};
   }
`

function ReactButton6() {
   // styled-component를 이용해서 버튼 만들기
   return (
      <div>
         <StyledButton>버튼</StyledButton>
         <LargeButton>Large</LargeButton>
         <ReactButton>React</ReactButton>
         <ReactLargebutton>React Large</ReactLargebutton>
         <PrimaryButton>Normal</PrimaryButton>
         <PrimaryButton Primary>Normal</PrimaryButton>
         <PrimaryButton size="20px">Normal</PrimaryButton>
      </div>
   )
}

export default ReactButton6
