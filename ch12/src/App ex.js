import { Provider } from 'react-redux'
import Counter from './NonToolkit/Counter'
import storeNonToolkit from './NonToolkit/store'

function App() {
   return (
      <Provider store={storeNonToolkit}>
         <counter />
      </Provider>
   )
}

export default App
