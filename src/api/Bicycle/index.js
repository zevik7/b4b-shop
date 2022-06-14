import axios from 'axios'

const getList = () => axios.get(`/bicycles`)

const get = (id) => axios.get(`/bicycles/${id}`)

const create = (data) => axios.post(`/bicycles`, data)

const update = (data) => axios.put(`/bicycles`, data)

const destroy = (id) => axios.delete(`/bicycles/${id}`)

export default {
  getList,
  get,
  create,
  update,
  destroy,
}
