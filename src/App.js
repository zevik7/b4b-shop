import { BrowserRouter } from 'react-router-dom'
import './App.less'
import RouterApp from './components/Route'

function App() {
  return (
    <BrowserRouter>
      <RouterApp />
    </BrowserRouter>
  )
}

export default App
