import axios from 'axios'

const getList = () => axios.get(`/checkouts`)

const get = (id) => axios.get(`/checkouts/${id}`)

const create = (data) => axios.post(`/checkouts`, data)

const update = ({ id, data }) => axios.put(`/checkouts/${id}`, data)

const destroy = (id) => axios.delete(`/checkouts/${id}`)

export default {
  getList,
  get,
  create,
  update,
  destroy,
}
