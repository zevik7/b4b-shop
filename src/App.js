import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import './App.less'
import RouterApp from './Route'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <RouterApp />
      </Router>
    </Provider>
  )
}

export default App
