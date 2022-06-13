import axios from 'axios'
import { API_URL } from '../../constants'
const endpoint = 'bicycles'
export const getBicyclesAPI = (url, config) => {
  return axios.get(`${API_URL}/${endpoint}`)
}
