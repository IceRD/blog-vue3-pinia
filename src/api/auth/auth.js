export default (http) => ({
    async signIn(payload) {
        const params = new URLSearchParams(payload)
        try {
            const { data, error } = await http
                .get(`/users`, { params })
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
