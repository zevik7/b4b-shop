import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import './App.less'
import RouterApp from './Route'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouterApp />
      </BrowserRouter>
    </Provider>
  )
}

export default App
