import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_SERVER_API

export * from './Bicycle'
