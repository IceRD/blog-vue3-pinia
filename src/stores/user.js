import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
	state: () => ({
		login: '',
		role: '',
	}),
	getters: {},
	actions: {
		setUser({ login, role }) {
			this.login = login
			this.role = role
		},

		clearUser() {
			this.login = ''
			this.role = ''
		},
	},
})
