import axios from 'axios'

export const api = axios.create({
  baseURL: 'htpps://localhost:3000/api',
})