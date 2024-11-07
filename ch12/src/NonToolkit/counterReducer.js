const initialState = { value: 0 }

function counterReducer(state = initialState, action) {
   if (action.type === 'up') {
      return { ...state, value: state.value + action.payload }
   }

   return state
}

export default counterReducer
