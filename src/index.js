import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App'
import store from './redux/store'
import './translations'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)
