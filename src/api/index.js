import axios from 'axios'
export * from './Bicycle'

axios.defaults.baseURL = process.env.REACT_APP_SERVER_API
