import axios from 'axios'
export * from './Bicycle'

axios.defaults.baseURL = process.env.REACT_APP_SERVER_API

export { default as bicycle } from './Bicycle'
export { default as checkout } from './Checkout'
