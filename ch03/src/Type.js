const type = (props) => {
   const { str, num, bool, arr, json, func } = props
   const result = func(1, 2)

   return (
      <div>
         <p>StringProps: {str}</p>
         <p>NumberProps: {num}</p>
         <p>BooleanProps: {bool.toString()}</p>
         <p>ArrayProps: {arr.toString()}</p>
         <p>JsonProps: {JSON.stringify(json)}</p>
         <p>functionProps: {func}</p>
         {/* <p>functionProps: {func(1,2)}</p> */}
      </div>
   )
}

export default type
