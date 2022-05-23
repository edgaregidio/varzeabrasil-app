import axios from 'axios'

const api = axios.create({
  baseURL: 'https://varzeabrasil-app-production.up.railway.app'
})

export default api
