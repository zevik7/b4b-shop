import axios from 'axios'

export const getBicycles = () => axios.get(`/bicycles`)

export const updateBicycle = (data) => axios.put(`/bicycles`, data)

export const storeBicycle = (data) => axios.post(`/bicycles`, data)

export const destroyBicycles = (id) => axios.delete(`/bicycles/${id}`)
