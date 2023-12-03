import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.0.54:3333',
})

api.interceptors.response.use(
  (response) => {
    console.log('INTERCEPTOR RESPONSE =>', response)
    return response
  },
  (error) => {
    console.log('INTERCEPTOR RESPONSE ERROR =>', error)
    Promise.reject(error)
  }
)

export { api }
