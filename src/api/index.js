import axios from './axios'
import auth from './auth/auth'
import blog from './blog/blog'

const api = (http) => ({
	auth: auth(http),
	blog: blog(http),
})

export default api(axios)
