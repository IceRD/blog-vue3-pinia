export default (http) => ({
	async getPosts(payload) {
		const params = new URLSearchParams(payload)
		try {
			const { data, error } = await http
				.get(`/posts`, { params })
				.then((response) => response)

			return {
				data,
				error,
			}
		} catch (error) {
			return {
				error: error.code,
			}
		}
	},
})
