import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:4000/'
})

export default api

// https://varzeabrasil-app-production.up.railway.app/
