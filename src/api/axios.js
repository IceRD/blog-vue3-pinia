import axios from 'axios'

axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8'
axios.defaults.headers.get['Accept'] = 'application/json'
axios.defaults.baseURL = import.meta.env.VITE_API_URL

export default axios
